package main

import (
	"isReal/app"
	"isReal/env"
)

func main() {
	env.ConnectDB()
	application := app.NewApp()
	application.Run()
}
