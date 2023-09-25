import React from 'react'
import SocialIcon from './SocialIcon';

const navbg = {
    backgroundColor: "#d6932c"
}
const blogtext = {
    width: "20%"
}
const textColor = "text-light";
const NavBar = () => {
    return (
        <div className='mx-auto w-100 h-100' style={navbg}>
            <div className='d-flex justify-content-between container w-100'>
                <a href='https://www.lejhro.com/' >
                    <span className='w-50'><img src='https://www.lejhro.com/lejhro_logo_white.png' className='mt-4 ms-5' width={200} height={25} /></span>
                </a>
                <ul className="navbar-nav mx-auto mt-2 d-flex flex-row">
                    <li className="nav-item p-2 navbarDis ">
                        <a href="https://www.lejhro.com/innovations" className={`nav-link active ${textColor} navbarDis`} aria-current="page" >Innovations</a>
                    </li>
                    <li className="nav-item p-2 navbarDis">
                        <a href="https://www.lejhro.com/business-services" className={`nav-link active ${textColor} navbarDis`}>Business Services</a>
                    </li>
                    <li className="nav-item p-2 navbarDis">
                        <a href="https://www.lejhro.com/financial-services" className={`nav-link active ${textColor} navbarDis`}>Financial services</a>
                    </li>
                    <li className="nav-item p-2 navbarDis">
                        <a href="http://www.bootcamp.lejhro.com/" className={`nav-link active ${textColor} `} aria-disabled="true">Bootcamp</a>
                    </li>
                </ul>


                <span>
                    <button className="btn btn-dark changeIconColor mt-3 ms-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src='https://icon-library.com/images/menu-icon-png-3-lines/menu-icon-png-3-lines-14.jpg' width={30} height={20} /></button></span>
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
            <div className={`${textColor}`} >
                <h1 className='h1 text-right p-5 ms-5' style={blogtext} >Blogs</h1>
            </div>
        </div>

    )
}

export default NavBar
