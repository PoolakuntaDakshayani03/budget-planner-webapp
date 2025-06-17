# budget-planner



# 💸 Vue Budget Planner

Welcome to **Vue Budget Planner**, a full-featured web application that helps users **manage their finances** by tracking income, expenses, and savings goals. Built with a modern tech stack including Vue 3, Firebase, Tailwind CSS, and Chart.js, this application is designed to be **fast, responsive, and intuitive** for daily budgeting.

🌐 **Live App**: [https://vue-budget-planner.web.app](https://vue-budget-planner.web.app)

---

## 🎯 Project Motivation

Managing personal finances can be overwhelming without the right tools. Spreadsheets can get messy, and most apps either lack customization or charge a premium. This project was created to offer a **clean, free, and user-friendly budget management tool** using open web technologies.

---

## 🧩 Key Features

### 🔐 User Authentication
- Register and log in securely using Firebase Authentication
- Personalized dashboard and data persistence per user

### ➕ Add Transactions
- Add **income** or **expense** entries with description and amount
- Input validation and real-time updates

### 🧾 Transaction List
- View your recent income and expenses in a clean list
- Sorted by date and updated in real-time using Firestore listeners

### 📊 Charts and Visualizations
- Interactive **Pie Chart** showing income vs expenses
- **Bar Chart** showing breakdown by transaction type or category (if extended)
- Charts update instantly with your transaction data

### 🎯 Savings Goals
- Set a savings target and track your progress
- Automatically calculates percentage saved

### 💅 Clean and Responsive Design
- Built with Tailwind CSS for a modern and minimal UI
- Responsive across mobile, tablet, and desktop

---

## 🧪 Tech Stack

| Technology       | Purpose                            |
|------------------|------------------------------------|
| **Vue 3**        | Frontend framework (Composition API) |
| **Firebase**     | Authentication, Firestore, Hosting |
| **Tailwind CSS** | Utility-first CSS for styling      |
| **Chart.js**     | Data visualization (charts)        |
| **Vite**         | Lightning-fast build tool          |

---

## 🔧 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/vue-budget-planner.git
cd vue-budget-planner


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
