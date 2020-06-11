import React from 'react';
import { withRouter } from 'react-router';
import './Register.css';
import GoogleButton from 'react-google-button'

const Login = () => {

        

        return (
            <div className='register-contain'>
                
                <div className='register-box'>
                    <h3>Welcome to RentLords</h3>
                    <form>
                        <div>
                         <a style={{listStyle: 'none', textDecoration: 'none'}} href="/auth/google"><GoogleButton
                        />
                           </a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }


export default withRouter(Login);
