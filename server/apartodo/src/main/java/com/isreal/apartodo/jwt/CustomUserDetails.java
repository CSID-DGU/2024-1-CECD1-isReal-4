package com.isreal.apartodo.jwt;

import com.isreal.apartodo.document.MemberDocument;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;

@RequiredArgsConstructor
public class CustomUserDetails implements UserDetails {

    private final MemberDocument memberDocument;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> collection = new ArrayList<>();

        collection.add(new GrantedAuthority() {

            @Override
            public String getAuthority() {
                return "ROLE_" + memberDocument.getRole().name();
            }
        });

        return collection;
    }

    @Override
    public String getPassword() {
        return memberDocument.getPassword();
    }

    @Override
    public String getUsername() {
        return memberDocument.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public String getApartmentName() {
        return memberDocument.getApartmentName();
    }

    public String getMemberName() {
        return memberDocument.getMemberName();
    }
}
