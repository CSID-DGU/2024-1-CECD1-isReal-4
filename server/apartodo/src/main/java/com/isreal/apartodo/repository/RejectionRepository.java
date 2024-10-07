package com.isreal.apartodo.repository;

import com.isreal.apartodo.document.RejectionDocument;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RejectionRepository extends MongoRepository<RejectionDocument, String> {
    RejectionDocument findByUsername(String username);
}
