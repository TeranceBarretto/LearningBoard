package goa.education.learningBoard.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "course")
public class Course implements Serializable
{
    private static final long serialVersionUID = 1l;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;

    protected String name;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "STUDENTS_COURSES",
            joinColumns = @JoinColumn(name = "COURSE_ID", referencedColumnName = "ID"),
            inverseJoinColumns = @JoinColumn(name = "STUDENT_ID", referencedColumnName = "ID")
    )
    private List<User> students;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "PROFESSORS_COURSES",
            joinColumns = @JoinColumn(name = "COURSE_ID", referencedColumnName = "ID"),
            inverseJoinColumns = @JoinColumn(name = "PROFESSOR_ID", referencedColumnName = "ID")
    )
    private List<User> professors;

    @OneToMany(cascade=CascadeType.ALL,
            orphanRemoval = true)
    private List<Schedule> schedules;

    @JsonIgnore
    @OneToOne(mappedBy = "course", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private CourseContent courseContent;

    private Long termId;

    public Course() {}

    public Course(String name )
    {
        this.name = name;
    }

    public List< User > getStudents()
    {
        return students;
    }

    public void setStudents( List< User > students )
    {
        this.students = students;
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

    public List< User > getProfessors()
    {
        return professors;
    }

    public void setProfessors( List< User > professors )
    {
        this.professors = professors;
    }

    public List< Schedule > getSchedules()
    {
        return schedules;
    }

    public void setSchedules( List< Schedule > schedules )
    {
        this.schedules = schedules;
    }

    public Long getTermId()
    {
        return termId;
    }

    public void setTermId( Long termId )
    {
        this.termId = termId;
    }

    public CourseContent getCourseContent()
    {
        return courseContent;
    }

    public void setCourseContent( CourseContent courseContent )
    {
        this.courseContent = courseContent;
    }
}
