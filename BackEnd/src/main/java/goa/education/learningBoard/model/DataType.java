package goa.education.learningBoard.model;

public enum DataType
{
    UNKNOWN( "UNKNOWN" ),
    VIDEO( "VIDEO" ),
    DOCUMENT( "DOCUMENT" );

    private final String typeString;

    DataType( String typeString )
    {
        this.typeString = typeString;
    }
}
