package goa.education.learningBoard.users.authentication.dao;

import goa.education.learningBoard.users.model.Professor;
import goa.education.learningBoard.users.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProfessorDao extends CrudRepository< Professor, Integer >
{
    Professor findByUsername( String username );
}
