import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import EventsListPage from "./pages/EventsListPage";
import EventsPage from "./pages/EventsPage";
import CurrentUserPage from "./pages/CurrentUserPage";
import AdminPage from "./pages/admin/AdminPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/admin/events" element={<AdminPage />}></Route>

          <Route path="/" element={<Homepage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/all-events" element={<EventsListPage />}></Route>
          <Route path="/all-events/:id" element={<EventsPage />}></Route>
          <Route path="/my-profile" element={<CurrentUserPage />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
