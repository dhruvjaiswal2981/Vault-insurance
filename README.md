# Vault Website with Admin Panel

A Vault insurance website built using React, featuring user-facing pages and an admin dashboard for managing contact messages. The project includes:

1. **Vault Website** – Displays sections like Hero, Insurance, Core Values, About, Statistics, Contact, etc.
2. **Admin Panel** – A protected dashboard where the admin can log in and fetch contact form submissions from the backend API.

---

## ✨ Features

- Public website layout with components:
  - Header
  - Hero Section
  - Insurance Sections
  - Core Values
  - About Us
  - Statistics
  - Contact Form
  - Footer
  - LifeInsurance
  - HealthInsurance
  - VehicleInsurance
  - BusinessInsurance
- Admin Login Page (`/admin`)
- Admin Dashboard (`/admin/dashboard`) with:
  - Hardcoded credentials (`Admin / admin@123`)
  - Fetches contact form data from backend (`http://localhost:5000/api/contact`)
  - Protected route access

---

## 📦 Technologies Used

- React JS
- React Router DOM
- Tailwind CSS
- NodeJs
- Sqlite
- Axios for API calls

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/dhruvjaiswal2981/Vault-insurance.git
cd Vault-insurance
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
Your app will be available at http://localhost:5173/ 

## 🔐 Admin Panel Access

### Credentials:

| Username | Password   |
| -------- | ---------- |
| Admin    | admin@123 |

### Routes:

1. /admin – Login page
2. /admin/dashboard – Dashboard (protected)

- If you try to access the dashboard without logging in, it redirects to the login page.

## 🛠 Folder Structure

```bash
src/
    ├── components/
    │   ├── Header.jsx
    │   ├── HeroSection.jsx
    │   ├── InsuranceSections.jsx
    │   ├── CoreValuesSection.jsx
    │   ├── About.jsx
    │   ├── Statistics.jsx
    │   ├── Contact.jsx
    │   └── Footer.jsx
    ├── pages/
    │   ├── LoginPage.jsx
    │   └── AdminDashboard.jsx
    │   ├── BusinessInsurance.jsx
    │   ├── HealthInsurance.jsx
    │   ├── LifeInsurance.jsx
    │   ├── NotFound.jsx
    │   └── VehicleInsurance.jsx
    ├── App.jsx
    ├── index.jsx
    └── App.css
```

## 🚀 Deployment

- Backend Deployment
    - Live Demo: The application is hosted on Render
    - Access it here: https://vault-insurance.onrender.com/api/contact

- Frontend Deployment
    - Live Demo: The application is hosted on Netlify.
    - Access it here: https://vault-dhruv.netlify.app/

## Live Demo
- Demo Video Link : https://drive.google.com/file/d/1go70SHkI6UgiwOmY5lhzYPDkmCw6lINx/view?usp=sharing

## 📌 Author

- 💻 Developed by Dhruv Jaiswal
- 🚀 Happy Coding! 🎉