package com.college.application.college.application.repository;

import com.college.application.college.application.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsernameAndPasswordAndRole(String username, String password, String role);
}
