import React from 'react';

const Skills = () => {
    return(
        <div>
            <div className='card'>
                <div className='card-content'>
                    <h6>
                        <strong>PROFESSIONAL SKILLS</strong>
                    </h6>
                    <div className='row mt-top'>
                        <div className='col s6'>
                            <p><i className='fab fa-html5'></i> HTML5</p>
                            <div class="progress grey lighten-1">
                                <div class="determinate blue" style={{ width: '91%'}} ></div>
                            </div>
                        </div>
                        <div className='col s6'>
                            <p><i className='fab fa-css3'></i> CSS3</p>
                            <div class="progress grey lighten-1">
                                <div class="determinate blue" style={{ width: '85%'}} ></div>
                            </div>
                        </div>
                        <div className='col s6'>
                            <p><i className='fab fa-js'></i> Javascript</p>
                            <div class="progress grey lighten-1">
                                <div class="determinate blue" style={{ width: '73%'}} ></div>
                            </div>
                        </div>
                        <div className='col s6'>
                            <p><i className='fa-brands fa-react'></i> React.js</p>
                            <div class="progress grey lighten-1">
                                <div class="determinate blue" style={{ width: '30%'}} ></div>
                            </div>
                        </div>
                        <div className='col s6'>
                            <p><i className='fab fa-js'></i> Next.js</p>
                            <div class="progress grey lighten-1">
                                <div class="determinate blue" style={{ width: '10%'}} ></div>
                            </div>
                        </div>
                        <div className='col s6'>
                            <p><i className='fa-brands fa-node'></i> Node.js</p>
                            <div class="progress grey lighten-1">
                                <div class="determinate blue" style={{ width: '0%'}} ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Skills;