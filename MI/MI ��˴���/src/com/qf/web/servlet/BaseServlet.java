package com.qf.web.servlet;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
public class BaseServlet extends HttpServlet {

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws IOException{
		resp.setHeader("Access-Control-Allow-Origin", "*");
		
		Class<? extends BaseServlet> clazz = this.getClass();
		String name = req.getParameter("method");
		if(name == null)
		{
			name="index";
			//resp.sendRedirect(req.getContextPath()+"/index.jsp");
		}
		
		try {
			Method method = clazz.getMethod(name, 
					HttpServletRequest.class,HttpServletResponse.class);
		    
			String json = (String) method.invoke(this, req,resp);
			
			if(json != null){
				  PrintWriter out = resp.getWriter();    //把json数据传递到前端，记着前端用ajax接收
		            out.print(json);
			}
			
		} catch (NoSuchMethodException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SecurityException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IllegalArgumentException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
	}
public String index(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
		return null;
	}

}
	
	

