package goa.education.learningBoard.endpoints;

import goa.education.learningBoard.jpa.dao.CourseDao;
import goa.education.learningBoard.jpa.dao.UserDTO;
import goa.education.learningBoard.jpa.dao.UserDao;
import goa.education.learningBoard.jpa.services.MyUserDetailsService;
import goa.education.learningBoard.model.Course;
import goa.education.learningBoard.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class CourseRegistrationEndpoint
{
    @Autowired
    private CourseDao courseDao;

    @Autowired
    private UserDao userDao;

    @RequestMapping(value = "/register/course/{courseId}/student/{studentId}", method = RequestMethod.POST)
    public ResponseEntity< ? > saveProfessor( @PathVariable("courseId") Long courseId,
                                              @PathVariable("studentId") Long studentId ) throws Exception
    {
        Course course = courseDao.findByCourseId(courseId);
        User user = userDao.findByUserId( studentId );
        return ResponseEntity.ok( "bingo" );
    }
}
