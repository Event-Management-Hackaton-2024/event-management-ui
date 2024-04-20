import React, { useState, useEffect } from "react";
import { updateUserProfile } from "../services/UserService";

import { useNavigate } from "react-router-dom";
import { getUserInfo, getToken } from "../services/AuthService";
import { getAllInterests } from "../services/InterestService";

const EditUserProfileComponent = ({ email }) => {
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = getToken();
        if (token) {
          const user = await getUserInfo(token);
          setUserData(user);
          getAllInterests().then((response) => {
            setSkills(response.data);
          });
        }
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSkillsChange = (e, index) => {
    const { value } = e.target;
    setUserData((prevUserData) => {
      const updatedSkills = [...prevUserData.skills];
      updatedSkills[index] = value;
      return {
        ...prevUserData,
        skills: updatedSkills,
      };
    });
  };

  const handleAddSkill = () => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      skills: [...prevUserData.skills, ""],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(email, userData);
      navigate(`/my-profile`);
    } catch (error) {
      console.error("Error updating user profile:", error);
      setError("Failed to update user profile");
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            disabled
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="skills" className="form-label">
            Skills
          </label>
          {skills.map((skill, index) => (
            <div key={index} className="d-flex">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Skill"
                value={skill.name}
                onChange={(e) => handleSkillsChange(e, index)}
              />
              {index === skills.length - 1 && (
                <button type="button" className="btn btn-outline-primary" onClick={handleAddSkill}>
                  Add Skill
                </button>
              )}
            </div>
          ))}
        </div>
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditUserProfileComponent;
