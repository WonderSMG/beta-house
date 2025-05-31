import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Check user login status on initial load
  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        setIsLoading(true);

        const token = localStorage.getItem("customerToken");

        if (!token) {
          setUser(null);
          return;
        }

        const response = await fetch(`http://localhost:4040/api/auth/isloggedin`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await response.json();

        if (!data.success) {
          localStorage.removeItem("customerToken");
          setUser(null);
        } else {
          setUser({ token, ...data.user });
        }
      } catch (error) {
        console.error("Error checking user status:", error);
        localStorage.removeItem("customerToken");
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkUserStatus();
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const response = await fetch(`http://localhost:4040/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("customerToken", data.token);
        setUser({ firstName: data.user.firstName, token: data.token });
        return { success: true };
      } else {
        throw new Error(data.errMsg || "Login failed");
      }
    } catch (error) {
      console.error("Error in login:", error);
      return { success: false, error: error.message };
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("customerToken");
    setUser(null);
  };

  // Sign-up function (optional, if needed for direct integration)
  const signUp = async (formData) => {
    try {
      const response = await fetch(`http://localhost:4040/api/auth/sign-up`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("customerToken", data.token);
        setUser({ firstName: data.user.firstName, token: data.token });
        return { success: true };
      } else {
        throw new Error(data.errMsg || "Sign-up failed");
      }
    } catch (error) {
      console.error("Error in sign-up:", error);
      return { success: false, error: error.message };
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};