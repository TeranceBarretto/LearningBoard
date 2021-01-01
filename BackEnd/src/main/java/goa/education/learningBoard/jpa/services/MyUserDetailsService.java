package goa.education.learningBoard.jpa.services;

import goa.education.learningBoard.jpa.dao.UserDao;
import goa.education.learningBoard.jpa.dao.UserDTO;
import goa.education.learningBoard.model.User;
import goa.education.learningBoard.model.UserType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class MyUserDetailsService implements UserDetailsService
{
    @Autowired
    private UserDao userDao;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Override
    public UserDetails loadUserByUsername( String username ) throws UsernameNotFoundException
    {
        User user = userDao.findByUsername( username );
        if ( user == null ) {
                throw new UsernameNotFoundException( "User not found with username: " + username );
        }
        return new org.springframework.security.core.userdetails.User( user.getUsername(), user.getPassword(),
                new ArrayList<>() );
    }

    public User getUser( String username )
    {
        return userDao.findByUsername( username );
    }

    public User saveStudent( UserDTO user )
    {
        User newUser = createUser( user );
        newUser.setUserType( UserType.STUDENT );
        return userDao.save( newUser );
    }

    public User saveProfessor( UserDTO user )
    {
        User newUser = createUser( user );
        newUser.setUserType( UserType.PROFESSOR );
        return userDao.save( newUser );
    }

    public User createUser( UserDTO user )
    {
        return new User( user.getUsername(), bcryptEncoder.encode( user.getPassword() ) );
    }
}
