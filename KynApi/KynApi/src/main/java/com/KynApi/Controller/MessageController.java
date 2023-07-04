package com.KynApi.Controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.KynApi.Entity.Message;
import com.KynApi.Service.MessageSender;
import com.fasterxml.jackson.core.JsonProcessingException;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MessageController {
	private final MessageSender messageSender;
	public MessageController(MessageSender messageSender) {
	this.messageSender = messageSender;
	}
	@PostMapping(path = "/messages/{userName}", consumes =
	MediaType.APPLICATION_JSON_VALUE)
	public void sendMessage(@PathVariable String userName, @RequestBody Message message)
	throws JsonProcessingException {
		System.out.println(userName);
		System.out.println(message.getText());
	messageSender.sendMessage(userName, message);
	}
}
