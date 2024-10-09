package com.isreal.apartodo.dto;

import com.isreal.apartodo.document.NoticeDocument;
import lombok.Data;

import java.util.List;

@Data
public class NoticesDTO {
    List<NoticePosts> posts;

    @Data
    public static class NoticePosts {
        private NoticeDocument notice;
        private int commentCount;
    }
}
