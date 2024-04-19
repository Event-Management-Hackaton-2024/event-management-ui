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

    const register = { name, surname, username, email, password };

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
    <div className="container">
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
                <div className="row mb-3">
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
                </div>

                <div className="row mb-3">
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
                </div>

                <div className="row mb-3">
                  <label className="col-md-4 control-label"> Потребителско име </label>
                  <div className="col-md-8">
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    ></input>
                    {usernameError && <div className="text-danger">{usernameError}</div>}
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-md-4 control-label"> Email </label>
                  <div className="col-md-8">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Enter email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    {emailError && <div className="text-danger">{emailError}</div>}
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-md-4 control-label"> Парола </label>
                  <div className="col-md-8">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    {password && <div className="text-danger">{passwordError}</div>}
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-md-4 control-label"> Повтори паролата </label>
                  <div className="col-md-8">
                    <input
                      type="password"
                      name="repeatPassword"
                      className="form-control"
                      placeholder="Repeat password"
                      value={repeatPassword}
                      onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                    {repeatPasswordError && (
                      <div className="text-danger">{repeatPasswordError}</div>
                    )}
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
