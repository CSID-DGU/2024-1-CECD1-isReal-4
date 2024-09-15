package com.isreal.apartodo.repository;

import com.isreal.apartodo.entity.MemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<MemberEntity, Long> {

    MemberEntity findByUsername(String username);
}
