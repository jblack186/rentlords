import React from 'react';
import { withRouter } from 'react-router';
import './Register.css';
import GoogleButton from 'react-google-button'
import Drip from './vids/Drip.mp4'

const Login = () => {

        

        return (
            <div className='register-contain'>
                <video autoPlay loop muted
                style={{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1",
                    backgroundColor: 'black',
                    


                }}
                >
                    <source src={Drip} type="video/mp4" />
                </video>
                <div className='cover'>
                </div> 
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
