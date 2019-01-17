package app.foro.dto;

import java.util.List;

public class Foro {
	
	List<Question> questionList;

	List<ResponseLevel1> responseLevel1List;

	List<ResponseLevel2> responseLevel2List;

	public void setQuestionList(List<Question> questionList) {
		this.questionList = questionList;
	}

	public void setResponseLevel1List(List<ResponseLevel1> responseLevel1List) {
		this.responseLevel1List = responseLevel1List;
	}

	public void setResponseLevel2List(List<ResponseLevel2> responseLevel2List) {
		this.responseLevel2List = responseLevel2List;
	}

	public List<Question> getQuestionList() {
		return questionList;
	}

	public List<ResponseLevel1> getResponseLevel1List() {
		return responseLevel1List;
	}

	public List<ResponseLevel2> getResponseLevel2List() {
		return responseLevel2List;
	}
	
	
	
	
}
