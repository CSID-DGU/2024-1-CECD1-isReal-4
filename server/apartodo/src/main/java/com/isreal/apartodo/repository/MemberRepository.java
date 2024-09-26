package com.isreal.apartodo.repository;

import com.isreal.apartodo.document.MemberDocument;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MemberRepository extends MongoRepository<MemberDocument, String> {

    MemberDocument findByUsername(String username);
}
