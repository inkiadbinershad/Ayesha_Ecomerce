# Aysha_Ecomerce

This repository is a clean **MERN** stack application with separate `frontend` and `backend` folders.

## 📁 Final Folder Structure

```
Aysha_Ecomerce/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── contactController.js
│   ├── models/
│   │   └── Inquiry.js
│   ├── routes/
│   │   └── contactRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── translations/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
└── README.md
```

> **Note:** the root folder no longer contains a React application; the only two subprojects are
> `frontend` (Vite/React) and `backend` (Express/Mongoose).

---

## 🚀 Getting Started

### Backend

```bash
cd backend
npm install      # install dependencies
npm run dev      # nodemon (optional)
# or simply
node server.js   # starts on port 5000 by default
```

The backend exposes a single route `POST /api/contact` that saves inquiries with fields
`name`, `email`, `message` and an automatic `visitedAt` timestamp.

Modify `backend/.env` to configure `MONGO_URI` and other environment variables.

### Frontend

```bash
cd frontend
npm install
npm run dev      # starts Vite development server
```

The UI uses React + TailwindCSS, includes dark/light mode, language toggle (EN/AR),
sticky navbar & footer, and a contact form that submits to the backend.

---

## 🛠 Additional Notes

* Backend dependencies: `express`, `mongoose`, `dotenv`, `cors`.
* Frontend dependencies: `react`, `react-dom`, `react-router-dom`, `axios`,
  plus Vite and Tailwind-related packages.
* Production builds:
  * Frontend: `npm run build` inside `frontend`.
  * Backend: run with a process manager or container using `node server.js`.

Happy coding! 🎯