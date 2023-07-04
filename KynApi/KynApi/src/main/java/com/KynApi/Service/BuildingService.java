package com.KynApi.Service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.KynApi.Entity.Building;
import com.KynApi.Repository.BuildingRepository;

@Service
@Transactional
public class BuildingService {

	@Autowired
	private BuildingRepository buildRepo;
	
	//Save car, saves the given entity, as build in method
	public Building registerBuilding(Building building) {
		return buildRepo.save(building);
	}
	
	public List<Building> searchBuilding(String keyword){
		return buildRepo.searchBuilding(keyword);
	}
}
