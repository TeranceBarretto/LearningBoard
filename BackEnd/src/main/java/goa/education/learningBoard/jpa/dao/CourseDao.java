package goa.education.learningBoard.jpa.dao;

import goa.education.learningBoard.model.Course;
import goa.education.learningBoard.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CourseDao extends CrudRepository< Course, Integer >
{
    @Query(value = "select * from course where id = ?1", nativeQuery = true)
    Course findByCourseId( Long id );
}
