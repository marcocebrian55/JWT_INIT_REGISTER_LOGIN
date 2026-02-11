import { useState } from "react"
import { signUpUser } from "../Services/backendServices";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const navigate = useNavigate();
    const [newUser, setnewUser] = useState({
        email: "email",
        password: "password"
    });


    const handleChange = (e) => {
        setnewUser({
            ...newUser,
            [e.target.name]: e.target.value
        });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const response = await signUpUser(newUser.email, newUser.password);
        if (response.ok) {
            alert("user created");
            navigate("/")
        } else {
            const data = await response.json();
            alert(data.error)
        }
    };



    return (
        <div className="container mt-5">


        <form onSubmit={handleSignup}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text"
                    name="email"
                    placeholder="Enter your email"
                    className="form-control"
                    value={newUser.email}
                    onChange={handleChange}
                    required />

            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="text"
                    name="password"
                    placeholder="Enter your password"
                    className="form-control"
                    value={newUser.password}
                    onChange={handleChange} 
                    required/>

            </div>
            <button type = "submit" className="btn btn-primary w-100" >Register</button>
        </form>
        </div>
    )
}