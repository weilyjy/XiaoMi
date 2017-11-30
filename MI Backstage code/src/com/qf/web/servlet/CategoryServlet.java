package com.qf.web.servlet;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import com.google.gson.Gson;
import com.qf.bean.Base;
import com.qf.bean.Category;
import com.qf.bean.Category2;
import com.qf.service.CategoryService;
public class CategoryServlet extends BaseServlet {

	private final static Logger LOG = LogManager.getLogger(CategoryServlet.class);

	//获取商品分类（一级菜单）
	public String findType(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		CategoryService service = new CategoryService();
		 Base<List<Category>> base = new Base<List<Category>>();
		try {
			List<Category> list = service.findAll();
			
			 base.setCode(1);
			 base.setContent(list);
			 Gson gson=new Gson();
			 String json = gson.toJson(base);
			 
			 return json;
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			 base.setCode(0);
			 base.setMsg("失败");
			 Gson gson=new Gson();
			 String json = gson.toJson(base);
			
			return json;
		}
		
	}
	//获取商品二级分类
	public String findType2(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		CategoryService service = new CategoryService();
		 Base<List<Category2>> base = new Base<List<Category2>>();
		try {
			List<Category2> list = service.findAll2();
			
			 base.setCode(1);
			 base.setContent(list);
			 Gson gson=new Gson();
			 String json = gson.toJson(base);
			 
			 return json;
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			 base.setCode(0);
			 base.setMsg("失败");
			 Gson gson=new Gson();
			 String json = gson.toJson(base);
			
			return json;
		}
		
	}
	//根据一级分类得到二级分类
	public String findType2ByCid(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String string = request.getParameter("cid");
		int cid = Integer.parseInt(string);
		CategoryService service = new CategoryService();
		 Base<List<Category2>> base = new Base<List<Category2>>();
		try {
			List<Category2> list = service.findByCid(cid);
			
			 base.setCode(1);
			 base.setContent(list);
			 Gson gson=new Gson();
			 String json = gson.toJson(base);
			 
			 return json;
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			 base.setCode(0);
			 base.setMsg("失败");
			 Gson gson=new Gson();
			 String json = gson.toJson(base);
			
			return json;
		}
		
	}
	
}