package com.isreal.apartodo.repository;

import com.isreal.apartodo.document.ApartmentDocument;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ApartmentRepository extends MongoRepository<ApartmentDocument, String> {
    boolean existsByApartmentName(String apartmentName);
}
