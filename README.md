
# MediCare App – Medication Management System 💊

This is the completed assignment for the Website Learners opportunity via the Nxtwave.

## 🚀 Live Deployment

- **Frontend:** [https://website-learner-assignment-medicare.vercel.app/](https://website-learner-assignment-medicare.vercel.app/)
- **Backend:** [https://website-learner-assignment-medicare-app.onrender.com/](https://website-learner-assignment-medicare-app.onrender.com/)

---

## 📦 Project Structure

```
MediCare-App/
├── client/    # React frontend
└── server/    # Node.js backend with SQLite (Prisma)
```

---

## 🔐 Features (Phase 1 Completed ✅)

### 1. Authentication (Backend only)
- `POST /auth/signup` → Create account
- `POST /auth/login` → Login and receive JWT

### 2. Medication Management
- `GET /medications` → View medications for logged-in user
- `POST /medications` → Add medication (name, dosage, frequency)
- `PUT /medications/:id/taken` → Mark medication as taken for the day

### 3. Dashboard Integration
- **Patient dashboard** connects to real backend and shows medications list

---

## 🛠️ Tech Stack

| Layer    | Technology           |
|----------|----------------------|
| Frontend | React, React Query   |
| Backend  | Node.js, Express     |
| Database | SQLite with Prisma   |
| Auth     | bcrypt, JWT          |
| Deploy   | Vercel (frontend), Render (backend) |

---

## 🧑‍💻 Local Setup Instructions

### ✅ Backend (`server/`)

```bash
cd server
npm install
npx prisma generate
npx prisma migrate dev --name init
node server.js
```

- Create `.env` file with:
```
DATABASE_URL="file:./dev.db"
JWT_SECRET="yoursecretkey"
```

### ✅ Frontend (`client/`)

```bash
cd client
npm install
npm start
```

Update Axios base URL to backend in `src/utils/api.js`:
```js
baseURL: "https://website-learner-assignment-medicare-app.onrender.com"
```

---

## 🧪 API Testing (Postman or Thunder Client)

### Signup
```
POST /auth/signup
{
  "username": "testuser",
  "password": "123456"
}
```

### Login
```
POST /auth/login
=> returns { token }
```

### Add Medication
```
POST /medications
Authorization: Bearer <token>
{
  "name": "Paracetamol",
  "dosage": "500mg",
  "frequency": "Once a day"
}
```

---

## 📄 Notes

- Only the **Patient Dashboard** is integrated with backend (as required).
- Authentication is implemented **on the backend only**.
- Frontend does not contain login/signup UI due to scope and time constraints.

---

## 📌 Submission Status

✅ Phase 1 requirements are 100% completed and deployed.  
Project ready for review and submission.

---

## 🧑‍🎓 Submitted By

**Jaya Krishna Vamsi Krishnamsetti**  
Via Nxtwave · Website Learners Assignment
