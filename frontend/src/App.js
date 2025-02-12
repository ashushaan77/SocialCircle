import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from "./Authentication/LoginPage";
import Home from "./HomePage/Home";
import Profile from "./User/Profile";
import SignupPage from "./Authentication/SignupPage";
import AuthGuard from "./_helper/AuthGuard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/"
            element={
              <AuthGuard>
                <Home />
              </AuthGuard>
            }
          />
          <Route path="/:username" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
