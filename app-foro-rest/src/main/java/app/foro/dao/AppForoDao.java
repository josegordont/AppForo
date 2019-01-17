package app.foro.dao;

import java.io.FileWriter;
import java.io.IOException;

import org.springframework.stereotype.Repository;

import com.google.gson.Gson;

import app.foro.dto.Foro;

@Repository
public class AppForoDao {

	public Boolean saveForo(Foro foro) {
		Gson gson = new Gson();
		String json = gson.toJson(foro);
		System.out.println(json);
		try {
			FileWriter file = new FileWriter("D:\\test-json\\foro.json");
			file.write(json);
			file.close();
		} catch (IOException e) {
			e.getStackTrace();
			return Boolean.FALSE;
		}
		return Boolean.TRUE;
	}

}
