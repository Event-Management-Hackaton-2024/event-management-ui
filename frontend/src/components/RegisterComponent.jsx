import React, { useState } from "react";
import { registerAPICall } from "../services/AuthService";
import "./StyleComponent.css";

const RegisterComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");
  const [isEventCreator, setIsEventCreator] = useState(false);

  function handleRegistrationForm(e) {
    e.preventDefault();
    if (!username) {
      setEmailError("Username е задължително поле.");
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
    if (password !== confirmPassword) {
      setRepeatPasswordError("Паролите не съвпадат.");
      return;
    }

    const register = { username, email, password, confirmPassword, isEventCreator };
    console.log(register);
    registerAPICall(register)
      .then((response) => {
        console.log(response.data);
        setRegistrationStatus("success");
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      })
      .catch((error) => {
        console.error(error);
        setRegistrationStatus("error");
      });
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
                <div className="row mb-3 align-items-center">
                  <label className="col-md-4 control-label"> Потребителско Име </label>
                  <div className="col-md-8">
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Въведете потребитеслско име"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    ></input>
                    {emailError && <div className="text-danger">{emailError}</div>}
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
                  <label className="col-md-4 control-label"> Потвърдете паролата</label>
                  <div className="col-md-8">
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      placeholder="Повторете паролата"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
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
                        name="isEventCreator"
                        id="user"
                        value="user"
                        checked={isEventCreator == false}
                        onChange={() => setIsEventCreator(false)}
                      />
                      <label className="form-check-label" htmlFor="user">
                        Потребител
                      </label>
                    </div>
                    <div className="form-check m-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="isEventCreator"
                        id="creator"
                        value="creator"
                        checked={isEventCreator == true}
                        onChange={() => setIsEventCreator(true)}
                      />
                      <label className="form-check-label" htmlFor="creator">
                        Организтор
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
