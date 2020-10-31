package goa.education.learningBoard.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "data")
public class CourseData implements Serializable
{
    private static final long serialVersionUID = 1l;

    @JsonIgnore
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;

    protected String link;

    protected DataType dataType;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    private CourseContent courseContent;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    private Folder folder;

    public CourseData(){}

    public CourseData(String link, DataType dataType)
    {
        this.link = link;
        this.dataType = dataType;
    }

    public Long getId()
    {
        return id;
    }

    public void setId( Long id )
    {
        this.id = id;
    }

    public String getLink()
    {
        return link;
    }

    public void setLink( String link )
    {
        this.link = link;
    }

    public Folder getFolder()
    {
        return folder;
    }

    public void setFolder( Folder folder )
    {
        this.folder = folder;
    }

    public DataType getDataType()
    {
        return dataType;
    }

    public void setDataType( DataType dataType )
    {
        this.dataType = dataType;
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
