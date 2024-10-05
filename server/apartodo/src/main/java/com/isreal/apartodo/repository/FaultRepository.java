package com.isreal.apartodo.repository;

import com.isreal.apartodo.document.FaultDocument;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FaultRepository extends MongoRepository<FaultDocument, String> {
}