import React from 'react';
import LoginImage from '../../assets/imageLogin.png'
import './signinadmin.css';
import Admin from '../../assets/dashicons_admin-users.png';
import Input from './Input';
import Users from '../../assets/Vector.png';
import { Link } from 'react-router-dom/dist';
import img from '../../assets/quizz.png'
const SignInAs = () => {
    return (
        <div className='login'>
            <div className="right">
                <div className="logo_adpart">
                    <div id="logo"><img src={img}/></div>
                    <div className="admin_part">
                        <button className="admin">
                            <img id='adminImg' src={Admin} alt="" />
                                <Link to='/signinadmin'><h4 id='sign'>Sign in as Admin</h4></Link>
                        </button>

                        <button className="part">
                            <img id='userImg' src={Users} alt="" />
                            <Link to='/login'><h4 id='sign'>Sign in as Participant</h4></Link>
                        </button>
                    </div>
                </div>
                <div className="input"><Input  /></div>
            </div>

            <div className="left">
                <img id='image' src={LoginImage} alt="" />
            </div>

        </div>
    )
}

export default SignInAs;








