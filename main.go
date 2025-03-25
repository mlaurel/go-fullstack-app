package main

import (
	"log"
	"net/http"

	"mlaurel.dev/movies/logger"
)

func main() {
	// Initialize logger
	logInstance := initializeLogger()

	// Serve static files
	http.Handle("/", http.FileServer(http.Dir("./public")))

	// Start server
	const addr = ":8080"
	logInstance.Info("Server starting on " + addr)
	if err := http.ListenAndServe(addr, nil); err != nil {
		logInstance.Error("Server failed to start", err)
		log.Fatalf("Server failed: %v", err)
	}
}

func initializeLogger() *logger.Logger {
	logInstance, err := logger.NewLogger("movie-service.log")
	if err != nil {
		log.Fatalf("Failed to Initialize logger: %v", err)
	}
	defer logInstance.Close()
	return logInstance
}
