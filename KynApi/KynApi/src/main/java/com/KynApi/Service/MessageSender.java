package com.KynApi.Service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.KynApi.Entity.Message;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
@Service
public class MessageSender {
	private static final String HOOKS_URL = "https://hooks.slack.com/services/%s";
	
	
	public void sendMessage(String userName, Message message) throws
	JsonProcessingException{
		Map<String,String> myMap=new HashMap<String, String>();
	
		myMap.put("KYN","T05ANN1E4FL/B05AG371TV4/ah09JzmLJ3HCf8ZzY6Kf9Eif");

	String userChannelId = myMap.get(userName);
	System.out.println("username"+userChannelId);
	System.out.println(HOOKS_URL);
	String userWebhookUrl = String.format(HOOKS_URL,userChannelId);
	RestTemplate restTemplate = new RestTemplate();
	HttpHeaders headers = new HttpHeaders();
	headers.setContentType(MediaType.APPLICATION_JSON);
	ObjectMapper objectMapper = new ObjectMapper();
	String messageJson = objectMapper.writeValueAsString(message);
	HttpEntity<String> entity = new HttpEntity<>(messageJson,headers);
	System.out.println(userWebhookUrl);
	restTemplate.exchange("https://hooks.slack.com/services/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", 
			HttpMethod.POST,
	entity, String.class);
	}

}

//https://hooks.slack.com/services/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
