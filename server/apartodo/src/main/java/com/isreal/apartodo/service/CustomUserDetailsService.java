package com.isreal.apartodo.service;

import com.isreal.apartodo.dto.CustomUserDetails;
import com.isreal.apartodo.entity.MemberEntity;
import com.isreal.apartodo.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final MemberRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        MemberEntity userData = userRepository.findByUsername(username);

        if (userData != null) {

            return new CustomUserDetails(userData);
        }

        return null;
    }
}
