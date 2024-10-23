import { useState } from "react"
import Navbar from "../components/Navbar"

export default function Login(){

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
        
    


    return (
        <div>
            <Navbar />
            <form className="flex flex-col items-center">
                <label htmlFor="username">Username:</label>
                <input className='border border-black' 
                    type="text"
                    placeholder="username"
                    name="userName"
                    value = {formData.userName}
                    onChange={handleChange}
                    />

                <br/>

                <label htmlFor="password">Password:</label>
                <input className='border border-black' 
                    type="password"
                    placeholder="password"
                    name="password"
                    value = {formData.password}
                    onChange={handleChange}
                    />
            </form>
        </div>
    )
}