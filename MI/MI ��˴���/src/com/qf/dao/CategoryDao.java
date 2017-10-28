package com.qf.dao;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanListHandler;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import com.qf.bean.Category;
import com.qf.bean.Category2;
import com.qf.utils.C3P0Utils;
public class CategoryDao {

	private final static Logger LOG = LogManager.getLogger(CategoryDao.class);

	public List<Category> findAll() throws SQLException {
		// TODO Auto-generated method stub
		QueryRunner runner = new QueryRunner();
		String sql = "select * from category;";
		Connection conn = C3P0Utils.getConnection();
		//C3P0Utils.close(conn);
		return runner.query(conn, sql, new BeanListHandler<Category>(Category.class));
		
	}

	public List<Category2> findAll2() throws SQLException {
		// TODO Auto-generated method stub
		QueryRunner runner = new QueryRunner();
		String sql = "select * from category2;";
		Connection conn = C3P0Utils.getConnection();
		//C3P0Utils.close(conn);
		return runner.query(conn, sql, new BeanListHandler<Category2>(Category2.class));
	}

	
	public List<Category2> findByCid(int cid) throws SQLException {
		// TODO Auto-generated method stub
		QueryRunner runner = new QueryRunner();
		String sql = "select * from category2 where cid = ?;";
		Connection conn = C3P0Utils.getConnection();
		return runner.query(conn, sql, new BeanListHandler<Category2>(Category2.class), cid);
		 
	}
}
