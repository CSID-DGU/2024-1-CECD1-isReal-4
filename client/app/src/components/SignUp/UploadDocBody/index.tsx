import { useState, ChangeEvent, MouseEvent } from "react";
import * as Styled from "./style.ts";
import { useNavigate } from "react-router-dom";

export default function UploadDocBody() {
    const navigate = useNavigate();

    const [fileNames, setFileNames] = useState<string[]>([]);
    const [isCheckboxChecked, setIsCheckboxChecked] = useState<boolean>(false);
    const [openSection, setOpenSection] = useState<number | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const newFileNames = Array.from(files).map((file) => file.name);
            setFileNames(newFileNames);
        }
    };

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsCheckboxChecked(event.target.checked);
    };

    const isButtonEnabled = fileNames.length > 0 && isCheckboxChecked;

    const toggleSection = (section: number) => {
        setOpenSection(openSection === section ? null : section);
    };

    const handleContainerClick = (section: number) => (event: MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        toggleSection(section);
    };

    const handleComplete = () => {
        navigate("/home");
    };

    return (
        <Styled.Container>
            <Styled.UploadContainer>
                <Styled.Label>인증 서류</Styled.Label>
                <Styled.UploadWrapper>
                    <Styled.Input
                        type='file'
                        id='file-upload'
                        accept='.pdf, .jpg' // 파일 형식 제한
                        multiple
                        onChange={handleFileChange}
                    />
                    <Styled.InputLabel htmlFor='file-upload'>
                        {fileNames.length > 0 ? fileNames.join(", ") : "인증 서류를 업로드해주세요."}
                    </Styled.InputLabel>
                </Styled.UploadWrapper>
                <Styled.Description>
                    업로드해주신 서류 확인까지 최대 3일 정도 소요될 수 있으며 인증이 완료될 때까지 일부 서비스가 제한될
                    수 있으므로 참고 바랍니다.
                </Styled.Description>
                <Styled.Description>
                    가입 신청 시 제출하신 서류는 본인 확인 및 서비스 이용을 위한 목적으로만 사용되며, 본인 확인이 완료된
                    후에는 즉시 폐기됩니다.
                </Styled.Description>
            </Styled.UploadContainer>
            <Styled.RuleDescriptionContainer>
                <Styled.Label>이용약관 동의</Styled.Label>

                <Styled.CheckboxWrapper>
                    <Styled.Checkbox type='checkbox' checked={isCheckboxChecked} onChange={handleCheckboxChange} />
                    <Styled.AgreeHeader>전체 동의하기</Styled.AgreeHeader>
                </Styled.CheckboxWrapper>

                <Styled.TermsContainer onClick={handleContainerClick(1)}>
                    <Styled.SectionHeader>
                        1. 수집하는 개인정보 항목
                        <Styled.ToggleButton>{openSection === 1 ? "▲" : "▼"}</Styled.ToggleButton>
                    </Styled.SectionHeader>
                    {openSection === 1 && (
                        <Styled.TermsContent>
                            본 애플리케이션은 회원가입, 고객상담, 서비스 신청 등 원활한 서비스 제공을 위해 아래와 같은
                            개인정보를 수집하고 있습니다.
                            <ul>
                                <li>필수 항목: 이름, 이메일 주소, 비밀번호, 연락처(전화번호)</li>
                                <li>선택 항목: 생년월일, 성별, 주소</li>
                                <li>자동 수집 항목: IP 주소, 쿠키, 방문 기록, 서비스 이용 기록 등</li>
                            </ul>
                        </Styled.TermsContent>
                    )}
                </Styled.TermsContainer>

                <Styled.TermsContainer onClick={handleContainerClick(2)}>
                    <Styled.SectionHeader>
                        2. 개인정보의 수집 및 이용 목적
                        <Styled.ToggleButton>{openSection === 2 ? "▲" : "▼"}</Styled.ToggleButton>
                    </Styled.SectionHeader>
                    {openSection === 2 && (
                        <Styled.TermsContent>
                            본 애플리케이션은 수집한 개인정보를 다음의 목적을 위해 활용합니다.
                            <ul>
                                <li>서비스 제공 및 운영: 회원관리, 서비스 제공, 콘텐츠 제공, 본인인증, 연령 확인</li>
                                <li>고객 관리: 민원 처리, 공지사항 전달</li>
                                <li>마케팅 및 광고: 이벤트 정보 제공, 맞춤형 광고 제공</li>
                            </ul>
                        </Styled.TermsContent>
                    )}
                </Styled.TermsContainer>

                <Styled.TermsContainer onClick={handleContainerClick(3)}>
                    <Styled.SectionHeader>
                        3. 개인정보의 보유 및 이용 기간
                        <Styled.ToggleButton>{openSection === 3 ? "▲" : "▼"}</Styled.ToggleButton>
                    </Styled.SectionHeader>
                    {openSection === 3 && (
                        <Styled.TermsContent>
                            원칙적으로, 개인정보의 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
                            다만, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.
                            <ul>
                                <li>관련 법령에 의한 보존 정보</li>
                                <li>
                                    계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래 등에서의 소비자보호에 관한 법률)
                                </li>
                                <li>
                                    소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래 등에서의 소비자보호에 관한
                                    법률)
                                </li>
                                <li>로그 기록: 3개월 (통신비밀보호법)</li>
                            </ul>
                        </Styled.TermsContent>
                    )}
                </Styled.TermsContainer>

                <Styled.TermsContainer onClick={handleContainerClick(4)}>
                    <Styled.SectionHeader>
                        4. 개인정보의 제3자 제공
                        <Styled.ToggleButton>{openSection === 4 ? "▲" : "▼"}</Styled.ToggleButton>
                    </Styled.SectionHeader>
                    {openSection === 4 && (
                        <Styled.TermsContent>
                            본 애플리케이션은 사용자의 동의 없이는 원칙적으로 개인정보를 외부에 제공하지 않습니다. 다만,
                            아래의 경우는 예외로 합니다.
                            <ul>
                                <li>사용자가 사전에 동의한 경우</li>
                                <li>
                                    법령의 규정에 의하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의
                                    요구가 있는 경우
                                </li>
                            </ul>
                        </Styled.TermsContent>
                    )}
                </Styled.TermsContainer>

                <Styled.TermsContainer onClick={handleContainerClick(5)}>
                    <Styled.SectionHeader>
                        5. 개인정보의 파기 절차 및 방법
                        <Styled.ToggleButton>{openSection === 5 ? "▲" : "▼"}</Styled.ToggleButton>
                    </Styled.SectionHeader>
                    {openSection === 5 && (
                        <Styled.TermsContent>
                            본 애플리케이션은 원칙적으로 개인정보 처리 목적이 달성된 경우에는 지체 없이 해당 개인정보를
                            파기합니다. 파기 절차 및 방법은 다음과 같습니다.
                            <ul>
                                <li>
                                    파기 절차: 사용자가 입력한 정보는 목적 달성 후 별도의 DB로 옮겨져 내부 방침 및 기타
                                    관련 법령에 따라 일정 기간 저장된 후 파기됩니다.
                                </li>
                                <li>
                                    파기 방법: 전자적 파일 형태로 저장된 개인정보는 복구할 수 없는 기술적 방법을
                                    사용하여 삭제하며, 종이로 출력된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.
                                </li>
                            </ul>
                        </Styled.TermsContent>
                    )}
                </Styled.TermsContainer>

                <Styled.TermsContainer onClick={handleContainerClick(6)}>
                    <Styled.SectionHeader>
                        6. 개인정보의 안전성 확보 조치
                        <Styled.ToggleButton>{openSection === 6 ? "▲" : "▼"}</Styled.ToggleButton>
                    </Styled.SectionHeader>
                    {openSection === 6 && (
                        <Styled.TermsContent>
                            본 애플리케이션은 개인정보 보호를 위해 다음과 같은 안전성 확보 조치를 취하고 있습니다.
                            <ul>
                                <li>
                                    개인정보 암호화: 사용자의 개인정보는 암호화되어 저장 및 관리되고 있으며, 중요한
                                    데이터는 전송 시에도 별도의 보안 기능을 사용하고 있습니다.
                                </li>
                                <li>
                                    해킹 등에 대비한 대책: 백신 프로그램을 주기적으로 업데이트하며 외부로부터 접근이
                                    통제된 구역에 시스템을 설치하여 해킹이나 바이러스 등에 의한 개인정보 유출을 방지하고
                                    있습니다.
                                </li>
                            </ul>
                        </Styled.TermsContent>
                    )}
                </Styled.TermsContainer>

                <Styled.TermsContainer onClick={handleContainerClick(7)}>
                    <Styled.SectionHeader>
                        7. 사용자 및 법정대리인의 권리와 그 행사 방법
                        <Styled.ToggleButton>{openSection === 7 ? "▲" : "▼"}</Styled.ToggleButton>
                    </Styled.SectionHeader>
                    {openSection === 7 && (
                        <Styled.TermsContent>
                            사용자 및 법정대리인은 언제든지 등록된 자신의 개인정보를 조회하거나 수정할 수 있으며, 가입
                            해지를 요청할 수 있습니다.
                        </Styled.TermsContent>
                    )}
                </Styled.TermsContainer>

                <Styled.TermsContainer onClick={handleContainerClick(8)}>
                    <Styled.SectionHeader>
                        8. 개인정보 보호책임자
                        <Styled.ToggleButton>{openSection === 8 ? "▲" : "▼"}</Styled.ToggleButton>
                    </Styled.SectionHeader>
                    {openSection === 8 && (
                        <Styled.TermsContent>
                            본 애플리케이션은 사용자의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여
                            아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                            <ul>
                                <li>개인정보 보호책임자</li>
                                <li>이름: [이름]</li>
                                <li>연락처: [전화번호]</li>
                                <li>이메일: [이메일 주소]</li>
                            </ul>
                        </Styled.TermsContent>
                    )}
                </Styled.TermsContainer>

                <Styled.TermsContainer onClick={handleContainerClick(9)}>
                    <Styled.SectionHeader>
                        9. 개인정보 처리방침 변경
                        <Styled.ToggleButton>{openSection === 9 ? "▲" : "▼"}</Styled.ToggleButton>
                    </Styled.SectionHeader>
                    {openSection === 9 && (
                        <Styled.TermsContent>
                            이 개인정보 처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및
                            정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
                            <ul>
                                <li>시행일: [시행일자]</li>
                            </ul>
                        </Styled.TermsContent>
                    )}
                </Styled.TermsContainer>
            </Styled.RuleDescriptionContainer>
            <Styled.ButtonContainer>
                <Styled.CompleteButton disabled={!isButtonEnabled} onClick={handleComplete}>
                    가입 신청하기
                </Styled.CompleteButton>
            </Styled.ButtonContainer>
        </Styled.Container>
    );
}
