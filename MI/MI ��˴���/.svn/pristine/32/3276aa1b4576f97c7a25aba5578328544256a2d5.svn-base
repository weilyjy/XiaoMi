package com.qf.service;
import java.sql.SQLException;
import java.util.List;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import com.qf.bean.Category;
import com.qf.bean.Category2;
import com.qf.dao.CategoryDao;
public class CategoryService {

	private final static Logger LOG = LogManager.getLogger(CategoryService.class);

	public List<Category> findAll() throws SQLException {
		// TODO Auto-generated method stub
		return new CategoryDao().findAll();
	}

	public List<Category2> findAll2() throws SQLException {
		// TODO Auto-generated method stub
		return new CategoryDao().findAll2();
	}

	public List<Category2> findByCid(int cid) throws SQLException {
		// TODO Auto-generated method stub
		return new CategoryDao().findByCid(cid);
	}
}
