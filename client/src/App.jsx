import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Hero from "./features/Hero";
import Properties from "./pages/Properties";
import { AuthProvider } from "./Context/AuthContext";
import Footer from "./layouts/Footer";
import PopularProperties from "./components/PopularProperties";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";


function App() {
  const [searchCriteria, setSearchCriteria] = useState(null);

  const handleSearch = (criteria) => {
    setSearchCriteria(criteria);
  };

  return (
    <Router>
      <div className="hero-container">
        <Navbar />
        <Routes>
          {/* Home Page Route */}
          <Route
            path="/"
            element={
              <>
                <Hero onSearch={handleSearch} />
                <Properties searchCriteria={searchCriteria} />
                <PopularProperties />
              </>
            }
          />
          {/* Other Routes */}
          <Route path="/properties" element={<Properties searchCriteria={searchCriteria} />} />
          <Route path="/popular-properties" element={ <PopularProperties/> } />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={ <SignIn/> } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;