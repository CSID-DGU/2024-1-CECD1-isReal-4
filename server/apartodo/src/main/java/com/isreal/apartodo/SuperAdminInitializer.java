package com.isreal.apartodo;

import com.isreal.apartodo.entity.MemberEntity;
import com.isreal.apartodo.entity.Role;
import com.isreal.apartodo.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class SuperAdminInitializer implements CommandLineRunner {

    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Value("${superadmin}")
    private String superAdminUsername;

    @Value("${password}")
    private String superAdminPassword;

    @Override
    public void run(String... args) throws Exception {
        if (memberRepository.count() == 0) {
            MemberEntity member = MemberEntity.builder()
                    .username(superAdminUsername)
                    .password(passwordEncoder.encode(superAdminPassword))
                    .role(Role.SUPER_ADMIN)
                    .apartmentName("apartmentName")
                    .memberName("memberName")
                    .phoneNumber("phoneNumber")
                    .apartmentBuildingNumber("apartmentBuildingNumber")
                    .authDocument("authDocument")
                    .build();

            memberRepository.save(member);
        }
    }
}