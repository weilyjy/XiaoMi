package com.qf.bean;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.Test;

import com.google.gson.Gson;
public class Test1 {

	private final static Logger LOG = LogManager.getLogger(Test1.class);
	
	@Test
	public void test1(){
		List<Product> list =new ArrayList<Product>();
		Product product = new Product();
		product.setPname("ddd");
		list.add(product);
		Base<List<Product>> base = new Base<List<Product>>();
		base.setCode(1);
		base.setMsg("成功");
		base.setContent(list);
		Gson gson=new Gson();
		 String json = gson.toJson(base);
		 System.out.println(json);
	}
}
