package service

import (
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"time"

	"isReal/repo"
	"isReal/types2"
)

type BlockchainService struct {
	repo *repo.BlockchainRepo
}

func NewBlockchainService(repo *repo.BlockchainRepo) *BlockchainService {
	return &BlockchainService{repo: repo}
}

func (service *BlockchainService) calculateHash(block types2.Block, applicant string, approver string, defect string) string {
	record := fmt.Sprintf("%s%d%d",
		block.PreviousHash,
		block.Timestamp,
		block.TransactionID,
		applicant,
		approver,
		defect)
	h := sha256.New()
	h.Write([]byte(record))
	hashed := h.Sum(nil)
	return hex.EncodeToString(hashed)
}

func (service *BlockchainService) CreateBlock(previousHash string, transactionID int64, applicant string, approver string, defect string) types2.Block {
	block := types2.Block{
		PreviousHash:  previousHash,
		Timestamp:     time.Now().Unix(),
		TransactionID: transactionID,
	}
	block.Hash = service.calculateHash(block, applicant, approver, defect)
	return block
}

func (service *BlockchainService) AddBlock(transactions types2.Transaction) error {
	// 트랜잭션을 먼저 저장하고 ID를 받음
	transactionID, err := service.repo.AddTransaction(transactions)
	if err != nil {
		return err
	}

	// 블록을 저장
	blocks, err := service.repo.GetBlocks()
	if err != nil {
		return err
	}
	var previousHash string
	if len(blocks) > 0 {
		previousHash = blocks[len(blocks)-1].Hash
	} else {
		previousHash = "0"
	}

	newBlock := service.CreateBlock(previousHash, transactionID, transactions.Applicant, transactions.Approver, transactions.DefectInfo)
	return service.repo.AddBlock(newBlock)
}

func (service *BlockchainService) GetBlockchain() ([]types2.Block, error) {
	return service.repo.GetBlocks()
}

func (service *BlockchainService) GetTransactions() ([]types2.Transaction, error) {
	return service.repo.GetTransactions()
}
