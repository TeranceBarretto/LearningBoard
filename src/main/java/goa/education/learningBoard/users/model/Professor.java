package goa.education.learningBoard.users.model;

import javax.persistence.*;

@Entity
@Table(name = "professor")
public class Professor extends User
{
    @Override
    public UserType getUserType()
    {
        return UserType.PROFESSOR;
    }


    @Override
    public Long getId()
    {
        return super.getId();
    }
}
