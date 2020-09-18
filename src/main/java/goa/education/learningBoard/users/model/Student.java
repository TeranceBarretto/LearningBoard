package goa.education.learningBoard.users.model;

import javax.persistence.*;

@Entity
@Table(name = "student")
public class Student extends User
{
    @Override
    public UserType getUserType()
    {
        return UserType.STUDENT;
    }

    @Override
    public Long getId()
    {
        return super.getId();
    }
}
