import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import AddHabit from "./pages/AddHabit";
import Habit from "./pages/Habit";
import HabitDetails from "./pages/HabitDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/habits" element={<Habit />} />
        <Route path="/habits/new" element={<AddHabit />} />
        <Route path="/habits/:id" element={<HabitDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;