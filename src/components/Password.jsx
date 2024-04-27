import React, { useState } from "react";

const Password = () => {
    const [length, setLength] = useState("");
    const [includesUpper, setIncludesUpper] = useState(true);
    const [includesLower, setIncludesLower] = useState(true);
    const [includesNumb, setIncludesNumb] = useState(true);
    const [includesSymbol, setIncludesSymbol] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const [password, setPassword] = useState("");

    const generatePassword = () => {
        if (!length || length < 1) {
            setErrorMsg("Enter Password Length min 1");
        } else {
            setErrorMsg(null);
        }

        let charset = "";
        if (includesUpper) {
            charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if (includesLower) {
            charset += "abcdefghijklmnopqrstuvwxyz";
        }
        if (includesLower) {
            charset += "1234567890";
        }
        if (includesSymbol) {
            charset += "!@#$%^&*()-_+=";
        }

        let generatePass = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            generatePass += charset[randomIndex];
        }
        setPassword(generatePass);
        console.log(password);
    };

    const copyToClickBoard = () => {
        alert(`Password Copied ${password}`);
        navigator.clipboard.writeText(password);
        setLength("");
        setPassword("");
    };
    return (
        <div>
            <div
                className="container col-lg-4 d-flex flex-column justify-content-center "
                style={{ height: "100vh" }}
            >
                <div className="card p-3 bg-light">
                    <h1 className="text-center">Password</h1>
                    <div className="input-group m-2">
                        <label className="input-group-text bg-dark text-light">
                            Password
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Password Length"
                            value={length}
                            onChange={(e) =>
                                setLength(parseInt(e.target.value))
                            }
                        />
                    </div>
                    {errorMsg && (
                        <small className="text-danger">{errorMsg}</small>
                    )}

                    <div className="form-check d-flex algin-items-center m-1 ">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="lower"
                            checked={includesLower}
                            onChange={(e) => setIncludesLower(e.target.checked)}
                        />
                        <label htmlFor="lower" className="form-text m-1">
                            Lower Case
                        </label>
                    </div>

                    <div className="form-check d-flex algin-items-center m-1 ">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="upper"
                            checked={includesUpper}
                            onChange={(e) => setIncludesUpper(e.target.checked)}
                        />
                        <label htmlFor="upper" className="form-text m-1">
                            Upper Case
                        </label>
                    </div>

                    <div className="form-check d-flex algin-items-center m-1 ">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="number"
                            checked={includesNumb}
                            onChange={(e) => setIncludesNumb(e.target.checked)}
                        />
                        <label htmlFor="number" className="form-text m-1">
                            Includes Number
                        </label>
                    </div>

                    <div className="form-check d-flex algin-items-center  m-1">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="symbol"
                            checked={includesSymbol}
                            onChange={(e) =>
                                setIncludesSymbol(e.target.checked)
                            }
                        />
                        <label htmlFor="symbol" className="form-text m-1">
                            Includes Symbol
                        </label>
                    </div>
                    <div className="form-group m-2">
                        <button
                            className="btn btn-outline-primary"
                            onClick={generatePassword}
                        >
                            Generate Password
                        </button>
                    </div>

                    <div className="form-group my-3">
                        <input
                            type="text"
                            className="form-control"
                            readOnly
                            value={password}
                        />
                        <input
                            type="button"
                            value="Copy"
                            className="btn btn-success m-2 d-block"
                            style={{ width: "200px" }}
                            onClick={copyToClickBoard}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Password;
