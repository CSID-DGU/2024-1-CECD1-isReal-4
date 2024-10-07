package com.isreal.apartodo.dto;

import com.isreal.apartodo.document.MemberDocument;
import lombok.Data;

@Data
public class JoinRejectDTO {
    MemberDocument member;
    String rejection;
}
