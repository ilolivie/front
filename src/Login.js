import React, { useState} from "react";
import PropTypes from 'prop-types';
import './login.css'
import { Form,Button } from "react-bootstrap";




async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }  



export default function Login({ setToken }){
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }
    return(
    <div className='login-wrapper'>
        <Form onSubmit={handleSubmit}>
          <Form.Label>Добро пожаловать! Введите логин и пароль.</Form.Label>
        <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Имя пользователя</Form.Label>
            <Form.Control type="text"  onChange={e => setUserName(e.target.value)} id="validationDefault01" placeholder="Введите логин" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">            
            <Form.Label>Пароль</Form.Label>        
            <Form.Control type="password"  onChange={e => setPassword(e.target.value)} id="validationDefault01" placeholder="Введите пароль" required /> 
        </Form.Group>             
            
            <div>
                <Button type="submit">Войти</Button>
            </div>
        </Form>
    </div>


    )
  
}


Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }