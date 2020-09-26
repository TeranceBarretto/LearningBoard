package goa.education.learningBoard.model;

import javax.persistence.*;
import java.io.Serializable;
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

    @ManyToMany
    @JoinTable(
            name = "STUDENTS_COURSES",
            joinColumns = @JoinColumn(name = "COURSE_ID", referencedColumnName = "ID"),
            inverseJoinColumns = @JoinColumn(name = "STUDENT_ID", referencedColumnName = "ID")
    )
    private List<User> students;

    @ManyToMany
    @JoinTable(
            name = "PROFESSORS_COURSES",
            joinColumns = @JoinColumn(name = "COURSE_ID", referencedColumnName = "ID"),
            inverseJoinColumns = @JoinColumn(name = "PROFESSOR_ID", referencedColumnName = "ID")
    )
    private List<User> professors;

    @OneToMany(mappedBy = "course")
    private List<Schedule> schedules;

    @OneToMany(mappedBy = "course")
    private List<CourseContent> courseContent;

    public Course() {}

    public Course(String name )
    {
        this.name = name;
    }
}
