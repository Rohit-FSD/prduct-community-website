package com.nagarro.communitywebsite;

import com.nagarro.communitywebsite.entity.User;
import com.nagarro.communitywebsite.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Random;

@SpringBootApplication
public class CommunitywebsiteApplication  {
//	@Autowired
//	private UserRepository userRepository;
//
//	Random random=new Random();
//
//	public void createUsers(){
//		User user=new User();
//		Long id=new Long(random.nextInt(100));
//		user.setId(id);
//		user.setEmail("user"+id+"@gmail.com");
//		user.setPassword("user"+id);
//		user.setEnabled(true);
//		user.setRole("Admin");
//		user.setUserName("user"+id);
//
//		User save=userRepository.save(user);
//
//		System.out.println(save);
//	}

	public static void main(String[] args) {
		SpringApplication.run(CommunitywebsiteApplication.class, args);

	}

//	@Override
//	public void run(String... args) throws Exception {
//		createUsers();
//	}
}
