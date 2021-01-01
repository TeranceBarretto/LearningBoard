package goa.education.learningBoard.endpoints;

import goa.education.learningBoard.jpa.dao.CourseDao;
import goa.education.learningBoard.jpa.dao.UserDao;
import goa.education.learningBoard.model.Course;
import goa.education.learningBoard.model.Schedule;
import goa.education.learningBoard.model.User;
import goa.education.learningBoard.model.UserType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@RestController
public class UserScheduleEndpoint
{
    @Autowired
    private CourseDao courseDao;

    @Autowired
    private UserDao userDao;

    @RequestMapping(value = "/schedule/{userId}", method = RequestMethod.GET,
            produces = "application/json")
    public ResponseEntity< ? > getSchedule( @PathVariable("userId") Long userId ) throws Exception
    {
        User user = userDao.findByUserId( userId );
        List<Course> courses = null;
        List< Schedule > schedule = new ArrayList<>();

        if(user.getUserType().equals( UserType.STUDENT )) {
            courses = user.getCoursesTaken();
        }

        return ResponseEntity.ok( courses );
    }
}
