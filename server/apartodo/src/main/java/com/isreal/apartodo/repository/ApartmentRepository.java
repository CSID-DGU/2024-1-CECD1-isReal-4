package com.isreal.apartodo.repository;

import com.isreal.apartodo.document.ApartmentDocument;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApartmentRepository extends MongoRepository<ApartmentDocument, String> {
    boolean existsByApartmentName(String apartmentName);
}
