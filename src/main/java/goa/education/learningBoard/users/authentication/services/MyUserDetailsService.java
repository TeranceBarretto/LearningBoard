package goa.education.learningBoard.users.authentication.services;

import goa.education.learningBoard.users.authentication.dao.ProfessorDao;
import goa.education.learningBoard.users.authentication.dao.StudentDao;
import goa.education.learningBoard.users.model.Professor;
import goa.education.learningBoard.users.model.Student;
import goa.education.learningBoard.users.model.User;
import goa.education.learningBoard.users.model.UserType;
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
    private ProfessorDao professorDao;

    @Autowired
    private StudentDao studentDao;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Override
    public UserDetails loadUserByUsername( String username ) throws UsernameNotFoundException
    {
        User user = studentDao.findByUsername(username);
        if (user == null) {
            user = professorDao.findByUsername(username);
            if (user == null) {
                throw new UsernameNotFoundException( "User not found with username: " + username );
            }
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
                new ArrayList<>());
    }

    public Professor save( Professor user) {
        Professor newUser = new Professor();
        newUser.setUsername(user.getUsername());
        newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
        return professorDao.save( newUser );
    }

    public Student save( Student user) {
        Student newUser = new Student();
        newUser.setUsername(user.getUsername());
        newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
        return studentDao.save( newUser );
    }
}
