package com.isreal.apartodo.repository;

import com.isreal.apartodo.document.ChecklistDocument;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ChecklistRepository extends MongoRepository<ChecklistDocument, String> {
    List<ChecklistDocument> findByUsername(String username, Sort sort);
}
