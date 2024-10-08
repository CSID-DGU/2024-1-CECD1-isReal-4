package com.isreal.apartodo.repository;

import com.isreal.apartodo.document.QuestionDocument;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends MongoRepository<QuestionDocument, String> {
    List<QuestionDocument> findByUsername(String username, Sort sort);
}