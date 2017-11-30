package com.qf.bean;
import java.io.Serializable;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
public class User implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private final static Logger LOG = LogManager.getLogger(User.class);
	
	private Integer uid;
	private String username;
	private String password;
	public Integer getUid() {
		return uid;
	}
	public void setUid(Integer uid) {
		this.uid = uid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
