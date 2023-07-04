package com.KynApi.Service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.KynApi.Entity.User;
import com.KynApi.Repository.UserRepository;

@Service
@Transactional
public class UserService {

	@Autowired
	UserRepository userRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public	User login(String username, String password) {
		User userLogin = userRepo.login(username, password);
		return userLogin;
	}
	
	public User saveUser(User user) {	
		String encryptedPassword = passwordEncoder.encode(user.getPassword());
		user.setPassword(encryptedPassword);
		
		return userRepo.save(user);	
	}
	
    public boolean userExists(String username, String password) {
        User user = userRepo.findByUsername(username);
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            return true;
        }
        return false;
    }
	
}
