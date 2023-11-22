import React, { useState } from 'react';

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
    const [data, setData] = useState({ username: '', password: '' });

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    return (
        <div>
            {isLoggedIn ? (
                <p>You are logged in!</p>
            ) : (
                <form>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" id="username" value={data.username} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" value={data.password} onChange={handleChange} />
                    </div>
                    <button onClick={() => setIsLoggedIn(true)}>Login</button>
                </form>
            )}
        </div>
    );
};

export default Login;