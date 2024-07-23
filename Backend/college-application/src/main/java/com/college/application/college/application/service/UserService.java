package com.college.application.college.application.service;

import com.college.application.college.application.model.User;
import com.college.application.college.application.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User authenticate(String username, String password, String role) {
        // Implement your authentication logic here
        // For example, check the credentials in the database

        // This is a placeholder example
        User user = userRepository.findByUsernameAndPasswordAndRole(username, password, role);
        return user;
    }
}
