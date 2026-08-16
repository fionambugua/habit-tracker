#  HabitBloom - Habit Tracker

HabitBloom is a beginner-friendly React Single Page Application (SPA) designed to help users create, manage, and track their daily habits.

The application allows users to add habits, view their habits, search through them, mark habits as completed, delete habits, and view individual habit details.

The project was developed as a group project to demonstrate practical understanding of React components, state management, React Hooks, Context API, Custom Hooks, and client-side routing.

---

## Project Authors
- Fiona Mbugua
-Jeff Kibet
-Victor Boiwo

##  Project Overview

Building positive habits requires consistency and a simple way to track progress.

HabitBloom provides users with a central place to:

- Create new habits
- View existing habits
- Search for habits
- Mark habits as completed
- Delete habits
- View individual habit details
- Monitor daily progress
- Navigate between different pages without refreshing the browser

The application is built as a **Single Page Application (SPA)** using React and React Router.

---

##  Features

###  Dashboard

The Home page provides an overview of the user's habits and progress.

Users can see:

- Welcome message
- Number of completed habits
- Habit summary

---

###  Add a Habit

Users can create a new habit by providing:

- Habit name
- Description
- Frequency

The form includes basic validation to ensure all required fields are completed.

---

###  Habit Management

Users can:

- View all habits
- Search for habits
- Mark habits as completed
- Delete habits

---

###  Search

The habit management page includes a search feature that allows users to filter habits by name.

---

###  Habit Details

Users can select a habit and view its individual details.

---

###  Client-Side Routing

React Router is used to navigate between different views without refreshing the browser.

The application includes routes for:

- Home
- About
- My Habits
- Add Habit
- Habit Details

---

###  Responsive Design

The application uses CSS to provide a clean and responsive interface that works across different screen sizes.

---

#  Technologies Used

- React
- JavaScript
- HTML
- CSS
- React Router
- Context API
- React Hooks
- Git
- GitHub
- Vite

---

#  Project Structure

```text
habit-tracker/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── HabitCard.jsx
│   │   ├── HabitList.jsx
│   │   ├── Navbar.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── context/
│   │   └── HabitContext.jsx
│   │
│   ├── hooks/
│   │   └── UseHabits.js
│   │
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── AddHabit.jsx
│   │   ├── Habit.jsx
│   │   ├── HabitDetails.jsx
│   │   └── Home.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md