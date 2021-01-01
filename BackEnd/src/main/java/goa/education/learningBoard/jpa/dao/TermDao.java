package goa.education.learningBoard.jpa.dao;

import goa.education.learningBoard.model.Course;
import goa.education.learningBoard.model.Term;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TermDao extends CrudRepository< Term, Integer >
{
    @Query(value = "select * from term where id = ?1", nativeQuery = true)
    Term findByTermId( Long id );
}
