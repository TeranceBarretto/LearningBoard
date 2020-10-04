package goa.education.learningBoard.endpoints;

import goa.education.learningBoard.jpa.dao.CourseDao;
import goa.education.learningBoard.model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class CourseCreationEndpoint
{
    @Autowired
    private CourseDao courseDao;

    @RequestMapping(value = "/create/course", method = RequestMethod.POST)
    public ResponseEntity< ? > createCourse( @RequestBody Course course ) throws Exception
    {
        return ResponseEntity.ok( courseDao.save( course ) );
    }
}
