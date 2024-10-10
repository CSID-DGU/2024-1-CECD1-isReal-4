package com.isreal.apartodo.service;

import com.isreal.apartodo.document.*;
import com.isreal.apartodo.dto.*;
import com.isreal.apartodo.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final ChecklistRepository checklistRepository;
    private final FaultRepository faultRepository;
    private final QuestionRepository questionRepository;
    private final QuestionCommentRepository questionCommentRepository;
    private final NoticeRepository noticeRepository;
    private final NoticeCommentRepository noticeCommentRepository;
    private final FaultChecklistRepository faultChecklistRepository;

    public ChecklistDocument addCheckList(ChecklistDTO checklistDTO, String username) {
        MemberDocument member = memberRepository.findByUsername(username);
        String memberName = member.getMemberName();
        String apartmentName = member.getApartmentName();

        ChecklistDocument checklistDocument = ChecklistDocument.builder()
                .createAt(checklistDTO.getCreateAt())
                .sections(checklistDTO.getSections())
                .username(username)
                .memberName(memberName)
                .apartmentName(apartmentName)
                .build();

        return checklistRepository.save(checklistDocument);
    }

    public List<ChecklistDocument> findChecklists(String username) {
        return checklistRepository.findByUsername(username, Sort.by(Sort.Direction.DESC, "checklistId"));
    }

    public void faultRequest(FaultRequestDTO faultRequestDTO, String username) {
        // username으로 Member 정보 조회
        MemberDocument member = memberRepository.findByUsername(username);
        String memberName = member.getMemberName();
        String phoneNumber = member.getPhoneNumber();
        String apartmentName = member.getApartmentName();
        String apartmentBuildingNumber = member.getApartmentBuildingNumber();

        // FaultRequestDTO의 faults 리스트를 순회하며 각각 FaultDocument로 변환 후 저장
        for (FaultRequestDTO.Fault fault : faultRequestDTO.getFaults()) {
            FaultDocument faultDocument = FaultDocument.builder()
                    .createAt(faultRequestDTO.getCreateAt())               // 신청한 시간
                    .faultName(fault.getFaultName())                       // 하자 이름
                    .description(fault.getDescription())                   // 상태
                    .appendText(fault.getAppendText())                     // 추가 설명
                    .appendImages(fault.getAppendImages())                 // 추가 이미지
                    .username(username)                                    // 입주 예정자 이메일
                    .memberName(memberName)                                // 입주 예정자 이름
                    .phoneNumber(phoneNumber)                              // 입주 예정자 핸드폰 번호
                    .apartmentName(apartmentName)                          // 아파트 이름
                    .apartmentBuildingNumber(apartmentBuildingNumber)      // 동호수
                    .reviewer(null)                                        // 검토자 정보 없음
                    .reviewComment(null)                                   // 검토 코멘트 없음
                    .reviewCompletionTime(null)                            // 검토 시간 없음
                    .approvalStatus(ApprovalStatus.PEND)                             // 기본 승인 상태 "PENDING"
                    .build();

            // FaultDocument 저장
            faultRepository.save(faultDocument);
        }
    }

    public List<FaultDocument> findFaults(String username) {
        return faultRepository.findByUsername(username, Sort.by(Sort.Direction.DESC, "faultId"));
    }

    public QuestionDocument createQuestion(PostDTO postDTO, String username) {
        // username을 통해 작성자의 정보를 가져옴
        MemberDocument member = memberRepository.findByUsername(username);

        // QuestionDocument 생성
        QuestionDocument questionDocument = QuestionDocument.builder()
                .username(username)                          // 작성자의 이메일
                .memberName(member.getMemberName())           // 작성자의 이름
                .role(member.getRole())                       // 작성자의 역할
                .apartmentName(member.getApartmentName())     // 작성자가 속한 아파트 이름
                .apartmentBuildingNumber(member.getApartmentBuildingNumber())  // 아파트 동호수
                .createAt(postDTO.getCreateAt())              // 작성 시간
                .title(postDTO.getTitle())                    // 게시물 제목
                .content(postDTO.getContent())                // 게시물 내용
                .appendImages(postDTO.getAppendImages())      // 게시물에 첨부된 이미지들
                .build();

        // 생성된 QuestionDocument를 저장 후 return
        return questionRepository.save(questionDocument);
    }

    public void updateProfile(ProfileDTO profileDTO, String username) {
        MemberDocument member = memberRepository.findByUsername(username);
        member.setProfileImage(profileDTO.getProfileImage());
        memberRepository.save(member);
    }

    public MyPageDTO myPage(String username) {
        // username을 통해 회원 정보를 가져옴
        MemberDocument member = memberRepository.findByUsername(username);

        // 질문글 리스트를 questionRepository에서 가져오고 questionId로 내림차순 정렬
        List<QuestionDocument> questions = questionRepository.findByUsername(username, Sort.by(Sort.Direction.DESC, "questionId"));

        // 질문글 갯수
        int questionCount = questions.size();

        // 하자 갯수를 faultRepository에서 count
        int faultCount = faultRepository.countByUsername(username);

        // MyPageDTO 빌드
        MyPageDTO myPageDTO = new MyPageDTO();
        myPageDTO.setUsername(member.getUsername());
        myPageDTO.setMemberName(member.getMemberName());
        myPageDTO.setApartmentName(member.getApartmentName());
        myPageDTO.setApartmentBuildingNumber(member.getApartmentBuildingNumber());
        myPageDTO.setProfileImage(member.getProfileImage());
        myPageDTO.setFaultCount(faultCount);
        myPageDTO.setQuestionCount(questionCount);
        myPageDTO.setQuestions(questions);

        return myPageDTO;
    }

    public QuestionCommentDocument createQuestionComment(CommentDTO commentDTO, String username) {
        // username을 통해 작성자의 정보를 가져옴
        MemberDocument member = memberRepository.findByUsername(username);

        // QuestionCommentDocument 생성
        QuestionCommentDocument questionCommentDocument = QuestionCommentDocument.builder()
                .questionId(commentDTO.getPostId())
                .username(username)                          // 작성자의 이메일
                .memberName(member.getMemberName())           // 작성자의 이름
                .role(member.getRole())                       // 작성자의 역할
                .apartmentName(member.getApartmentName())     // 작성자가 속한 아파트 이름
                .apartmentBuildingNumber(member.getApartmentBuildingNumber())  // 아파트 동호수
                .createAt(commentDTO.getCreateAt())           // 작성 시간
                .content(commentDTO.getContent())             // 댓글 내용
                .build();

        // 생성된 QuestionCommentDocument를 저장 후 return
        return questionCommentRepository.save(questionCommentDocument);
    }

    public List<QuestionCommentDocument> findComments(QuestionDocument question) {
        // questionId로 댓글을 내림차순(DESC)으로 정렬해서 가져옴
        return questionCommentRepository.findByQuestionId(
                question.getQuestionId(),
                Sort.by(Sort.Direction.DESC, "questionCommentId")
        );
    }

    public QuestionsDTO findQuestions(String username) {
        // 1. username을 통해 회원 정보를 가져오고 apartmentName을 추출
        MemberDocument member = memberRepository.findByUsername(username);
        String apartmentName = member.getApartmentName();

        // 2. apartmentName에 해당하는 질문들(question)을 추출하고, questionId로 내림차순 정렬
        List<QuestionDocument> questions = questionRepository.findByApartmentName(apartmentName, Sort.by(Sort.Direction.DESC, "questionId"));

        // 3. QuestionsDTO 객체를 생성하고, 각 질문에 대한 댓글 수(commentCount)를 계산
        QuestionsDTO questionsDTO = new QuestionsDTO();

        List<QuestionsDTO.QuestionPosts> questionPostsList = new ArrayList<>();

        for (QuestionDocument question : questions) {
            // 질문에 달린 댓글의 갯수 추출
            int commentCount = questionCommentRepository.countByQuestionId(question.getQuestionId());

            // Posts 객체에 질문과 댓글 수를 저장
            QuestionsDTO.QuestionPosts post = new QuestionsDTO.QuestionPosts();
            post.setQuestion(question);
            post.setCommentCount(commentCount);

            // Posts 객체를 리스트에 추가
            questionPostsList.add(post);
        }

        // 4. QuestionsDTO의 posts 리스트를 설정
        questionsDTO.setPosts(questionPostsList);

        // 5. QuestionsDTO를 반환
        return questionsDTO;
    }

    public NoticeCommentDocument createNoticeComment(CommentDTO commentDTO, String username) {
        // username을 통해 작성자의 정보를 가져옴
        MemberDocument member = memberRepository.findByUsername(username);

        // NoticeCommentDocument 생성
        NoticeCommentDocument noticeCommentDocument = NoticeCommentDocument.builder()
                .noticeId(commentDTO.getPostId())            // Notice의 ID
                .username(username)                            // 작성자의 이메일
                .memberName(member.getMemberName())            // 작성자의 이름
                .role(member.getRole())                        // 작성자의 역할
                .apartmentName(member.getApartmentName())      // 작성자가 속한 아파트 이름
                .apartmentBuildingNumber(member.getApartmentBuildingNumber())  // 아파트 동호수
                .createAt(commentDTO.getCreateAt())            // 작성 시간
                .content(commentDTO.getContent())              // 댓글 내용
                .build();

        // 생성된 NoticeCommentDocument를 저장 후 return
        return noticeCommentRepository.save(noticeCommentDocument);
    }

    public List<NoticeCommentDocument> findNoticeComments(NoticeDocument notice) {
        // noticeId로 댓글을 내림차순(DESC)으로 정렬해서 가져옴
        return noticeCommentRepository.findByNoticeId(
                notice.getNoticeId(),
                Sort.by(Sort.Direction.DESC, "noticeCommentId")
        );
    }

    public NoticesDTO findNotices(String username) {
        // 1. username을 통해 회원 정보를 가져오고 apartmentName을 추출
        MemberDocument member = memberRepository.findByUsername(username);
        String apartmentName = member.getApartmentName();

        // 2. apartmentName에 해당하는 공지들(notices)을 추출하고, noticeId로 내림차순 정렬
        List<NoticeDocument> notices = noticeRepository.findByApartmentName(apartmentName, Sort.by(Sort.Direction.DESC, "noticeId"));

        // 3. NoticesDTO 객체를 생성하고, 각 공지에 대한 댓글 수(commentCount)를 계산
        NoticesDTO noticesDTO = new NoticesDTO();

        List<NoticesDTO.NoticePosts> noticePostsList = new ArrayList<>();

        for (NoticeDocument notice : notices) {
            // 공지에 달린 댓글의 갯수 추출
            int commentCount = noticeCommentRepository.countByNoticeId(notice.getNoticeId());

            // NoticePosts 객체에 공지와 댓글 수를 저장
            NoticesDTO.NoticePosts post = new NoticesDTO.NoticePosts();
            post.setNotice(notice);
            post.setCommentCount(commentCount);

            // NoticePosts 객체를 리스트에 추가
            noticePostsList.add(post);
        }

        // 4. NoticesDTO의 posts 리스트를 설정
        noticesDTO.setPosts(noticePostsList);

        // 5. NoticesDTO를 반환
        return noticesDTO;
    }

    public List<FaultChecklistDocument> findFaultChecklists(String username) {
        return faultChecklistRepository.findByUsername(
                username,
                Sort.by(Sort.Direction.DESC, "faultChecklistId")
        );
    }

    public FaultChecklistDocument createFaultChecklist(ChecklistDTO checklistDTO, String username) {
        // username을 통해 작성자의 정보를 가져옴
        MemberDocument member = memberRepository.findByUsername(username);

        // FaultChecklistDocument 생성
        FaultChecklistDocument faultChecklistDocument = FaultChecklistDocument.builder()
                .createAt(checklistDTO.getCreateAt())                // 작성 시간
                .sections(checklistDTO.getSections())                // 섹션 내용
                .username(username)                                  // 입주예정자 이메일
                .memberName(member.getMemberName())                  // 입주예정자 이름
                .apartmentName(member.getApartmentName())            // 아파트 이름
                .phoneNumber(member.getPhoneNumber())                // 입주예정자 핸드폰 번호
                .apartmentBuildingNumber(member.getApartmentBuildingNumber())  // 동호수
                .reviewer(null)                                      // 명시적으로 null 할당
                .reviewComment(null)                                 // 명시적으로 null 할당
                .reviewCompletionTime(null)                          // 명시적으로 null 할당
                .approvalStatus(ApprovalStatus.PEND)                 // 승인 상태 PEND
                .build();

        // 생성된 FaultChecklistDocument를 저장 후 return
        return faultChecklistRepository.save(faultChecklistDocument);
    }

    public FaultChecklistDocument updateFaultChecklist(FaultChecklistDocument faultChecklist) {
        if (faultChecklist.getApprovalStatus().equals(ApprovalStatus.REJECT)) {
            faultChecklist.setFaultChecklistId(null);
            faultChecklist.setReviewer(null);
            faultChecklist.setReviewComment(null);
            faultChecklist.setReviewCompletionTime(null);
            faultChecklist.setApprovalStatus(ApprovalStatus.PEND);
            return faultChecklistRepository.save(faultChecklist);
        }
        return faultChecklistRepository.save(faultChecklist);
    }
}
