import React, {useState,setState} from 'react';
import './style.css'
function RegistrationForm() {
    
    const [userName, setFirstName] = useState(null);
    const [mobileno, setmobileno] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "userName"){
            setFirstName(value);
        }
        if(id === "mobileno"){
            setmobileno(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = () => {
        console.log(userName,mobileno,email,password,confirmPassword);
    }

    return(
        <div className="form">
            <h1>Grievance Cell</h1>
               <h3>Sign Up</h3>
            <div className="form-body">
            <div className="email">
                    <label className="form__label" for="email"></label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Enter email"/>
                </div>
                <div className="userName">
                    <label className="form__label" for="userName"></label>
                    <input className="form__input" type="text" value={userName} onChange = {(e) => handleInputChange(e)} id="userName" placeholder="Enter Username"/>
                </div>
                <div className="mobileno">
                    <label className="form__label" for="mobileno"></label>
                    <input  type="text" name="" id="mobileno" value={mobileno}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="Enter Mobile number"/>
                </div>
                
                
                <div className="password">
                    <label className="form__label" for="password"></label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword"></label>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
            </div>
            <div class="footer">
                <p>Already a user?</p>
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Submit</button>
            </div>
        </div>
       
    )       
}

export default RegistrationForm;