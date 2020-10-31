package goa.education.learningBoard.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "courseContent")
public class CourseContent implements Serializable
{
    private static final long serialVersionUID = 1l;

    @Id
    @Column(name = "course_id")
    protected Long id;

    @JsonIgnore
    @OneToOne
    @MapsId
    @JoinColumn(name = "course_id")
    private Course course;

    @OneToMany(
            mappedBy = "courseContent",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    @JsonIgnore
    private List< CourseData > liveFeed = new ArrayList<>();

    @OneToMany(
            mappedBy = "courseContent",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    @JsonIgnore
    private List< Folder > folders = new ArrayList<>();

    public CourseContent()
    {

    }

    public CourseContent(Course course) {
        this.course = course;
        course.setCourseContent(this);
    }

    public Long getId()
    {
        return id;
    }

    public void setId( Long id )
    {
        this.id = id;
    }

    public List< Folder > getFolders()
    {
        return folders;
    }

    public void setFolders( List< Folder > folders )
    {
        this.folders = folders;
    }

    public void addFolder(Folder folder) {
        folders.add(folder);
        folder.setCourseContent(this);
    }

    public void removeFolder(Folder folder) {
        folders.remove(folder);
        folder.setCourseContent(null);
    }

    public List< CourseData > getLiveFeed()
    {
        return liveFeed;
    }

    public void setLiveFeed( List< CourseData > liveFeed )
    {
        this.liveFeed = liveFeed;
    }

    public void addLiveFeed(CourseData courseData) {
        liveFeed.add(courseData);
        courseData.setCourseContent(this);
    }

    public void removeLiveFeed(CourseData courseData) {
        liveFeed.remove(courseData);
        courseData.setCourseContent(null);
    }

    public Course getCourse()
    {
        return course;
    }

    public void setCourse( Course course )
    {
        this.course = course;
    }
}
