package com.isreal.apartodo.repository;

import com.isreal.apartodo.document.MemberDocument;
import com.isreal.apartodo.dto.Role;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MemberRepository extends MongoRepository<MemberDocument, String> {

    MemberDocument findByUsername(String username);

    List<MemberDocument> findByApartmentNameAndRole(String apartmentName, Role role, Sort sort);

    boolean existsByUsername(String username);
}
