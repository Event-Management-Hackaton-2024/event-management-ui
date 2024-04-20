import React, { useState } from "react";
import { registerAPICall } from "../services/AuthService";
import "./StyleComponent.css";

const RegisterComponent = () => {
  const [name, setName] = useState("");
  const [surname, setSurame] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [nameError, setNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");
  const [userType, setUserType] = useState("user");

  function handleRegistrationForm(e) {
    e.preventDefault();

    if (!name) {
      setNameError("Име е задължително поле.");
      return;
    }
    if (!username) {
      setUsernameError("Потребителско име е задължително поле.");
      return;
    }
    if (!email) {
      setEmailError("Email е задължително поле.");
      return;
    }
    if (!password) {
      setPasswordError("Парола е задължително поле.");
      return;
    }
    if (password !== repeatPassword) {
      setRepeatPasswordError("Паролите не съвпадат.");
      return;
    }
    const endpoint = userType === "user" ? "addUser" : "addOrganization";

    const register = { username, email, password };

    //     registerAPICall(register)
    //       .then((response) => {
    //         console.log(response.data);
    //         setRegistrationStatus("success");
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //         setRegistrationStatus("error");
    //       });
  }
  return (
    <div className="container mb-4">
      <br /> <br />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">Регистрационна форма</h2>
            </div>

            {registrationStatus === "success" && (
              <div className="alert alert-success" role="alert">
                Успешна регистрация
              </div>
            )}

            {registrationStatus === "error" && (
              <div className="alert alert-danger" role="alert">
                Неуспешна регистрация, моля опитайте отново.
              </div>
            )}
            <div className="card-body">
              <form>
                {/* <div className="row mb-3">
                  <label className="col-md-4 control-label"> Име </label>
                  <div className="col-md-8">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                    {nameError && <div className="text-danger">{nameError}</div>}
                  </div>
                </div> */}

                {/* <div className="row mb-3">
                  <label className="col-md-4 control-label"> Фамилия </label>
                  <div className="col-md-8">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setSurame(e.target.value)}
                    ></input>
                    {nameError && <div className="text-danger">{nameError}</div>}
                  </div>
                </div> */}

                <div className="row mb-3 align-items-center">
                  <label className="col-md-4 control-label"> Потребителско име </label>
                  <div className="col-md-8">
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Въведете потребителско"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    ></input>
                    {usernameError && <div className="text-danger">{usernameError}</div>}
                  </div>
                </div>

                <div className="row mb-3 align-items-center">
                  <label className="col-md-4 control-label"> Email </label>
                  <div className="col-md-8">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Въведете електронна поща"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    {emailError && <div className="text-danger">{emailError}</div>}
                  </div>
                </div>

                <div className="row mb-3 align-items-center">
                  <label className="col-md-4 control-label"> Парола </label>
                  <div className="col-md-8">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Въведете парола"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    {password && <div className="text-danger">{passwordError}</div>}
                  </div>
                </div>

                <div className="row mb-3 align-items-center">
                  <label className="col-md-4 control-label"> Повтаряне на парола </label>
                  <div className="col-md-8">
                    <input
                      type="password"
                      name="repeatPassword"
                      className="form-control"
                      placeholder="Повторете паролата"
                      value={repeatPassword}
                      onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                    {repeatPasswordError && (
                      <div className="text-danger">{repeatPasswordError}</div>
                    )}
                  </div>
                </div>

                <div className="row mb-3 align-items-center">
                  <label className="col-md-4 control-label">Тип потребител</label>
                  <div className="col-md-8  d-flex justify-content-start">
                    <div className="form-check m-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="userType"
                        id="user"
                        value="user"
                        checked={userType === "user"}
                        onChange={() => setUserType("user")}
                      />
                      <label className="form-check-label" htmlFor="user">
                        Потребител
                      </label>
                    </div>
                    <div className="form-check m-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="userType"
                        id="organization"
                        value="organization"
                        checked={userType === "organization"}
                        onChange={() => setUserType("organization")}
                      />
                      <label className="form-check-label" htmlFor="organization">
                        Организация
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group mb-3">
                  <button className="btn control" onClick={(e) => handleRegistrationForm(e)}>
                    Регистрация
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
