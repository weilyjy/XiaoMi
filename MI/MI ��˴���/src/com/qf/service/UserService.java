package com.qf.service;
import java.sql.SQLException;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import com.qf.bean.User;
import com.qf.dao.UserDao;
public class UserService {

	private boolean flag=false;
	private final static Logger LOG = LogManager.getLogger(UserService.class);

	public User find(User user) throws SQLException {
		return new UserDao().find(user);
		// TODO Auto-generated method stub
		
	}
	public void save(User user) throws SQLException {
		// TODO Auto-generated method stub
		
		new UserDao().save(user);
		
	}
	public boolean find1(String username) throws SQLException {
		// TODO Auto-generated method stub
		UserDao userDao=new UserDao();
		User u=userDao.find1(username);
		boolean flag = false;
		if(u!=null){
			flag=true;
		}
		return flag;
	}
}
