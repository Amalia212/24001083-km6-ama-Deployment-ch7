import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Mengimpor Navigate dari react-router-dom

const WelcomeMessage = () => {
  const [userData, setUserData] = useState(null);
  const [showDetails, setShowDetails] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Token not found");
      return null;
    }

    try {
      const response = await axios.get(
        "https://shy-cloud-3319.fly.dev/api/v1/auth/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      if (error.response) {
        if (error.response.status === 401) {
          setError("Unauthorized: Invalid or expired token");
        } else {
          setError(
            `Error: ${error.response.status} - ${error.response.data.message}`
          );
        }
      } else if (error.request) {
        setError("No response received from server");
      } else {
        setError(`Error: ${error.message}`);
      }
      return null;
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      const data = await fetchUserData();
      if (data) {
        console.log("Fetched user data:", data);
        setUserData(data);
      }
    };

    getUserData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full mx-auto">
        {error ? (
          <div className="text-center text-red-500">
            <p>Error: {error}</p>
          </div>
        ) : (
          <div className="text-center">
            {userData && (
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  Welcome, {userData.data.name}!
                </h1>
                <div className="border-4 border-yellow-600 rounded-lg p-6 mt-4 shadow-md bg-gradient-to-br from-yellow-200 to-yellow-300">
                  <div className="flex justify-start">
                    <div className="w-full">
                      <h2 className="text-xl font-bold mb-2 text-gray-800">
                        Your Profile Details
                      </h2>
                      <p className="text-lg text-gray-700 mb-2">
                        <strong>Name:</strong> {userData.data.name}
                      </p>
                      <p className="text-lg text-gray-700">
                        <strong>Email:</strong> {userData.data.email}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  Thank you for joining our community! We are excited to have
                  you on board. Feel free to explore and enjoy all the features
                  we offer. If you have any questions or need assistance, don't
                  hesitate to reach out to us.
                </p>
              </div>
            )}
            <button
              className="mt-4 bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => navigate("/")}
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WelcomeMessage;
