package goa.education.learningBoard.users.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;

@MappedSuperclass
public abstract class User implements Serializable
{
    private static final long serialVersionUID = 1l;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;

    @Transient
    @JsonIgnore
    protected UserType userType;

    @JsonIgnore
    @Column(unique=true, nullable=false)
    private String username;

    @JsonIgnore
    @Column(unique=true, nullable=false)
    private String password;

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
}
