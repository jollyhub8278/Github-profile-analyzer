# GitHub Profile Analyzer API

A backend REST API built using Node.js, Express.js, MySQL, and the GitHub Public API that analyzes GitHub user profiles and stores useful insights in a MySQL database.

---

## Objective

The objective of this project is to build a backend service that:

* Fetches public GitHub profile data using a username
* Analyzes useful profile insights
* Stores analyzed data in MySQL
* Provides APIs to retrieve stored profile data

---

## Tech Stack

* Node.js
* Express.js
* MySQL
* GitHub Public API

---

## Features

### 1. Analyze GitHub Profile

Fetches public GitHub profile data using the GitHub API.

### 2. Store Useful Insights

Stores useful profile insights such as:

* Username
* Name
* Bio
* Public Repository Count
* Followers Count
* Following Count
* Account Creation Date
* Profile URL
* Avatar URL

### 3. MySQL Database Integration

All analyzed profile data is stored in a MySQL database.

### 4. Fetch All Stored Profiles

Provides an API endpoint to fetch all stored analyzed profiles.

### 5. Fetch Single Profile

Provides an API endpoint to fetch details of a single analyzed profile.

---

# Project Structure

```bash
github-profile-analyzer/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── githubController.js
│
├── routes/
│   └── githubRoutes.js
│
├── services/
│   └── githubService.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

# Installation and Setup

## 1. Clone Repository

```bash
git clone <your-github-repository-link>
```

## 2. Navigate to Project Folder

```bash
cd github-profile-analyzer
```

## 3. Install Dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=github_analyzer
```

---

# Database Setup

## Create Database

```sql
CREATE DATABASE github_analyzer;
```

## Use Database

```sql
USE github_analyzer;
```

## Create Table

```sql
CREATE TABLE github_profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    name VARCHAR(255),
    bio TEXT,
    public_repos INT,
    followers INT,
    following INT,
    account_created DATE,
    profile_url TEXT,
    avatar_url TEXT,
    analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# Running the Server

Start the backend server:

```bash
node server.js
```

Server will run on:

```bash
http://localhost:5000
```

---

# API Endpoints

## Home Route

```http
GET /
```

Response:

```json
GitHub Profile Analyzer API is running
```

---

## Analyze GitHub Profile

```http
GET /api/github/analyze/:username
```

Example:

```http
GET /api/github/analyze/jollyhub8278
```

---

## Fetch All Stored Profiles

```http
GET /api/github/profiles
```
<img width="500" height="575" alt="image" src="https://github.com/user-attachments/assets/ae36d5b3-9b98-45f9-bead-020d97dd452b" />

---

## Fetch Single Profile

```http
GET /api/github/profiles/:username
```

Example:

```http
GET /api/github/profiles/jollyhub8278
```
<img width="400" height="250" alt="image" src="https://github.com/user-attachments/assets/2cd2305f-086f-4658-aba6-efc2f73049c9" />

---

# Deployment

The API is deployed on Render.

Live API URL:

```bash
https://github-profile-analyzer-5bu0.onrender.com/
```
<img width="420" height="256" alt="image" src="https://github.com/user-attachments/assets/aab22e01-b391-44f1-9f42-95c4672788b0" />

Example API Request:

```bash
https://github-profile-analyzer-5bu0.onrender.com/api/github/analyze/octocat
```
---

# Future Improvements

* Repository analytics
* Most used programming language detection
* Total stars calculation
* GitHub scoring/ranking system
* Pagination support
* Search functionality
* Swagger API documentation
* JWT Authentication
* Docker support

---

# Author

Bharti Jangir
IIT Guwahati
