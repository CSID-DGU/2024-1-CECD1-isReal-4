package com.isreal.apartodo.repository;

import com.isreal.apartodo.document.PartnerDocument;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PartnerRepository extends MongoRepository<PartnerDocument, String> {
}
