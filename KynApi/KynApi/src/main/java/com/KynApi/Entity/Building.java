package com.KynApi.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="building")
public class Building {

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long buildId;
	private String store_name;
	private String store_type;
	private String location;
	private String store_contact;
	
	@Column(nullable = true, length = 64)
	private String photos;

	@Column(nullable = true, length = 64)
	private String photoImagePath;
	
	public Building() {}
	
	public Building(Long buildId, String store_name, String store_type, String location, String store_contact,
			String photos, String photoImagePath) {
		super();
		this.buildId = buildId;
		this.store_name = store_name;
		this.store_type = store_type;
		this.location = location;
		this.store_contact = store_contact;
		this.photos = photos;
		this.photoImagePath = photoImagePath;
	}
	
	public Long getBuildId() {
		return buildId;
	}
	public void setBuildId(Long buildId) {
		this.buildId = buildId;
	}
	public String getStore_name() {
		return store_name;
	}
	public void setStore_name(String store_name) {
		this.store_name = store_name;
	}
	public String getStore_type() {
		return store_type;
	}
	public void setStore_type(String store_type) {
		this.store_type = store_type;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getStore_contact() {
		return store_contact;
	}
	public void setStore_contact(String store_contact) {
		this.store_contact = store_contact;
	}
	
	
	public String getPhotos() {
		return photos;
	}

	public void setPhotos(String photos) {
		this.photos = photos;
	}

	public String getPhotoImagePath() {
		return photoImagePath;
	}

	public void setPhotoImagePath(String photoImagePath) {
		this.photoImagePath = photoImagePath;
	}

	@Override
	public String toString() {
		return "Store [Store name=" + store_name + ", Contact number=" + store_contact + 
				", Location=" + location + "Store Type: " + store_type
				+ "]";
	}
}
