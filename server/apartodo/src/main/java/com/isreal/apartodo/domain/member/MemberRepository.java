package com.isreal.apartodo.domain.member;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface MemberRepository extends MongoRepository<MemberDocument, String> {

    MemberDocument findByUsername(String username);
}
