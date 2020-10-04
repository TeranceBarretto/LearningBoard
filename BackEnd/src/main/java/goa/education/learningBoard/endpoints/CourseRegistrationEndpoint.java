package goa.education.learningBoard.endpoints;

import goa.education.learningBoard.jpa.dao.CourseDao;
import goa.education.learningBoard.jpa.dao.UserDao;
import goa.education.learningBoard.model.Course;
import goa.education.learningBoard.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CourseRegistrationEndpoint
{
    private static final Logger LOGGER = LoggerFactory.getLogger(CourseRegistrationEndpoint.class);

    @Autowired
    private CourseDao courseDao;

    @Autowired
    private UserDao userDao;

    @RequestMapping(value = "/register/course/{courseId}", method = RequestMethod.POST,
            consumes = "application/json")
    public ResponseEntity< ? > registerStudents( @PathVariable("courseId") Long courseId,
                                              @RequestBody List<Long> studentIds ) throws Exception
    {
        ResponseEntity retVal = ResponseEntity.status( HttpStatus.INTERNAL_SERVER_ERROR ).
                body("REST request error, please check server logs");
        Course course = courseDao.findByCourseId(courseId);
        if( course != null ) {
            List< User > students = new ArrayList<>();
            for ( Long studentId : studentIds ) {
                User user = userDao.findByUserId( studentId );
                if ( user != null ) {
                    students.add( user );
                } else {
                    LOGGER.warn( "Could not find student with ID {}", studentId );
                }
            }
            course.setStudents( students );
            retVal =  ResponseEntity.ok( courseDao.save( course ) );
        }
        return retVal;
    }
}
