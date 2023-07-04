package com.KynApi.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.KynApi.Entity.Building;
import com.KynApi.Entity.User;

public interface BuildingRepository extends JpaRepository<Building, Long>{

	@Query(value="SELECT building FROM Building building WHERE building.store_name LIKE '%' || :keyword || '%'" + 
			" OR building.store_type LIKE '%' || :keyword || '%'" + 
			" OR building.location LIKE '%' || :keyword || '%'" )
	public List<Building> searchBuilding(@Param("keyword") String keyword);
}
