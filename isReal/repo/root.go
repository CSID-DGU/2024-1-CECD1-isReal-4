package repo

import (
	"context"

	"isReal/env"
	"isReal/types2"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type BlockchainRepo struct {
	blockchainCollection  *mongo.Collection
	transactionCollection *mongo.Collection
}

func NewBlockchainRepo() *BlockchainRepo {
	return &BlockchainRepo{
		blockchainCollection:  env.GetCollection("block"),
		transactionCollection: env.GetCollection("transaction"),
	}
}

func (repo *BlockchainRepo) AddBlock(block types2.Block) error {
	_, err := repo.blockchainCollection.InsertOne(context.Background(), block)
	return err
}

func (repo *BlockchainRepo) GetBlocks() ([]types2.Block, error) {
	cursor, err := repo.blockchainCollection.Find(context.Background(), bson.D{})
	if err != nil {
		return nil, err
	}
	defer cursor.Close(context.Background())

	var blocks []types2.Block
	if err = cursor.All(context.Background(), &blocks); err != nil {
		return nil, err
	}
	return blocks, nil
}

func (repo *BlockchainRepo) AddTransaction(transaction types2.Transaction) (int64, error) {
	opts := options.FindOne().SetSort(bson.D{{"id", -1}})
	var lastTransaction types2.Transaction
	err := repo.transactionCollection.FindOne(context.Background(), bson.D{}, opts).Decode(&lastTransaction)
	if err != nil && err != mongo.ErrNoDocuments {
		return 0, err
	}

	newID := lastTransaction.ID + 1
	transaction.ID = newID
	_, err = repo.transactionCollection.InsertOne(context.Background(), transaction)
	if err != nil {
		return 0, err
	}
	return newID, nil
}

func (repo *BlockchainRepo) GetTransactions() ([]types2.Transaction, error) {
	cursor, err := repo.transactionCollection.Find(context.Background(), bson.D{})
	if err != nil {
		return nil, err
	}
	defer cursor.Close(context.Background())

	var transactions []types2.Transaction
	if err = cursor.All(context.Background(), &transactions); err != nil {
		return nil, err
	}
	return transactions, nil
}
