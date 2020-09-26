package goa.education.learningBoard.endpoints;

import goa.education.learningBoard.model.User;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController
{
    @RequestMapping(value = "/student", method = RequestMethod.GET)
    public User firstPage()
    {
        User student = new User();

        return student;
    }

}
