package com.isreal.apartodo.repository;

import com.isreal.apartodo.document.PartnerDocument;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PartnerRepository extends MongoRepository<PartnerDocument, String> {
    List<PartnerDocument> findByApartmentName(String apartmentName, Sort sort);
}
