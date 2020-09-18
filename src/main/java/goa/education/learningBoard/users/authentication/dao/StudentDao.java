package goa.education.learningBoard.users.authentication.dao;

import goa.education.learningBoard.users.model.Student;
import goa.education.learningBoard.users.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface StudentDao extends CrudRepository< Student, Integer> {
    Student findByUsername( String username );
}
