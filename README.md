# Issue Tracker

## 📌 Project Overview
This is a **full-stack Issue Tracking System** built with:

- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Frontend:** React (Vite), Axios, React Router
- **Database:** MongoDB (Mongoose ORM)

## 🚀 Features
- Manage Issues (Create, Update, Delete)
- Assign Issues to Employees
- Track Issue Status
- Manage Employees & Customers

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js, Mongoose
- **Frontend:** React (Vite), React Router, Axios
- **Database:** MongoDB
- **Tools:** Nodemon, Dotenv, Cors

---

## 🏗️ Setup Instructions

### **1️⃣ Backend Setup**
#### **Prerequisites:**
- Install [Node.js](https://nodejs.org/)
- Install [MongoDB](https://www.mongodb.com/try/download/community)

#### **Steps to Run Backend**
```bash
# Clone the repository
git clone https://github.com/Akashkilledar/Issue-Tracking-System.git
cd issue-tracker/backend

# Install dependencies
npm install

# Start the server
npm run dev
```

#### **Environment Variables (`.env` file)**
Create a `.env` file in the backend root and add:
```
MONGO_URI=your-mongodb-connection-string
PORT=5000
```

#### **Backend Folder Structure**
```
/backend
  ├── /models
  │   ├── Employee.js
  │   ├── Customer.js
  │   ├── Issue.js
  ├── /routes
  │   ├── employees.js
  │   ├── customers.js
  │   ├── issues.js
  ├── index.js
  ├── package.json
```

---

### **2️⃣ Frontend Setup**
#### **Steps to Run Frontend**
```bash
cd ../frontend  # Move to the frontend folder

# Install dependencies
npm install

# Start the React app
npm run dev
```

#### **Frontend Folder Structure**
```
/frontend
  ├── /src
  │   ├── /components
  │   │   ├── Dashboard.jsx
  │   │   ├── Employees.jsx
  │   │   ├── Customers.jsx
  │   │   ├── Header.jsx
  │   │   ├── Footer.jsx
  │   │   ├── Issues.jsx
  │   ├── App.jsx
  │   ├── main.jsx
  ├── package.json
  ├── vite.config.js
```

---

## 🔗 API Endpoints
| Method | Endpoint            | Description |
|--------|--------------------|-------------|
| GET    | /api/employees     | Get all employees |
| GET    | /api/employees/:id | Get employee by ID |
| POST   | /api/employees     | Add new employee |
| PUT    | /api/employees/:id | Update employee |
| DELETE | /api/employees/:id | Delete employee |
| GET    | /api/customers     | Get all customers |
| POST   | /api/customers     | Add new customer |
| GET    | /api/issues        | Get all issues |
| POST   | /api/issues        | Create new issue |
| PUT    | /api/issues/:id    | Update issue |
| DELETE | /api/issues/:id    | Delete issue |

---

## 🎯 Future Enhancements
- Role-based access control (Admin & Employees)
- Advanced filtering & search
- Email notifications for assigned issues

---

## 🙌 Contributing
Feel free to contribute by creating a pull request! 🚀

---

## 📝 License
This project is licensed under the MIT License.

