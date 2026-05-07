import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';
import ScrollToTop from './components/ScrollToTop';
import { AuthProvider } from './contexts/AuthContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import HostelListingsPage from './pages/HostelListingsPage.jsx';
import HostelDetailPage from './pages/HostelDetailPage.jsx';
import BookingPage from './pages/BookingPage.jsx';
import ReviewsPage from './pages/ReviewsPage.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/hostels" element={<HostelListingsPage />} />
              <Route path="/hostels/:id" element={<HostelDetailPage />} />
              
              <Route path="/booking/:hostelId" element={
                <ProtectedRoute>
                  <BookingPage />
                </ProtectedRoute>
              } />
              
              <Route path="/reviews/:hostelId" element={<ReviewsPage />} />
              
              <Route path="/admin" element={
                <ProtectedRoute requireAdmin={true}>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
              
              <Route path="*" element={
                <div className="container mx-auto px-4 py-20 text-center">
                  <h1 className="text-4xl font-bold mb-4">404</h1>
                  <p>Page not found.</p>
                </div>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster position="top-center" />
      </Router>
    </AuthProvider>
  );
}

export default App;