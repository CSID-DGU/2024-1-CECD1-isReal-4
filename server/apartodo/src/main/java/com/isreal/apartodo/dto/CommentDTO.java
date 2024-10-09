package com.isreal.apartodo.dto;

import lombok.Data;

@Data
public class CommentDTO {
    private String postId;

    private String createAt;

    private String content;
}
