package com.isreal.apartodo.jwt;

import com.isreal.apartodo.document.MemberDocument;
import com.isreal.apartodo.dto.Role;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@RequiredArgsConstructor
public class JWTFilter extends OncePerRequestFilter {

    private final JWTUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        String authorization = request.getHeader("Authorization");

        if (authorization == null || !authorization.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        String token = authorization.split(" ")[1];

        if (jwtUtil.isExpired(token)) {
            filterChain.doFilter(request, response);
            return;
        }

        String username = jwtUtil.getUsername(token);
        Role role = jwtUtil.getRole(token);
        String apartmentName = jwtUtil.getApartmentName(token);
        String memberName = jwtUtil.getMemberName(token);

        MemberDocument memberDocument = new MemberDocument();
        memberDocument.setUsername(username);
        memberDocument.setPassword("temppassword");
        memberDocument.setRole(role);
        memberDocument.setApartmentName(apartmentName);
        memberDocument.setMemberName(memberName);


        CustomUserDetails customUserDetails = new CustomUserDetails(memberDocument);

        Authentication authToken = new UsernamePasswordAuthenticationToken(customUserDetails, null, customUserDetails.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authToken);

        filterChain.doFilter(request, response);
    }
}
