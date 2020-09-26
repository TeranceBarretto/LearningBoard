package goa.education.learningBoard.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "courseContent")
public class CourseContent implements Serializable
{
    private static final long serialVersionUID = 1l;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;

    @ManyToOne
    @JoinColumn(name = "COURSE_ID", referencedColumnName = "ID")
    private Course course;
}
