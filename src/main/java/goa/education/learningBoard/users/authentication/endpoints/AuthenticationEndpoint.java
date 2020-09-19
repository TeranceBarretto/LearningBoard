package goa.education.learningBoard.users.authentication.endpoints;

import goa.education.learningBoard.users.authentication.dao.UserDTO;
import goa.education.learningBoard.users.authentication.model.AuthenticationRequest;
import goa.education.learningBoard.users.authentication.model.AuthenticationResponse;
import goa.education.learningBoard.users.authentication.services.MyUserDetailsService;
import goa.education.learningBoard.users.authentication.utils.JwtUtil;
import goa.education.learningBoard.users.model.Professor;
import goa.education.learningBoard.users.model.Student;
import goa.education.learningBoard.users.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationEndpoint
{
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtTokenUtil;

    @Autowired
    private MyUserDetailsService userDetailsService;

    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    public String hello()
    {
        return "Hello World";
    }

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity< ? > createAuthenticationToken( @RequestBody AuthenticationRequest authenticationRequest ) throws Exception
    {

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken( authenticationRequest.getUsername(), authenticationRequest.getPassword() )
            );
        } catch ( BadCredentialsException e ) {
            throw new Exception( "Incorrect username or password", e );
        }


        final UserDetails userDetails = userDetailsService
                .loadUserByUsername( authenticationRequest.getUsername() );

        final String jwt = jwtTokenUtil.generateToken( userDetails );

        return ResponseEntity.ok( new AuthenticationResponse( jwt ) );
    }

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
