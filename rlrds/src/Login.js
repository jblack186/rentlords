import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Dropdown, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router';
import './Register.css'

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [token, setToken] = useState('');;

    const changeUsername = (e) => {
        e.preventDefault();
        setUsername(e.target.value)

    }

    const changePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value)

    }

    const push = e => {
        axios.get('https://shirt-store123.herokuapp.com/cart', {headers : {Authorization: `Bearer ${token}`}})
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
    
        
console.log(token)

        return (
            <div className='register-contain'>
                
                <div className='register-box'>
                <h3>LOGIN FORM</h3>
                <form>
                <div className='username'> 
                    <input 
                    type='text'
                    onChange={changeUsername}
                    placeholder='Enter username'
                    value={username}
                    name='username'
                    />
                    </div>
                    <div className='password'>
                    <input 
                    onChange={changePassword}
                    onFocus='none'
                    placeholder='Password'
                    value={password}
                    name='password'
                    />
                    </div>
                    <div>
                    <button type='submit'>Add</button>
                    </div>
                    <span>Are you new to RentLords?</span><span>Register here</span>
                </form>
                </div>
            </div>
        )
    }


export default withRouter(Login);
