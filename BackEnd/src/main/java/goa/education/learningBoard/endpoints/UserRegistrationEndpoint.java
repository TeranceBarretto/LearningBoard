package goa.education.learningBoard.endpoints;

import goa.education.learningBoard.jpa.dao.UserDTO;
import goa.education.learningBoard.jpa.services.MyUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserRegistrationEndpoint
{
    @Autowired
    private MyUserDetailsService userDetailsService;

    @RequestMapping(value = "/register/student", method = RequestMethod.POST)
    public ResponseEntity< ? > saveStudent( @RequestBody UserDTO user ) throws Exception
    {
        return ResponseEntity.ok( userDetailsService.saveStudent( user ) );
    }

    @RequestMapping(value = "/register/professor", method = RequestMethod.POST)
    public ResponseEntity< ? > saveProfessor( @RequestBody UserDTO user ) throws Exception
    {
        return ResponseEntity.ok( userDetailsService.saveProfessor( user ) );
    }
}
