package com.KynApi.Config;

import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.bind.annotation.CrossOrigin;

@Configuration
@EnableOAuth2Sso
public class OAuthConfig extends WebSecurityConfigurerAdapter{
	
	 	@Override
	    protected void configure(HttpSecurity http) throws Exception {
	        http
	        	.csrf().disable()
	            .antMatcher("/**")
	            .authorizeRequests()
		            .antMatchers("/login").permitAll()
		            .antMatchers("/", "/messages/**", "/search", "/registerUser", "/registerBuilding", "/login**", "/webjars/**", "/error**").permitAll()
	                .antMatchers("/css/**").permitAll()
					.antMatchers("/images/**").permitAll()
					.antMatchers("/js/**").permitAll()
		            .anyRequest().authenticated()
	         //     .httpBasic()
	            .and()
		        .logout()
		            .logoutSuccessUrl("/login")
		            .permitAll()
	        		.logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
	        		.clearAuthentication(true)
		            .invalidateHttpSession(true);
	    }
}
