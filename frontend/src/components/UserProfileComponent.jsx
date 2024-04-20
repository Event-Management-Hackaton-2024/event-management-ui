import React, { useState, useEffect } from "react";
import { getUserInfo, getToken } from "./authAPI";

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = getToken();
        if (token) {
          const user = await getUserInfo(token);
          setUserInfo(user);
        }
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      {userInfo ? (
        <div>
          <p>Name: {userInfo.name}</p>
          <p>Email: {userInfo.email}</p>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
};

export default UserProfile;
