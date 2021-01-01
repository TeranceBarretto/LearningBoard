package goa.education.learningBoard.jpa.dao;

import goa.education.learningBoard.model.CourseContent;
import goa.education.learningBoard.model.Folder;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FolderDao extends CrudRepository< Folder, Integer >
{
    @Query(value = "select * from folders where id = ?1", nativeQuery = true)
    Folder findByFolderId( Long id );
}
