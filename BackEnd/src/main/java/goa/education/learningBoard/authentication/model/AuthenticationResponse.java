package goa.education.learningBoard.authentication.model;

import goa.education.learningBoard.model.UserType;

import java.io.Serializable;

public class AuthenticationResponse implements Serializable {

    private final String accessToken;

    private final UserType userType;

    private final Long userId;

    public AuthenticationResponse( String accessToken, UserType userType, Long userId )
    {
        this.accessToken = accessToken;
        this.userType = userType;
        this.userId = userId;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public UserType getUserType() {
        return userType;
    }

    public Long getUserId() {
        return userId;
    }
}