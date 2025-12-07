# Task Submission Project

This repository contains a full-stack application with a Spring Boot backend and a React (Vite) frontend.

## Project Structure

- `backend/`: Java Spring Boot application (API)
- `frontend/`: React + TypeScript application (UI)

## Prerequisites

- Java 17 or higher
- Node.js (v18 or higher recommended) and npm

## Setup & Running

### Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Build the project:
   ```bash
   mvn clean install
   ```
3. Run the application:
   ```bash
   mvn spring-boot:run
   ```
The backend API will start on the default port (usually http://localhost:8080).
Swagger UI is available at: http://localhost:8080/swagger-ui.html

### Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
The frontend application will normally run at http://localhost:5173 (check the console output for the exact URL).
