import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar"

export const Login = () => {

    const [formData, setFormData] = useState({
        userName: "",
        password: ""
    });

    


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : value
            }
        });
    }
        
    //Create handleSubmit function for login which will send post request to store users in database


    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center h-[80vh]">
                <form className="form h-[50vh]">
                    <div className="flex flex-col">
                    <h1 className='text-2xl font-bold text-center mb-5'>Sign into your account</h1>

                    <label htmlFor="userName" className="mb-1">Username</label>
                    <input className='border border-black rounded-md mb-2 p-2' 
                        type="text"
                        placeholder="username"
                        name="userName"
                        value = {formData.userName}
                        onChange={handleChange}
                        />

                    <label htmlFor="password" className="mb-1">Password</label>
                    <input className='border border-black rounded-md p-2' 
                        type="password"
                        placeholder="password"
                        name="password"
                        value = {formData.password}
                        onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="submit">Log In</button>
                </form>
            </div>
        </>

    )
}

export default Login