package types2

type Block struct {
	PreviousHash  string `bson:"previous_hash"`
	Timestamp     int64  `bson:"timestamp"`
	TransactionID int64  `bson:"transaction_id"`
	Hash          string `bson:"hash"`
}

type Transaction struct {
	ID            int64  `bson:"id"`
	ApartmentInfo string `bson:"apartment_info"`
	DefectInfo    string `bson:"defect_info"`
	Applicant     string `bson:"applicant"`
	Approver      string `bson:"approver"`
}
