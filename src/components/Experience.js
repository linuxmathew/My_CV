import React from 'react';
import Educations from './Educations';


const Experience = () => {
    return(
        <div>
            <div className='card'>
                <div className='card-content'>
                    <h6><strong>EXPERIENCES</strong></h6>
                    <div className='row'>
                        <div className='col s12 m4 l4 xl4'>
                            <p className='teal year_exp white-text'>
                                Oct <strong>2021</strong> - Dec <strong>2021</strong>
                            </p>
                        </div>
                        <div className='col s12 m8 l8 xl8'>
                            <blockquote className='no-pad'>
                                <h6 className='no-pad mt-bottom'>
                                    <strong>WEB DEVELOPER</strong>
                                    <p className='mt'><strong><i>SideHustle 4.0 - Internship</i></strong></p>
                                </h6>
                                <p>
                                    Designed and developed dynamic, interactive and fully responsive websites
                                     that ensured high traffic, page views and user experience making use of Bootstrap
                                      and vanilla.js technologies
                                </p>
                            </blockquote>
                        </div>
                        <div className='col s12 m4 l4 xl4'>
                            <p className='teal year_exp white-text'>
                                August <strong>2021</strong> - Nov. <strong>2021</strong>
                            </p>
                        </div>
                        <div className='col s12 m8 l8 xl8'>
                            <blockquote className='no-pad'>
                                <h6 className='no-pad mt-bottom'>
                                    <strong>WEB DEVELOPER</strong>
                                    <p className='mt'><strong><i>HNG Internship Program 2021 for Young Africans</i></strong></p>
                                </h6>
                                <ol>
                                    <li>
                                        Develop series of project as part of a group using the tools and technology taught during the learning phase.
                                    </li>
                                    <li>
                                        Collaborated with other developers making effective use of version control systems (Git/Github) in project submissions.
                                    </li>
                                </ol>
                            </blockquote>
                        </div>
                        <div className='col s12 m4 l4 xl4'>
                            <p className='teal year_exp white-text'>
                                August <strong>2019</strong> - March <strong>2020</strong>
                            </p>
                        </div>
                        <div className='col s12 m8 l8 xl8'>
                            <blockquote className='no-pad'>
                                <h6 className='no-pad mt-bottom'>
                                    <strong>Web Developer/Network Analyst</strong>
                                    <p className='mt'><strong><i>NBTS, Ogbomoso – Intern</i></strong></p>
                                </h6>
                                <ol>
                                    <li>
                                        Learnt about the concept of web security and deployment 
                                    </li>
                                    <li>
                                        Oversaw full lifecycle of software development for 3 projects with 100% on time delivery.
                                    </li>
                                    <li>
                                        Installation and testing of Linux Operating System
                                    </li>
                                </ol>
                            </blockquote>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Experience;