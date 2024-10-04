package com.isreal.apartodo.repository;

import com.isreal.apartodo.document.ChecklistDocument;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ChecklistRepository extends MongoRepository<ChecklistDocument, String> {
}
