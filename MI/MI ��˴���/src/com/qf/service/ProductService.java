package com.qf.service;
import java.sql.SQLException;
import java.util.List;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import com.qf.bean.Product;
import com.qf.dao.ProductDao;

public class ProductService {
	private final static Logger LOG = LogManager.getLogger(ProductService.class);

	public List<Product> findAll() throws SQLException {
		// TODO Auto-generated method stub
		ProductDao productDao = new ProductDao();
		return productDao.findAll();
	}

	public List<Product> findByCid(int cid) throws SQLException {
		// TODO Auto-generated method stub
		ProductDao productDao = new ProductDao();
		return productDao.findByCid(cid);
	}

	public List<Product> findByPname(String pname) throws SQLException {
		// TODO Auto-generated method stub
		ProductDao productDao = new ProductDao();
		return productDao.findByPname(pname);
	}

	public List<Product> findByC2id(int c2id) throws SQLException {
		// TODO Auto-generated method stub
		ProductDao productDao = new ProductDao();
		return productDao.findByC2id(c2id);
	}

	public List<Product> findByPid(int pid) throws SQLException {
		// TODO Auto-generated method stub
		return new ProductDao().findByPid(pid);
	}
}
