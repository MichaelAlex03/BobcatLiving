import React from 'react'
import Navbar from '../components/Navbar'
import {useState} from 'react'

export const signUp = () => {

    const [formData, setFormData] = useState({
        userName: "",
        password:"",
        confirmPass:""
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
        <>
            <Navbar />
            <div className="flex justify-center items-center h-[80vh]">
                    <form className="form h-[60vh]">
                        <div className="flex flex-col p-4">
                            <h1 className='text-2xl font-bold text-center mb-5'>Create your account</h1>
                            
                            <label htmlFor='userName'>Username</label>
                            <input className='border border-black rounded-md mb-2 p-2' 
                                type="text"
                                placeholder="username"
                                name="userName"
                                value = {formData.userName}
                                onChange={handleChange}
                                />

                            <label htmlFor='password'>Password</label>
                            <input className='border border-black rounded-md mb-2 p-2' 
                                type="password"
                                placeholder="password"
                                name="password"
                                value = {formData.password}
                                onChange={handleChange}
                                />

                            <label htmlFor='confirmPass'>Confirm Password</label>    
                            <input className='border border-black rounded-md p-2' 
                                type="password"
                                placeholder="password"
                                name="confirmPass"
                                value = {formData.password}
                                onChange={handleChange}
                                />
                            </div>
                        <button type="submit" className="submit">Sign Up</button>
                    </form>
            </div>
        </>
    )
}

export default signUp