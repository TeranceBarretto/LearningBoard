package goa.education.learningBoard.users.model;

public enum UserType
{
    UNKNOWN( "UNKNOWN" ),
    PROFESSOR( "PROFESSOR" ),
    STUDENT( "STUDENT" );

    private final String typeString;

    UserType( String typeString )
    {
        this.typeString = typeString;
    }
}
