package com.KynApi.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.KynApi.Entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	@Query(value = "SELECT * FROM user WHERE :username = username AND :password = password", nativeQuery = true)
	public User login(@Param("username") String username, @Param("password") String password);
	
	 User findByUsername(String username);
}
