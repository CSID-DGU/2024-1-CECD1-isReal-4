package com.isreal.apartodo.repository;

import com.isreal.apartodo.document.MemberDocument;
import com.isreal.apartodo.dto.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface MemberRepository extends MongoRepository<MemberDocument, String> {

    MemberDocument findByUsername(String username);

    List<MemberDocument> findByApartmentNameAndRole(String apartmentName, Role role);

    boolean existsByUsername(String username);
}
