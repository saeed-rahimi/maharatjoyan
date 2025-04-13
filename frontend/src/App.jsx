import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import RegisterClient from "./pages/RegisterClient";
import RegisterProfessional from "./pages/RegisterProfessional";
import ClientDashboard from "./pages/ClientDashboard";
import ProfessionalDashboard from "./pages/ProfessionalDashboard";
import Unauthorized from "./pages/Unauthorized";

// Component to handle redirection based on user type after login
const DashboardRedirect = () => {
  const { user } = useAuth();
  if (!user) {
    // Should ideally not happen if ProtectedRoute is used, but as a fallback
    return <Navigate to="/login" replace />;
  }
  // Redirect based on userType stored in the user object from AuthContext
  return <Navigate to={`/dashboard/${user.userType}`} replace />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register-client" element={<RegisterClient />} />
              <Route path="/register-professional" element={<RegisterProfessional />} />
              <Route path="/unauthorized" element={<Unauthorized />} />

              {/* Protected Routes */}
              <Route
                path="/dashboard/client"
                element={
                  <ProtectedRoute allowedUserTypes={["client"]}>
                    <ClientDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/professional"
                element={
                  <ProtectedRoute allowedUserTypes={["professional"]}>
                    <ProfessionalDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Redirect logic for /dashboard */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    {/* Render the redirect component */}
                    <DashboardRedirect />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
