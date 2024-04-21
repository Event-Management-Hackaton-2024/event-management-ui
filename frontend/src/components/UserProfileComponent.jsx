import React, { useState, useEffect } from "react";
import { getUserInfo, getToken } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

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

  function handleUpdateProfile(email) {
    navigate(`/my-profile/update/${email}`);
  }

  return (
    <div className="m-3">
      <h2>Профил на потребителя</h2>
      <h5 className="m-3">
        Попълнете информацията си за да се свържете по лесно с правилните хора
      </h5>
      <div className="m-3">
        <p>Name: {userInfo?.name || ""}</p>
        <p>Last Name: {userInfo?.lastName || ""}</p>
        <p>Email: {userInfo?.email || ""}</p>
        <p>Skills: {userInfo?.skills?.join(", ") || ""}</p>
        <p>Followers: {userInfo?.followers?.join(", ") || ""}</p>
        <p>Phone number: {userInfo?.phoneNumber || ""}</p>

        <button className="btn btn-primary" onClick={() => handleUpdateProfile(userInfo?.email)}>
          Попълване на данни
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
