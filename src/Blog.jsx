import React from 'react'
import SubHeading from './SubHeading'
import Paragraph from './Paragraph'
import SmallHeading from './SmallHeading'
import FooterHeading from './FooterHeading'
import SocialIcon from './SocialIcon'

const Blog = () => {
    const horizontalLine = {
        backgroundColor: "#2c7fbf"
    }

    const scrollToTop=()=>{
        window.scrollTo({
            top:0,
            behaviour:"smoooth"
        })
    }
    window.addEventListener("scroll",()=>{
        const scrollToTopButton=document.getElementById("scrollToTopButton");
        if(window.scrollY>200)
        {
            scrollToTopButton.style.display="block";
        }
        else
        {
            scrollToTopButton.style.display="none";
        }
    })
    return (
        <>
            <div className='mx-auto w-75 bg-light mt-5 rounded p-5'>
                <div className='blogBody '>
                
                    <div><h1 className='h2 mt-2 mb-5'>Data Analysis: Everything You Need to Know</h1></div>
                    <SubHeading content="Without big data analytics, companies are blind and deaf, wandering out onto the web like deer on a freeway.
                    ~ Geoffrey Moore" />
                    <Paragraph
                        para="Companies today need every edge and advantage they can get. Thanks to obstacles like rapidly changing markets, economic uncertainty, finicky consumer attitudes, and even global pandemics, businesses today are working with slimmer margins for error."
                    />
                    <Paragraph
                        para=" Companies that want to thrive in these competitive markets can improve their odds of success with the help of data analysis.Companies that want to thrive in these competitive markets can improve their odds of success with the help of data analysis."
                    />
                    <Paragraph
                        para=" This strategy is common sense, and it applies to personal life as well as business. No one makes important decisions without first finding out what’s at stake, the pros and cons, and the possible outcomes. Similarly, no company that wants to succeed should make decisions based on bad data. Organisations need information; they need data. This is where data analysis enters the picture."
                    />

                    <SubHeading content="What is data analysis?" />
                    <Paragraph
                        para="Data analysis is defined as a process of cleaning, transforming, and modelling data to discover useful information for business decision-making. The purpose of Data Analysis is to extract useful information from data and take the decision based upon the data analysis."
                    />
                    <button id='scrollToTopButton' onClick={scrollToTop}><img src='https://pbs.twimg.com/media/CQnOb9UUsAAfiM3?format=png&name=small' width={30} height={20}/></button>
                    <Paragraph para="Data analysis is defined as a process of cleaning, transforming, and modelling data to discover useful information for business decision-making. The purpose of Data Analysis is to extract useful information from data and take the decision based upon the data analysis." />
                    <Paragraph para="The information discovered can help aid the company’s or organisation’s growth. Decision-makers will be able to come to an actionable conclusion and make the right business decisions." />
                    <SubHeading content="Types of Data Analysis:" />

                    <SmallHeading heading="Text Analysis" />
                    <Paragraph para="Text Analysis is also referred to as Data Mining. It is one of the methods of data analysis to discover a pattern in large data sets using databases or data mining tools. It used to transform raw data into business information." />

                    <SmallHeading heading="Descriptive Analysis" />
                    <Paragraph para="The descriptive analysis method is the starting point to any analytic reflection, and it aims to answer the question of what happened? It does this by ordering, manipulating, and interpreting raw data from various sources to turn it into valuable insights for your organisation." />

                    <SmallHeading heading="Exploratory Analysis" />
                    <Paragraph para="As its name suggests, the main aim of the exploratory analysis is to explore. Prior to it, there was still no notion of the relationship between the data and the variables. Once the data is investigated, the exploratory analysis enables you to find connections and generate hypotheses and solutions for specific problems." />

                    <SmallHeading heading="Statistical Analysis" />
                    <Paragraph para="Statistical Analysis shows “What happened?” by using past data in the form of dashboards. Statistical Analysis includes collection, Analysis, interpretation, presentation, and modelling of data. It analyses a set of data or a sample of data." />

                    <SmallHeading heading="Predictive analysis" />
                    <Paragraph para="The predictive method allows you to look into the future to answer the question: what will happen? In order to do this, it uses the results of the previously mentioned descriptive, exploratory, and diagnostic analysis, in addition to machine learning (ML) and artificial intelligence (AI). Like this, you can uncover future trends, potential problems or inefficiencies, connections, and casualties in your data." />

                    <SmallHeading heading="Diagnostic Analysis" />
                    <Paragraph para="Diagnostic Analysis shows “Why did it happen?” by finding the cause from the insight found in Statistical Analysis. This Analysis is useful to identify behaviour patterns of data. If a new problem arrives in your business process, then you can look into this Analysis to find similar patterns of that problem. And it may have chances to use similar prescriptions for the new problems." />

                    <SubHeading content="Data Analysis Process" />
                    <Paragraph para="The Data Analysis Process is gathering information by using a proper application or tool which allows you to explore the data and find a pattern in it." />
                    <Paragraph para="It has following phases:" />

                    <SmallHeading heading="Identify:" />
                    <Paragraph para="You first need to identify why you need it in the first place. The identification is the stage in which you establish the questions you will need to answer. For example, what is the customer's perception of our brand? Or what type of packaging is more engaging to our potential customers? Once the questions are outlined you are ready for the next step." />

                    <SmallHeading heading="Collect:" />
                    <Paragraph para="This is the stage where you start collecting the needed data. Here, you define which sources of information you will use and how you will use them. The collection of data can come in different forms such as internal or external sources, surveys, interviews, questionnaires, focus groups, among others." />

                    <SmallHeading heading="Cleaning:" />
                    <Paragraph para="Now whatever data is collected may not be useful or irrelevant to your aim of Analysis, hence it should be cleaned. The data which is collected may contain duplicate records, white spaces or errors. The data should be cleaned and error free. This phase must be done before Analysis because based on data cleaning, your output of Analysis will be closer to your expected outcome." />

                    <SmallHeading heading="Analysis:" />
                    <Paragraph para="Once the data is collected, cleaned, and processed, it is ready for Analysis. As you manipulate data, you may find you have the exact information you need, or you might need to collect more data. During this phase, you can use data analysis tools and software which will help you to understand, interpret, and derive conclusions based on the requirements." />

                    <SmallHeading heading="Interpretation:" />
                    <Paragraph para="After analysing your data, it’s finally time to interpret your results. You can choose the way to express or communicate your data analysis either you can use simply in words or maybe a table or chart." />

                    <SmallHeading heading="Visualisation:" />
                    <Paragraph para="Data visualisation is very common in your day to day life; they often appear in the form of charts and graphs. In other words, data shown graphically so that it will be easier for the human brain to understand and process it." />
                </div>
            </div>
            <div className="w-full text-secondary " style={horizontalLine}>.</div>
            <div className='footer  d-flex col justify-content-center'>
                <div className='footeritem m-5'>
                    <FooterHeading name="Company" />
                    <ul  className='list-unstyled'>
                        <li><a className='nav-link' href='https://www.lejhro.com/innovations'>Innovations</a></li>
                        <li><a className='nav-link' href='https://www.lejhro.com/business-services'>Business Services</a></li>
                        <li><a className='nav-link' href='https://www.lejhro.com/financial-services'>Financial services</a></li>
                        <li><a className='nav-link' href='http://www.recruit.lejhro.com/'>Lejhro Recruiter</a></li>
                        <li><a className='nav-link' href='https://www.lejhro.com/about'>About</a></li>
                        <li><a className='nav-link' href='https://www.lejhro.com/blogs'>Blogs</a></li>
                    </ul>
                </div>
                <div className='footeritem m-5'>
                    <FooterHeading name="Programs" />
                    <ul  className='list-unstyled'>
                        <li><a href='http://www.bootcamp.lejhro.com/' className='nav-link'>Lejhro Bootcamp</a></li>
                    </ul>
                </div>
                <div className='footeritem m-5'>
                    <FooterHeading name="Support" />
                    <ul  className='list-unstyled'>
                        <li><a className='nav-link' href='https://www.lejhro.com/contact-us'>Contact</a></li>
                        <li><a className='nav-link' href='https://www.lejhro.com/terms-of-use'>Terms of Use</a></li>
                        <li><a className='nav-link' href='https://www.lejhro.com/privacy-statement'>Privacy Statement</a></li>
                    </ul>
                </div>
                <div className='footeritem m-5'>
                    <FooterHeading name="Connect with us" />
                    <div className='d-flex'>
                        <SocialIcon source="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-512.png"  link="https://www.twitter.com/lejhro"/>
                        <SocialIcon source="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-128.png"  link="https://www.facebook.com/lejhro"/>
                        <SocialIcon source="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-128.png" link="https://www.linkedin.com/company/lejhro" />
                        <SocialIcon source="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Youtube3_svg-128.png"  link="https://www.youtube.com/channel/UCN_okXQlwY7e26UJ8tJtCQQ"/>
                    </div>
                </div>
            </div>
            <div><h6 className='h6 text-center'>© 2023 LEJHRO. All Rights Reserved.</h6></div>
        </>
    )
}

export default Blog
