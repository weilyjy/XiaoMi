package com.qf.web.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.Test;

import com.google.gson.Gson;
import com.qf.bean.Base;
import com.qf.bean.Product;
import com.qf.service.ProductService;

public class ProductServlet extends BaseServlet {
	private final static Logger LOG = LogManager.getLogger(ProductServlet.class);

	public String showProduct(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 查询所有商品
		ProductService service = new ProductService();
		Base<List<Product>> base = new Base<List<Product>>();
		List<Product> list = null;
		try {
			list = service.findAll();

			base.setCode(1);
			base.setContent(list);
			Gson gson = new Gson();
			String json = gson.toJson(base);

			return json;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			base.setCode(0);
			base.setMsg("查询失败");
			Gson gson = new Gson();
			String json = gson.toJson(base);

			return json;
		}

	}

	// 根据cid查询商品（一级菜单）
	public String findByCid(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String string = request.getParameter("cid");
		int cid = Integer.parseInt(string);
		ProductService service = new ProductService();
		Base<List<Product>> base = new Base<List<Product>>();
		try {
			List<Product> list = service.findByCid(cid);

			base.setCode(1);
			base.setContent(list);

			Gson gson = new Gson();
			String json = gson.toJson(base);

			return json;

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			base.setCode(0);
			base.setMsg("查询失败");
			Gson gson = new Gson();
			String json = gson.toJson(base);

			return json;
		}

	}

	// 根据商品名字搜索商品
	public String findByPname(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String pname = request.getParameter("pname");
		
		ProductService service = new ProductService();
		Base<List<Product>> base = new Base<List<Product>>();
		try {
			List<Product> list = service.findByPname(pname);

			base.setCode(1);
			base.setContent(list);

			Gson gson = new Gson();
			String json = gson.toJson(base);

			return json;

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			base.setCode(0);
			base.setMsg("搜索失败");
			Gson gson = new Gson();
			String json = gson.toJson(base);

			return json;
		}

	}

	// 根据c2id查询商品（二级菜单）
	public String findByC2id(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String string = request.getParameter("c2id");
		int c2id = Integer.parseInt(string);
		ProductService service = new ProductService();
		Base<List<Product>> base = new Base<List<Product>>();
		try {
			List<Product> list = service.findByC2id(c2id);

			base.setCode(1);
			base.setContent(list);

			Gson gson = new Gson();
			String json = gson.toJson(base);

			return json;

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			base.setCode(0);
			base.setMsg("查询失败");
			Gson gson = new Gson();
			String json = gson.toJson(base);

			return json;
		}

	}

	// 根据商品pid搜索商品
	public String findByPid(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String string = request.getParameter("pid");
		int pid = Integer.parseInt(string);
		ProductService service = new ProductService();
		Base<List<Product>> base = new Base<List<Product>>();
		try {
			List<Product> list = service.findByPid(pid);

			base.setCode(1);
			base.setContent(list);

			Gson gson = new Gson();
			String json = gson.toJson(base);

			return json;

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			base.setCode(0);
			base.setMsg("搜索失败");
			Gson gson = new Gson();
			String json = gson.toJson(base);

			return json;
		}
	}

}