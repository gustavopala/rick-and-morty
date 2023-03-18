import { useState } from "react"
import validate from "./validate";


function Form ({login}) {
    const [user, setUser]= useState({
        name: '',
        password: ''
    });

    const [errors, setErrors]= useState({
        name: '',
        password: ''
    });

    const handlechage=(event)=>{
    setUser({...user, 
        [event.target.name]: event.target.value})
    setErrors(validate({...errors,
        [event.target.name]: event.target.value, errors}))
}
const handleSubmit = (event) =>{
    event.preventDefault();
    login(user);
}

    return(
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">user:</label>
        <input type="text" name='name' value={user.name} onChange={handlechage}/>
        <span>{errors.name}</span>
        <label htmlFor="password">password:</label>
        <input type="password" name='password' value={user.password} onChange={handlechage}/>
        <span>{errors.password}</span>
        <button type="submit">login</button>
    </form>)
        
   
}

export default Form;