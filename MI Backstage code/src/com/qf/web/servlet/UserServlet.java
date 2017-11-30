package com.qf.web.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.InvocationTargetException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.poi.ss.formula.functions.T;

import com.google.gson.Gson;
import com.qf.bean.Base;
import com.qf.bean.User;
import com.qf.service.UserService;

public class UserServlet extends BaseServlet {

	private final static Logger LOG = LogManager.getLogger(UserServlet.class);

	public String login(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		User user = new User();

		try {

			BeanUtils.populate(user, request.getParameterMap());

		} catch (IllegalAccessException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} catch (InvocationTargetException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		UserService service = new UserService();
		Base<User> base = new Base<User>();
		try {
			User user1 = service.find(user);

			// 用户找不到，返回0
			if (user1 == null) {
				response.sendRedirect(request.getContextPath() + "/login.html");

				base.setCode(0);
				base.setMsg("用户名或密码错误");
				Gson gson = new Gson();
				String json = gson.toJson(base);

				return json;
			} else {
				// 用户存在，返回1
				response.sendRedirect(request.getContextPath() + "/index.html");

				base.setCode(1);
				base.setContent(user1);

				Gson gson = new Gson();
				String json = gson.toJson(base);

				return json;
			}

		} catch (SQLException e) {
			// 异常，失败 返回0
			response.sendRedirect(request.getContextPath() + "/login.html");
			base.setCode(0);
			Gson gson = new Gson();
			String json = gson.toJson(base);

			return json;
		}

	}

	public String register(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException, Throwable {

		response.setContentType("text/html");

		String username = request.getParameter("username");

		UserService service = new UserService();
		Base<T> base = new Base<T>();
		try {

			boolean u1 = service.find1(username);

			// 如果用户已经存在 返回code=0
			if (u1) {

				base.setCode(0);
				base.setMsg("用户已存在");
				Gson gson = new Gson();
				String json = gson.toJson(base);
				return json;
			}
			// 如果用户不存在 将用户名存在cookie中， 返回code=1 可以注册

			/*
			 * base.setCode(1); Gson gson=new Gson(); String json =
			 * gson.toJson(base); return json;
			 */

		} catch (SQLException e) {
			// 查找异常失败返回0
			response.sendRedirect(request.getContextPath() + "/register.html");
			base.setCode(0);
			Gson gson = new Gson();
			String json = gson.toJson(base);

			return json;
		}
		return null;

	}

	public String register2(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException, Throwable {

		response.setContentType("text/html");

		User user = new User();
		String username = request.getParameter("username");
		String password = request.getParameter("password");

		/*
		 * Cookie[] cookies=request.getCookies(); Cookie cookie= cookies[0];
		 * String username=cookie.getValue();
		 */
		UserService service = new UserService();
		user.setUsername(username);
		user.setPassword(password);
		Base<User> base = new Base<User>();
		try {
			// 保存成功返回1
			service.save(user);
			response.sendRedirect(request.getContextPath() + "/index.html");
			base.setCode(1);
			base.setContent(user);
			Gson gson = new Gson();
			String json = gson.toJson(base);
			return json;
		} catch (Exception e) {
			// 保存失败返回0
			response.sendRedirect(request.getContextPath() + "/register.html");
			base.setCode(0);
			Gson gson = new Gson();
			String json = gson.toJson(base);

			return json;
		}

	}

}
