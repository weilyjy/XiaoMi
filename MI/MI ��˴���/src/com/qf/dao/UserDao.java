package com.qf.dao;
import java.sql.Connection;
import java.sql.SQLException;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import com.qf.bean.User;
import com.qf.utils.C3P0Utils;
public class UserDao {

	private final static Logger LOG = LogManager.getLogger(UserDao.class);

	public User find(User user) throws SQLException {
		// TODO Auto-generated method stub
		QueryRunner runner = new QueryRunner();
		String sql = "select * from user where username=? and password=?;";
		Connection conn = C3P0Utils.getConnection();
	User user1 =	runner.query(conn, sql, new BeanHandler<User>(User.class), user.getUsername(),user.getPassword());
		
		
		return user1;
	}
	public  User find1(String username) throws SQLException{
		
		QueryRunner runner = new QueryRunner();
		String sql = "select * from user where username = ? ;";
		Connection conn = C3P0Utils.getConnection();
		
		User user = runner.query(conn, sql, 
				new BeanHandler<User>(User.class), username);
		C3P0Utils.close(conn);
		return user;
		
	}

	public void save(User user1) throws SQLException {
		
		QueryRunner runner = new QueryRunner();
		String sql = "insert  into user (username,password) values (?,?);";
		Connection conn = C3P0Utils.getConnection();
		runner.update(conn, sql,user1.getUsername(),user1.getPassword()
				);
		
		C3P0Utils.close(conn);
	}
	
	
}
