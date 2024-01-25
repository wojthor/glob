import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import TripPage from "./pages/TripPage";
import Contact from "./pages/Contact";
import { QueryClientProvider, QueryClient } from "react-query";
import Page from "./components/Page";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trips" element={<HomePage />} />
          <Route path="/holidays" element={<HomePage />} />
          <Route path="/pilgrimages" element={<HomePage />} />
          <Route path="/trip/:tripId" element={<TripPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/play" element={<Page />} />
        </Routes>
      </Router>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
