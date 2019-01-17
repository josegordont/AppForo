package app.foro.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import app.foro.dao.AppForoDao;
import app.foro.dto.Foro;

@RestController
@Scope(value="request")
@RequestMapping(value="/service/foro")
public class AppForoRest {
	
	@Autowired
	private AppForoDao appForoDao;
	
	public void setAppForoDao(AppForoDao appForoDao) {
		this.appForoDao = appForoDao;
	}

	@RequestMapping(value = "/saveForo", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Boolean> saveForo(@RequestBody Foro foro){
		Boolean response;
		try {
			response = appForoDao.saveForo(foro);
			return new ResponseEntity<Boolean>(response, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<Boolean>(Boolean.FALSE, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
