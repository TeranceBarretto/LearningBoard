package goa.education.learningBoard.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "folders")
public class Folder implements Serializable
{
    private static final long serialVersionUID = 1l;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;

    protected String name;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    private CourseContent courseContent;

    @OneToMany(
            mappedBy = "folder",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    @JsonIgnore
    private List< CourseData > data = new ArrayList<>();

    public Folder(){}

    public Folder( String name )
    {
        this.name = name;
    }

    public Long getId()
    {
        return id;
    }

    public void setId( Long id )
    {
        this.id = id;
    }

    public String getName()
    {
        return name;
    }

    public void setName( String name )
    {
        this.name = name;
    }

    public CourseContent getCourse()
    {
        return courseContent;
    }

    public void setCourseContent( CourseContent courseContent )
    {
        this.courseContent = courseContent;
    }

    public List< CourseData > getData()
    {
        return data;
    }

    public void setData( List< CourseData > data )
    {
        this.data = data;
    }

    public void addData(CourseData courseData) {
        data.add(courseData);
        courseData.setFolder(this);
    }

    public void removeData(CourseData courseData) {
        data.remove(courseData);
        courseData.setFolder(null);
    }
}
