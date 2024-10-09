package com.isreal.apartodo.repository;

import com.isreal.apartodo.document.NoticeCommentDocument;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoticeCommentRepository extends MongoRepository<NoticeCommentDocument, String> {
    List<NoticeCommentDocument> findByNoticeId(String questionId, Sort sort);

    int countByNoticeId(String NoticeId);
}
