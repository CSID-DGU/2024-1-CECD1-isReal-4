package com.isreal.apartodo.dto;

import com.isreal.apartodo.document.QuestionDocument;
import lombok.Data;

import java.util.List;

@Data
public class QuestionsDTO {
    List<Posts> posts;

    @Data
    public static class Posts {
        private QuestionDocument question;
        private int commentCount;
    }
}
