package com.isreal.apartodo.controller;

import com.isreal.apartodo.document.*;
import com.isreal.apartodo.dto.*;
import com.isreal.apartodo.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/member")
public class MemberController {

    private final MemberService memberService;

    @PostMapping("/add-checklist")
    public ChecklistDocument addChecklist(@RequestBody ChecklistDTO checklistDTO) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return memberService.addCheckList(checklistDTO, username);
    }

    @GetMapping("/find-checklists")
    public List<ChecklistDocument> findChecklists() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return memberService.findChecklists(username);
    }

    @PostMapping("/fault-request")
    public void faultRequest(@RequestBody FaultRequestDTO faultRequestDTO) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        memberService.faultRequest(faultRequestDTO, username);
    }

    @GetMapping("/find-faults")
    public List<FaultDocument> findFaults() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return memberService.findFaults(username);
    }

    @PostMapping("/create-question")
    public QuestionDocument createQuestion(@RequestBody PostDTO postDTO) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return memberService.createQuestion(postDTO, username);
    }

    @PostMapping("/update-profile")
    public void updateProfile(@RequestBody ProfileDTO profileDTO) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        memberService.updateProfile(profileDTO, username);
    }

    @GetMapping("/my-page")
    public MyPageDTO myPage() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return memberService.myPage(username);
    }

    @PostMapping("/create-question-comment")
    public QuestionCommentDocument createQuestionComment(@RequestBody CommentDTO commentDTO) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return memberService.createQuestionComment(commentDTO, username);
    }

    @PostMapping("/find-question-comments")
    public List<QuestionCommentDocument> findComments(@RequestBody QuestionDocument question) {
        return memberService.findComments(question);
    }

    @GetMapping("/find-questions")
    public QuestionsDTO findQuestions() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return memberService.findQuestions(username);
    }

    @PostMapping("/create-notice-comment")
    public NoticeCommentDocument createNoticeComment(@RequestBody CommentDTO commentDTO) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return memberService.createNoticeComment(commentDTO, username);
    }

    @PostMapping("/find-notice-comments")
    public List<NoticeCommentDocument> findNoticeComments(@RequestBody NoticeDocument notice) {
        return memberService.findNoticeComments(notice);
    }

    @GetMapping("/find-notices")
    public NoticesDTO findNotices() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return memberService.findNotices(username);
    }

    @GetMapping("find-fault-checklists")
    public List<FaultChecklistDocument> findFaultChecklists() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return memberService.findFaultChecklists(username);
    }
}
