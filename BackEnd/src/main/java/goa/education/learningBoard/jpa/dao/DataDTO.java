package goa.education.learningBoard.jpa.dao;

import goa.education.learningBoard.model.DataType;

public class DataDTO
{
    private String link;
    private DataType dataType;

    public String getLink()
    {
        return link;
    }

    public void setLink( String link )
    {
        this.link = link;
    }

    public DataType getDataType()
    {
        return dataType;
    }

    public void setDataType( DataType dataType )
    {
        this.dataType = dataType;
    }
}
