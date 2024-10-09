package com.isreal.apartodo.repository;

import com.isreal.apartodo.document.NoticeDocument;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoticeRepository extends MongoRepository<NoticeDocument, String> {
    List<NoticeDocument> findByUsername(String username, Sort sort);

    List<NoticeDocument> findByApartmentName(String apartmentName, Sort sort);
}