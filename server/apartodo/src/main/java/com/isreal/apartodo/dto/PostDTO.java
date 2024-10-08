package com.isreal.apartodo.dto;

import lombok.Data;

import java.util.List;

@Data
public class PostDTO {
    private String createAt;

    private String title;

    private String content;

    List<String> appendImages;
}
