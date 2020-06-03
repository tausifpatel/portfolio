import React from "react"

import Layout from "../components/layout"
import Project from "../components/project"
import Design from "../components/design"
import Design2 from "../components/design2"
import Technologies from "../components/technologies"
import Gallery from "../components/gallery"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Mixtape from "../components/mixtape"
import Hero from "../components/hero"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero />  

    <div id="projects">
      <p className="projects__text container"> &darr; Projects &darr; </p>
      <Project 
        title="Steel Beauty"
        link="http://steelbeauty.london/"
        image={require('../images/Steel Beauty-1.png')}
        description="Designed and Developed fully functional responsive website based on Business Requirements using HTML5, CSS3(SASS), JavaScript and JQuery, along with branding. Researched industry trends and websites to provide top quality design,  developed a website mock-ups to ensure quality control and client satisfaction before project development phase. 
        Executed and monitored standards for user interfaces, page design and graphics development."
        github="https://github.com/tausifpatel/steelbeauty"
        caseStudy="/steelbeauty"
      />
      <Project
        title="Fontination"
        link="https://tausifpatel.github.io/fontination/"
        image={require('../images/fontination.png')}
        description="Typography of a website is a very crucial component of its design. It plays an important role expressing message the website wants to convey. From the the UX design perspective, good typography undoubtedly plays a central part.
        Find some of my favourite google font combinations to make your wesbites standout. Double click on a text to copy and paste your own content in to see what it looks like with these font combinations."
        github="https://github.com/tausifpatel/fontination"
      />
      <Project 
        title="Gradients"
        link="https://tausifpatel.github.io/gradients/"
        image={require('../images/grad.png')}
        description="Gradients made a comeback in recent years and the trend is expected to be continued, yet diversified. More gradient innovations can be discovered on many modern websites, particularly with the use of bright and vivid colours in combination with a variety of textures.

        I have written a snippet where you can pick the css code for the gradient of your choice or modify the colours and grab the code.
        "
        github="https://github.com/tausifpatel/gradients"
      />
      <Project
        title="Master Marquees"
        link="http://www.mastermarquees.com/"
        image={require('../images/mastermarquees.png')}
        description="
        Learning new skills is exciting, however it gets daunting when we actually try to put everything together what we have learnt. To taste the waters, I grabbed an opportunity to build very first website from the scratch."
      />
      <Project
        title="Swimshield"
        link="http://swimshield.co.uk/"
        image={require('../images/swimshield.png')}
        description="A small project designed and developed within few hours for a start-up to pitch the basic idea about their product in a presentation."
        github=""
      />

    <div>
      <Technologies 
        icon1="icon-html5-brands"
        icon2="icon-css3-alt-brands"
        icon3="icon-js-square-brands"
        icon4="icon-react-brands-2"
        icon5="icon-bootstrap-brands"
        icon6="icon-figma-brands"
        icon7="icon-gulp-brands"
      />
    </div>

    <p className="projects__text container"> &darr; Design Projects &darr; </p>

      <Design 
        title="Weekend"
        link="/weekend"
        image={require('../images/weekend.png')}
        description="A concept design for a bloggin wesbite to explore curated content related to Travel, Tech, Automotives and videos"
        github=""
        caseStudy="/weekend"
      />
      <Design2 
        title="Movies"
        link="/movies"
        image={require('../images/project03/app.png')}
        description="Concept for an app where you can discover movies and TV shows, to watch them later and share your list with friends and family"
        github=""
        caseStudy="/movies"
      />
      <Project 
        title="Uber"
        link="/uber"
        image={require('../images/project04/uber-1.png')}
        description="Uberpool website redesign concept"
        github=""
        caseStudy="/uber"
      />
    </div>


    <div>
      <Gallery />
    </div>

    <div>
    <p className="projects__text container"> &darr; Mixtape &darr; </p>
      <Mixtape 
        image={require('../images/venyl1.png')}
        title="coldplay"
        text="My favorite tracks I have on repeat from Coldplay"
        link="https://open.spotify.com/user/spotify/playlist/37i9dQZF1DXaQm3ZVg9Z2X?si=dD1QFhhJSL-nAaQQtfdMVA"
      />
    </div>

    <div>
      <Footer 
        icon8="icon-github-brands"
        icon9="icon-dribbble-brands"
        icon10="icon-twitter-brands"
        icon11="icon-instagram-brands"        
      />
    </div>
  </Layout>
)

export default IndexPage
