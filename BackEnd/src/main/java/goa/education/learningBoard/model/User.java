package goa.education.learningBoard.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "user")
public class User implements Serializable
{
    private static final long serialVersionUID = 1l;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;

    @JsonIgnore
    protected UserType userType;

    @JsonIgnore
    @Column(unique=true, nullable=false)
    private String username;

    @JsonIgnore
    @Column(unique=true, nullable=false)
    private String password;

    @JsonIgnore
    private String firstName;

    @JsonIgnore
    private String lastName;

    @JsonIgnore
    private String middleName;

    @JsonIgnore
    @ManyToMany(mappedBy = "students")
    private List<Course> coursesTaken;

    @JsonIgnore
    @ManyToMany(mappedBy = "professors")
    private List<Course> coursesTaught;

    public User() {}

    public User(String username, String password )
    {
        this.username = username;
        this.password = password;
    }

    @Transient
    public Long getId()
    {
        return id;
    }

    public void setId( Long id )
    {
        this.id = id;
    }

    public UserType getUserType()
    {
        return userType;
    }

    public void setUserType( UserType userType )
    {
        this.userType = userType;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName()
    {
        return firstName;
    }

    public void setFirstName( String firstName )
    {
        this.firstName = firstName;
    }

    public String getLastName()
    {
        return lastName;
    }

    public void setLastName( String lastName )
    {
        this.lastName = lastName;
    }

    public String getMiddleName()
    {
        return middleName;
    }

    public void setMiddleName( String middleName )
    {
        this.middleName = middleName;
    }

    public List< Course > getCoursesTaken()
    {
        return coursesTaken;
    }

    public void setCoursesTaken( List< Course > coursesTaken )
    {
        this.coursesTaken = coursesTaken;
    }

    public List< Course > getCoursesTaught()
    {
        return coursesTaught;
    }

    public void setCoursesTaught( List< Course > coursesTaught )
    {
        this.coursesTaught = coursesTaught;
    }
}
