package com.isreal.apartodo.repository;

import com.isreal.apartodo.document.FaultChecklistDocument;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FaultChecklistRepository extends MongoRepository<FaultChecklistDocument, String> {
    List<FaultChecklistDocument> findByUsername(String username, Sort sort);
}
