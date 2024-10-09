package com.isreal.apartodo.repository;

import com.isreal.apartodo.document.QuestionCommentDocument;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionCommentRepository extends MongoRepository<QuestionCommentDocument, String> {
    List<QuestionCommentDocument> findByQuestionId(String questionId, Sort sort);
}
