import React from 'react';
import profileImg from './vosryb.jpg';
import {Link} from 'react-router-dom';

const Profile = () => {
    return(
        <div>
            <div className='card'>
                <div className='card-image'>
                    <img className='activator' src={ profileImg } alt='Temitayo Afolabi'></img>
                    <a className='btn-floating halfway-fab waves-effect wave-light red'>
                        <i className='material-icons activator'>more_vert</i>
                    </a>
                </div>
                <div className='card-content'>
                    <span className='card-title activator grey-text text-darken-4'>
                        Temitayo Afolabi
                    </span>
                    <p>Software Engineer</p>
                </div>
                <div className='card-reveal'>
                    <span className='card-title grey-text text-darken-4'>
                        Follow me
                        <i className='material-icons right'>close</i>
                    </span>
                    <p className="flex-container">
                        <i className='fab fa-facebook-f grey-text text-darken-4 social-style'></i>
                        <i className='fab fa-google-plus-g grey-text text-darken-4 social-style'></i>
                        <i className='fab fa-twitter grey-text text-darken-4 social-style'></i>
                        <i className='fab fa-linkedin grey-text text-darken-4 social-style'></i>
                        <i className='fab fa-instagram grey-text text-darken-4 social-style'></i>
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Profile;