package com.isreal.apartodo.repository;

import com.isreal.apartodo.document.FaultDocument;
import com.isreal.apartodo.dto.ApprovalStatus;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FaultRepository extends MongoRepository<FaultDocument, String> {
    List<FaultDocument> findByApartmentNameAndApprovalStatus(String apartmentName, ApprovalStatus approvalStatus, Sort sort);

    List<FaultDocument> findByUsername(String username, Sort sort);

    int countByUsername(String username);
}