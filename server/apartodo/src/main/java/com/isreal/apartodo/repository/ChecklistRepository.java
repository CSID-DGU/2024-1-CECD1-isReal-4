package com.isreal.apartodo.repository;

import com.isreal.apartodo.document.ChecklistDocument;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChecklistRepository extends MongoRepository<ChecklistDocument, String> {
    List<ChecklistDocument> findByUsername(String username, Sort sort);
}
