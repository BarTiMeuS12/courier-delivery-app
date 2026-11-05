import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setUser, logoutUser } from "../../store/action/authActions";

const Login = () => {
    const dispatch = useDispatch();

    const user = useSelector(
        (state) => state.auth.user
    );

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            return;
        }

        dispatch(setUser({
            email: email
        }));
    };

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    if (user) {
        return (
            <div>
                <h2>Welcome, {user.email}</h2>

                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>
        );
    }

    return (
        <div>
            <h2>Login</h2>

            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    );
};

export { default } from '../../pages/Login.jsx';