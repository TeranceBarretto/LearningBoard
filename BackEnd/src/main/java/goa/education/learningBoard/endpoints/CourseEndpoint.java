package goa.education.learningBoard.endpoints;

import goa.education.learningBoard.jpa.dao.*;
import goa.education.learningBoard.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CourseEndpoint
{
    @Autowired
    private CourseDao courseDao;

    @Autowired
    private CourseContentDao courseContentDao;

    @Autowired
    private FolderDao folderDao;

    @RequestMapping(value = "/create/course", method = RequestMethod.POST)
    public ResponseEntity< ? > createCourse( @RequestBody Course course ) throws Exception
    {
        course.setCourseContent( null );
        return ResponseEntity.ok( courseDao.save( course ) );
    }

    @RequestMapping(value = "/create/courseContent/{content}/{courseId}", method = RequestMethod.POST)
    public ResponseEntity< ? > createCourseContent( @PathVariable("content") String content, @PathVariable("courseId") Long courseId ) throws Exception
    {
        ResponseEntity retval = null;
        Course course = courseDao.findByCourseId( courseId );
        if( course != null ) {
            CourseContent courseContent = course.getCourseContent();
            if(courseContent == null)
            {
                courseContent = new CourseContent(course);
            }
            courseContent.addFolder( new Folder( content ) );
            retval = ResponseEntity.ok( courseContentDao.save( courseContent ) );
        }
        else
        {
            retval = new ResponseEntity<>(
                    "No course found for the given Id",
                    HttpStatus.BAD_REQUEST);
        }
        return retval;
    }

    @RequestMapping(value = "/create/courseContent/livefeed/{courseId}", method = RequestMethod.POST)
    public ResponseEntity< ? > addLiveFeedToCourseContent( @PathVariable("courseId") Long courseId, @RequestBody DataDTO data ) throws Exception
    {
        ResponseEntity retval = null;
        Course course = courseDao.findByCourseId( courseId );
        if( course != null ) {
            CourseContent courseContent = course.getCourseContent();
            if(courseContent == null)
            {
                courseContent = new CourseContent(course);
            }
            courseContent.addLiveFeed( new CourseData( data.getLink(), data.getDataType() ) );
            retval = ResponseEntity.ok( courseContentDao.save( courseContent ) );
        } else {
            retval = new ResponseEntity<>(
                    "No course found for the given Id",
                    HttpStatus.BAD_REQUEST);
        }
        return retval;
    }

    @RequestMapping(value = "/create/courseContent/{folderId}", method = RequestMethod.POST)
    public ResponseEntity< ? > addDataToCourseContentFolder(  @PathVariable("folderId") Long folderId, @RequestBody DataDTO data ) throws Exception
    {
        ResponseEntity retval = null;
        Folder folder = folderDao.findByFolderId( folderId );
        if( folder != null ) {
            folder.addData( new CourseData( data.getLink(), data.getDataType() ) );
            retval = ResponseEntity.ok( folderDao.save( folder ) );
        } else {
            retval = new ResponseEntity<>(
                    "No folder found for the given Id",
                    HttpStatus.BAD_REQUEST);
        }
        return retval;
    }

    @RequestMapping(value = "/courseContent/livefeed/{courseId}", method = RequestMethod.GET)
    public ResponseEntity< ? > getCourseLiveFeed(  @PathVariable("courseId") Long courseId ) throws Exception
    {
        ResponseEntity retval = null;
        Course course = courseDao.findByCourseId( courseId );
        if ( course != null ) {
            CourseContent courseContent = course.getCourseContent();
            if(courseContent != null)
            {
                retval = ResponseEntity.ok( courseContent.getLiveFeed() );
            }
            else
            {
                retval = new ResponseEntity<>(
                    "No course Content found for the given course", HttpStatus.OK);
            }
        }
        else
        {
            retval =  new ResponseEntity<>(
                    "No course found for the given Id",
                    HttpStatus.BAD_REQUEST);
        }

        return retval;
    }

    @RequestMapping(value = "/courseContent/folders/{courseId}", method = RequestMethod.GET)
    public ResponseEntity< ? > getCourseFolders(  @PathVariable("courseId") Long courseId ) throws Exception
    {
        ResponseEntity retval = null;
        Course course = courseDao.findByCourseId( courseId );
        if ( course != null ) {
            CourseContent courseContent = course.getCourseContent();
            if(courseContent != null)
            {
                retval = ResponseEntity.ok( courseContent.getFolders() );
            }
            else
            {
                retval = new ResponseEntity<>(
                        "No course Content found for the given course", HttpStatus.OK);
            }
        }
        else
        {
            retval =  new ResponseEntity<>(
                    "No course found for the given Id",
                    HttpStatus.BAD_REQUEST);
        }

        return retval;
    }

    @RequestMapping(value = "/courseContent/folderContent/{folderId}", method = RequestMethod.GET)
    public ResponseEntity< ? > getCourseFolderContents(  @PathVariable("folderId") Long folderId ) throws Exception
    {
        ResponseEntity retval = null;
        Folder folder = folderDao.findByFolderId( folderId );
        if( folder != null ) {
             retval = ResponseEntity.ok( folder.getData() );
        }
        else
        {
            retval =  new ResponseEntity<>(
                    "No folder found for the given Id",
                    HttpStatus.BAD_REQUEST);
        }

        return retval;
    }
}
