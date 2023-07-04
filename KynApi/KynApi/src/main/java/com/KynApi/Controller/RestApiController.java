package com.KynApi.Controller;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.security.Principal;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.KynApi.Entity.Building;

import com.KynApi.Entity.User;
import com.KynApi.Service.BuildingService;
import com.KynApi.Service.MessageSender;
import com.KynApi.Service.UserService;

@RestController
@CrossOrigin(origins ="http://localhost:3000")
public class RestApiController {

	@Autowired
	UserService userService;
	
	@Autowired
	BuildingService  buildService;
	
	@GetMapping("/test")
	public String test() {
		return "test successful";
	}
	
	@PostMapping(value="/loginUser")
	public String login(@RequestBody User user) {
		User userLogin = userService.login(user.getUsername(), user.getPassword());
        if (userService.userExists(user.getUsername(), user.getPassword())) {
            return "Login successful";
        } else {
            return "Invalid username or password";
        }
	}
//	@PostMapping(value="/loginUser")
//	public String login(@RequestBody User user) {
//		User userLogin = userService.login(user.getUsername(), user.getPassword());
//        if (userLogin !=  null) {
//            return "Login successful";
//        } else {
//            return "Invalid username or password";
//        }
//	}
	
//	User registration
	@PostMapping(value= "/registerUser")
	public String registerUser(@RequestBody User user) {
		userService.saveUser(user);
		return "User registration successful!";
	}
	
//	Building registration
	@PostMapping(value= "/registerBuilding")
	public String registerBuild(@RequestBody Building building) {
		buildService.registerBuilding(building);
		return "Building registration successful!";
	}
	
////	Building registration
//	@PostMapping(value= "/registerBuilding")
//	public String registerBuild(@RequestBody Building building, RedirectAttributes ra,
//			@RequestParam("fileImage") MultipartFile multipartFile, Principal principal) throws IOException {
//		String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
//		
//		building.setPhotos(fileName);
//		
//		Building savedBuilding = buildService.registerBuilding(building);
//		
//		String uploadDir = "./src/main/resources/static/images/building-photo/" + savedBuilding.getBuildId();
//		
//		Path uploadPath = Paths.get(uploadDir);
//		
//		if (!Files.exists(uploadPath)) {
//			Files.createDirectories(uploadPath);
//		}
//
//		try (InputStream inputStream = multipartFile.getInputStream()) {
//			Path filePath = uploadPath.resolve(fileName);
//			System.out.println(filePath.toFile().getAbsolutePath());
//			Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
//		} catch (IOException e) {
//			throw new IOException("Could not save uploaded file: " + fileName);
//		}
//		
//		building.setPhotoImagePath("/images/building-photo/" + savedBuilding.getBuildId() + "/" + savedBuilding.getPhotos());
//		buildService.registerBuilding(building);
//		
//		return "Building registration successful!";
//	}
	
	
//	Search for car based on brand, model, registration and manufacture date, and price
	@GetMapping(value= "/search")
	public List<Building> search(@RequestParam("keyword") String keyword) {
		return buildService.searchBuilding(keyword);
	}
	
   
	
    
    
	/*
	 * @GetMapping(value= "/loginUser") public String loginUser(@RequestParam User
	 * user, String username, String password) { User loggedIn =
	 * userServ.login(user);
	 * 
	 * if(loggedIn != null) { return "Credentials found, routing to homepage"; }
	 * else { return "Credetials NOT found"; } }
	 */
	
//	@GetMapping(value= "/loginUser")
//	public User loginUser(@RequestParam(required=false) User user, @RequestParam Long userId, @RequestParam String username, @RequestParam String password) {
//		 User loggedIn = userServ.login(user);
//		 Optional<User> userInfo = userServ.getUserDetails(userId);
//		 User userData = userInfo.get();
//		 
//		 if(loggedIn != null) {
//			 System.out.println( "Credentials found, routing to homepage");
//		 } else {
//			 System.out.println( "Credentials NOT found");
//		 }
//		 
//		 return userData;
//		 
//	}
	
	

	
	
}
