package goa.education.learningBoard.jpa.dao;

import goa.education.learningBoard.model.Course;
import goa.education.learningBoard.model.CourseContent;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CourseContentDao extends CrudRepository< CourseContent, Integer >
{
    @Query(value = "select * from courseContent where id = ?1", nativeQuery = true)
    CourseContent findByCourseContentId( Long id );
}
