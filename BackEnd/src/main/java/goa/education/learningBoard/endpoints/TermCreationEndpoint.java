package goa.education.learningBoard.endpoints;

import goa.education.learningBoard.jpa.dao.CourseDao;
import goa.education.learningBoard.jpa.dao.TermDao;
import goa.education.learningBoard.model.Course;
import goa.education.learningBoard.model.Term;
import goa.education.learningBoard.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
public class TermCreationEndpoint
{
    private static final Logger LOGGER = LoggerFactory.getLogger(TermCreationEndpoint.class);

    @Autowired
    private TermDao termDao;

    @Autowired
    private CourseDao courseDao;

    @RequestMapping(value = "/create/term", method = RequestMethod.POST)
    public ResponseEntity< ? > createTerm( @RequestBody Term term ) throws Exception
    {
        return ResponseEntity.ok( termDao.save( term ) );
    }

    @RequestMapping(value = "/register/term/{termId}", method = RequestMethod.POST,
            consumes = "application/json")
    public ResponseEntity< ? > registerCourseInTerm( @PathVariable("termId") Long termId, @RequestBody List<Long> courseIds ) throws Exception
    {
        boolean ifSuccces = true;
        ResponseEntity retVal = ResponseEntity.status( HttpStatus.INTERNAL_SERVER_ERROR ).
                body("REST request error, please check server logs");
        Term term = termDao.findByTermId( termId );
        if( term != null ) {
            for ( Long courseId : courseIds ) {
                Course course = courseDao.findByCourseId( courseId );
                if ( course != null ) {
                    course.setTermId( term.getId() );
                    courseDao.save( course );
                } else {
                    ifSuccces = false;
                    LOGGER.warn( "Could not find course with ID {}", courseId );
                }
            }
        }
        return ResponseEntity.ok( term ) ;
    }
}
