package goa.education.learningBoard.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Set;

@Entity
@Table(name = "term")
public class Term implements Serializable
{
    private static final long serialVersionUID = 1l;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;

    @JsonFormat(pattern = "yyyy-MM-dd")
    LocalDate termStart;

    @JsonFormat(pattern = "yyyy-MM-dd")
    LocalDate termEnd;

    private String name;

    public Long getId()
    {
        return id;
    }

    public void setId( Long id )
    {
        this.id = id;
    }

    public LocalDate getTermStart()
    {
        return termStart;
    }

    public void setTermStart( LocalDate termStart )
    {
        this.termStart = termStart;
    }

    public LocalDate getTermEnd()
    {
        return termEnd;
    }

    public void setTermEnd( LocalDate termEnd )
    {
        this.termEnd = termEnd;
    }

    public String getName()
    {
        return name;
    }

    public void setName( String name )
    {
        this.name = name;
    }
}
