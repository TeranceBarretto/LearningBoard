package goa.education.learningBoard.jpa.dao;

import goa.education.learningBoard.model.Course;
import goa.education.learningBoard.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserDao extends CrudRepository< User, Integer >
{
    User findByUsername( String username );

    @Query(value = "select * from user where id = ?1", nativeQuery = true)
    User findByUserId( Long id );
}
