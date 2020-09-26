package goa.education.learningBoard.model;

import javax.persistence.*;
import java.io.Serializable;
import java.time.DayOfWeek;
import java.time.LocalTime;

@Entity
@Table(name = "schedule")
public class Schedule implements Serializable
{
    private static final long serialVersionUID = 1l;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;

    DayOfWeek day;

    LocalTime startTime;

    LocalTime endTime;

    @ManyToOne
    @JoinColumn(name = "COURSE_ID", referencedColumnName = "ID")
    private Course course;
}
