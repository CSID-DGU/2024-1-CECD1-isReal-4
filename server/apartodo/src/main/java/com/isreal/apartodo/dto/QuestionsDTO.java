package com.isreal.apartodo.dto;

import com.isreal.apartodo.document.QuestionDocument;
import lombok.Data;

import java.util.List;

@Data
public class QuestionsDTO {
    List<QuestionPosts> posts;

    @Data
    public static class QuestionPosts {
        private QuestionDocument question;
        private int commentCount;
    }
}
