import { useState } from "react"
import validate from "./validate";
import styled from "styled-components";


const Container = styled.div`
background-image: url('/img-login.jpg');
background-size: cover;
background-position: center;
height: 100vh;
position: relative;
`;

const Formu = styled.form`
  position: absolute;
  top: 31%;
  left: 35%;
  right: 35%;
  width: 300px;
  height: 38%;
  background-color: rgb(8, 8, 8);
  display: flex;
  justify-content: center;
  color: aliceblue;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  border: 1px dotted white;
box-shadow: 0px 0px 10px #ccc;
`;

function Form({ login }) {
    const [user, setUser] = useState({
        name: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        password: ''
    });

    const handlechage = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
        setErrors(validate({
            ...errors,
            [event.target.name]: event.target.value, errors
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        login(user);
    }

    return (
        <Container>
            
            <Formu onSubmit={handleSubmit}>
                <h3><label htmlFor="name">user: </label>
                <input type="text" name='name' value={user.name} onChange={handlechage} /></h3>
                <span>{errors.name}</span>
                <h3><label htmlFor="password">password: </label>
                <input type="password" name='password' value={user.password} onChange={handlechage} /></h3>
                <span>{errors.password}</span>
                <h5><button type="submit">login</button></h5>
            </Formu>
            
        </Container>
    )


}

export default Form;