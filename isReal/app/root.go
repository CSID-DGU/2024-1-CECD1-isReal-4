package app

import (
	"bufio"
	"fmt"
	"log"
	"os"

	"isReal/repo"
	"isReal/service"
	"isReal/types2"
)

type App struct {
	blockchainService *service.BlockchainService
}

func NewApp() *App {
	blockchainRepo := repo.NewBlockchainRepo()
	blockchainService := service.NewBlockchainService(blockchainRepo)
	return &App{blockchainService: blockchainService}
}

func (app *App) Run() {
	reader := bufio.NewReader(os.Stdin)

	fmt.Println("아파트 정보를 입력하세요:")
	apartmentInfo, _ := reader.ReadString('\n')
	apartmentInfo = apartmentInfo[:len(apartmentInfo)-1] // 개행 문자 제거

	fmt.Println("결함 정보를 입력하세요:")
	defectInfo, _ := reader.ReadString('\n')
	defectInfo = defectInfo[:len(defectInfo)-1] // 개행 문자 제거

	fmt.Println("신청자 이름을 입력하세요:")
	applicant, _ := reader.ReadString('\n')
	applicant = applicant[:len(applicant)-1] // 개행 문자 제거

	fmt.Println("승인자 이름을 입력하세요:")
	approver, _ := reader.ReadString('\n')
	approver = approver[:len(approver)-1] // 개행 문자 제거

	// 입력 받은 정보를 바탕으로 트랜잭션 생성
	transaction := types2.Transaction{
		ApartmentInfo: apartmentInfo,
		DefectInfo:    defectInfo,
		Applicant:     applicant,
		Approver:      approver,
	}

	// 블록 추가
	err := app.blockchainService.AddBlock(transaction)
	if err != nil {
		log.Fatal(err)
	}

	// 블록체인 조회
	blocks, err := app.blockchainService.GetBlockchain()
	if err != nil {
		log.Fatal(err)
	}

	for _, block := range blocks {
		fmt.Printf("Block: %+v\n", block)
	}

	// 트랜잭션 조회
	transactions, err := app.blockchainService.GetTransactions()
	if err != nil {
		log.Fatal(err)
	}

	for _, transaction := range transactions {
		fmt.Printf("Transaction: %+v\n", transaction)
	}
}
