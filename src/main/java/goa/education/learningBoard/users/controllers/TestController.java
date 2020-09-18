package goa.education.learningBoard.users.controllers;

import goa.education.learningBoard.users.model.Student;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController
{
    @RequestMapping(value = "/student", method = RequestMethod.GET)
    public Student firstPage()
    {
        Student student = new Student();

        return student;
    }

}
