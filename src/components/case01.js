import React from 'react'
import Header from './header'
import Others from './others'
import './case01.scss'

const Case01 = () => (
    <div className="case01">
        <Header />
        <img className="case01__header-img" src={require('../images/project01/steelbeauty.jpg')} alt=""/>
        <div className="container">
            <h1 className="case01__title">Steel Beauty</h1>
            <h3 className="case01__title-small">Long story short</h3>
            <p className="case01__text">
                There is a cool Tattoo Studio near my house, I was always wondering if I can offer them branding, designing and building a website for them. One fine morning, I walked into the tattoo studio where I met Tyler and Sean, and had a brief chat if they are interested to have a slick and modern website. Sean showed the interest, and rest is the history.
            </p>
            <p className="case01__text">
                Jumping on this opportunity paid off not only in terms of gained experience but reminded me as well about one of my core values — to help and support creatives I believe in.
            </p>
            <h3 className="case01__title-small">
                Role
            </h3>
            <p className="case01__text">
                Proposal, timeline & budget, UI, UX, Development
            </p>
            <h1 className="case01__title-small">
                What's SteelBeauty?
            </h1>
            <p className="case01__text">
                Established in December of 1999, Steel Beauty was one of the first Tattoo and Piercing studios in Redbridge. With Sean Lowery at the helm as owner and head tattooist, Steel Beauty has earned its place as one of the most reputable studios in Essex.
            </p>
            <h3 className="case01__title-medium">
                Design
            </h3>
            <p className="case01__text">
                My plan was to extend the existing idea of the brand (i.e. colour scheme and typography) and build a more sophisticated style for the new website, but there was pretty much nothing to go on other than a logo designed by Tyler. 
            </p>
            <p className="case01__text">
                So I observed the interior of their studio, it has a great combination of retro and modern styles with some dark walls and golden colour elements on them. Taking that into consideration, I decided that the website theme is going to be dark with gold elements. Sean suggested to include texture from the studio’s wall somehow. It was quite challenging, after bit of a brainstorming, I found a good place to stick the texture - serving sides of content on website.
            </p>
            <div className="case01__margin"></div>
        </div>
        <div className="container-wide">
            <div className="case01__coltext">
                <h3 className="case01__title-small">
                    colours & texture
                </h3>
                <div className="case01__coltextbox">
                    <div>
                        <div className="block gold"></div>
                        <h3 className="case01__title-small">Gold #e1c173</h3>
                    </div>
                    <div>
                        <div className="block blue"></div>
                        <h3 className="case01__title-small">Blue #16171b</h3>
                    </div>
                    <div>
                        <div className="block texture"></div>
                        <h3 className="case01__title-small">Studio wallpaper</h3>
                    </div>   
                </div>
            </div>
            <div className="case01__typography">
                <h3 className="case01__title-small">
                    Typography
                </h3>
                <h1 className="case01__typography-large">
                    Aa
                </h1>
                <h1 className="case01__typography-small">
                    A B C D E F G H I J K L M N O P Q R S T U V W X Y Z <br/>
                    a b c d e f g h i j k l m n o p q r s t u v w x y z <br/>
                    0123456789 (.,:;?!@£$%^&*-=)
                </h1>
            </div>
        </div>
        <div className="container">
            <h3 className="case01__title-medium">
                User experience
            </h3>
            <p className="case01__text">
                I browsed through various sources for inspirations and analysed Tattoo websites to get some idea about the content, layout and any small detail I can include. 
            </p>
            <p className="case01__text">
                A research and analysis led me to have specific features of the website
            </p>
            <h3 className="case01__title-small">
                Feature
            </h3>
            <p className="case01__text">
                a small section featuring their best work, with a link - view more that leads to the Gallery section if a client is interested to explore more awesome work by Sean and Tyler.
            </p>
            <img className="ux-image" src={require('../images/gif/features.gif')} alt="" className="ux-image"/>
            <h3 className="case01__title-small">
                About us
            </h3>
            <p className="case01__text">
                Once you are mesmerised with the great work from both artists, it’s interesting to know the story behind the studio and more about individual artists (since you will be curious to know more about someone who is going to put ink in your skin). I tried to create artists section magazine style where I gave a bordered background to the picture to make it more catchy.
            </p>
            <p className="case01__text">
                Under the details about artists, there is a view more section where I have showcased the work of individual artists. For example, if you click on view more under Sean’s section, you can explore the work done by him.
            </p>
            <h3 className="case01__title-small">
                FAQ
            </h3>
            <p className="case01__text">
                People who are coming to studio for first time tend to have many questions, it is important to lay out this information on website to make them clear about what to expect (saving both parties time by answering obvious questions). 
            </p>
            <h3 className="case01__title-small">
                Testimonials
            </h3>
            <p className="case01__text">
                Psychologically, it is proven that humans tend to have influence on their decisions on the basis of what others say about the service or goods. Having good reviews on website would definitely leave a good impression. So by the time clients scroll down, they will encounter some positive words about the studio. 
            </p>
            <img className="ux-image" src={require('../images/gif/testimonials.gif')} alt=""/>
            <h3 className="case01__title-small">
                Contact Us
            </h3>
            <p className="case01__text">
                By the time client is on Testimonial section, he has almost decided to book an appointment so it is a right time to present contact details, making the phone number pop up gives them indication to ring up straight and get inked. 
            </p>
            <p className="case01__text">
                The google map at the bottom is customised to match website’s tone.  
            </p>
            <p className="case01__text">
                The footer is minimal, The Steel Beauty text has golden colour hover effect, which on clicking takes user to top of the page.
            </p>
        </div>
        <div className="container">
            <h3 className="case01__title-medium">
                Wireframes
            </h3>
            <p className="case01__text">
                When the framework’s basic concept was done, I simply worked with the content I had gathered and broke everything down into individual subpages to test if everything could fit together.
            </p>
            <p className="case01__text">
                Quick, low-fidelity, black and white wireframes helped us decide what to include in the final experience.
            </p>
        </div>
        <div className="container-wide">
            <img className="wireframe" src={require('../images/wireframe.png')} alt=""/>
        </div>
        <div className="container">
            <p className="case01__text">
                Let’s take a look at the final version of the home page. The pages are composed using fade-in animations for content pieces to make scrolling smoother.
            </p>
            <img className="ux-image" src={require('../images/gif/scroll.gif')} alt=""/>
            <p className="case01__text">
                Or you can launch the <a href="http://steelbeauty.london/" target="blank">live site</a> and browse it on your own.
            </p>
            <h3 className="case01__title-medium">
                Development
            </h3>
            <p className="case01__text">
                I developed the site using HTML, CSS(SASS), JavaScript, jQuery and brought all these nice designs to life. The website is made responsive for desktop, mobile and tablet.
            </p>  
                    
        </div>
        <Others />
    </div>
)

export default Case01