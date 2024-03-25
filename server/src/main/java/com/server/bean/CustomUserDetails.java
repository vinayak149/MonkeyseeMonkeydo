package com.server.bean;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


public class CustomUserDetails extends User implements UserDetails {
    private String custUsername;
    private String custPassword;
    Collection<? extends GrantedAuthority> authorities;

    public CustomUserDetails(User byUsername) {
        this.custUsername = byUsername.getEmail();
        this.custPassword= byUsername.getPassword();
        List<GrantedAuthority> auths = new ArrayList<>();
        System.out.println(byUsername.getEmail()+byUsername.getRole());
        auths.add(new SimpleGrantedAuthority(byUsername.getRole().toUpperCase()));
        this.authorities = auths;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return custPassword;
    }

    @Override
    public String getUsername() {
        return custUsername;
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
}

