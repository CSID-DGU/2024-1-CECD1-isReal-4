package com.isreal.apartodo.jwt;

import com.isreal.apartodo.document.MemberDocument;
import com.isreal.apartodo.dto.Role;
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
            MemberDocument memberDocument = MemberDocument.builder()
                    .username(superAdminUsername)
                    .password(passwordEncoder.encode(superAdminPassword))
                    .role(Role.SUPER_ADMIN)
                    .apartmentName(null)
                    .memberName("총관리자")
                    .phoneNumber(null)
                    .apartmentBuildingNumber(null)
                    .profileImage(null)
                    .authDocument(null)
                    .build();

            memberRepository.save(memberDocument);
        }
    }
}