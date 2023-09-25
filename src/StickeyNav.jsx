import React from 'react'
import SocialIcon from './SocialIcon'

const navbg = {
    backgroundColor: "#fdfdfd"
}
const blogtext = {
    width: "25%",
    textAlign: "right"
}
const textColor = "text-light";
const StickeyNav = () => {
    return (
        <>
            <div className='mx-auto w-100  p-3 position-fixed' style={navbg}>
                <div className='cotainer-fluid d-flex'>
                    <nav className="navbar w-75 mx-auto navbar-expand-lg navposition d-flex justify-content-between" style={navbg}>
                        <a href='https://www.lejhro.com/'>
                            <img src='https://www.lejhro.com/lejhro_logo_blue.png' width={150} height={25} />
                        </a>
                        <div className=' justify-content-end'><a href='' className='nav-link h6 '>Let's Talk</a></div>
                        <div></div>
                    </nav>
                    <button className="btn btn-dark changeIconColor rounded-pill" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src='https://icon-library.com/images/menu-icon-png-3-lines/menu-icon-png-3-lines-14.jpg' width={30} height={20} /></button>

                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                            <div className='mx-auto'>
                                <div><img src='https://www.lejhro.com/lejhro_logo_blue.png' width={250} /></div>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul>
                                <li className='p-3 fw-bolder'><a className='nav-link' href='https://www.lejhro.com/innovations'>Innovations</a></li>
                                <li className='p-3 fw-bolder'><a className='nav-link' href='http://www.bootcamp.lejhro.com/'>Bootcamp</a></li>
                                <li className='p-3 fw-bolder'><a className='nav-link' href='https://www.lejhro.com/business-services'>Business Services</a></li>
                                <li className='p-3 fw-bolder'><a className='nav-link' href='https://www.lejhro.com/financial-services'></a>Financial Services</li>
                                <li className='p-3 fw-bolder'><a className='nav-link' href='https://www.lejhro.com/about'>About</a></li>
                                <li className='p-3 fw-bolder'><a className='nav-link' href='https://www.lejhro.com/contact-us'>Contact Us</a></li>
                                <li className='p-3 fw-bolder'><a className='nav-link' href='https://www.lejhro.com/blogs'>Blogs</a></li>
                                <div className='d-flex'>
                                    <SocialIcon source="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-512.png" link="https://www.twitter.com/lejhro" />
                                    <SocialIcon source="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-128.png" link="https://www.facebook.com/lejhro" />
                                    <SocialIcon source="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-128.png" link="https://www.linkedin.com/company/lejhro" />
                                    <SocialIcon source="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Youtube3_svg-128.png" link="https://www.youtube.com/channel/UCN_okXQlwY7e26UJ8tJtCQQ" />
                                </div>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default StickeyNav
