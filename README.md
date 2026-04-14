🧮 Calculator App (Full Stack)

A full-stack calculator application with a simple UI and a backend API that stores calculation history in MongoDB.

 🚀 Tech Stack
Frontend
* HTML
* CSS
* JavaScript

Backend
* Node.js (Express)
* server.js

Database
* MongoDB Atlas

DevOps / Tools
* Docker
* AWS ECR (for container images)
  
✨ Features
* Perform basic calculations (add, subtract, multiply, divide)
* Store calculation history in database
* REST API for handling calculations
* Dockerized frontend & backend
* Cloud integration (AWS ECR)

 Project Structure

```
calculator-project/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   └── package.json
│
└── README.md
```

 ⚙️ Installation & Setup
 1. Clone the repository

```bash
git clone https://github.com/MaryEdlynA19/calculator-project.git
cd calculator-project
```

 2. Backend Setup

```bash
cd backend
npm install
node server.js
```

Server runs on:

```
http://localhost:5000
```
3. Frontend Setup
Open `index.html` directly in your browser
OR use Live Server (recommended)

🐳 Docker Setup
Build and run containers:

```bash
docker build -t calculator-backend ./backend
docker build -t calculator-frontend ./frontend

docker run -p 5000:5000 calculator-backend
docker run -p 3000:80 calculator-frontend
```

☁️ AWS ECR
Docker images are pushed to AWS ECR:

* calculator-backend
* calculator-frontend

🗄️ Database (MongoDB)
* MongoDB Atlas is used
* Stores:
  * expression
  * result
  * timestamp
    
🤝 Contributing
Contributions are welcome! Feel free to fork and submit a pull request.

📄 License

This project is open-source and available under the MIT License.

👤 Author

GitHub: [MaryEdlynA19](https://github.com/MaryEdlynA19)
