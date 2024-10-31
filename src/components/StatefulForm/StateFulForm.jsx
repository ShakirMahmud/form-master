import { useState } from "react";

const StateFulForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length<6){
            setError('Password should be at least 6 characters long.');
        }else{
            setError('');
        }
        console.log(name, email, password);
    }
    const handleNameChange = e =>{
        setName(e.target.value)
    }
    const handleEmailChange = e =>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type="text" name="name"/><br />
                <input
                    onChange={handleEmailChange}
                type="email" name="email" id="" /><br />
                <input onChange={handlePasswordChange} type="password" name="password" id="" required/>
                <br /><br />
                <input type="submit" value="Submit" />
                {
                    error && <p style={{color:'red'}}>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFulForm;