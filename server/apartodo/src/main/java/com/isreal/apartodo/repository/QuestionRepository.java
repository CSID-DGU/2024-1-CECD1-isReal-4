package com.isreal.apartodo.repository;

import com.isreal.apartodo.document.QuestionDocument;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends MongoRepository<QuestionDocument, String> {
}