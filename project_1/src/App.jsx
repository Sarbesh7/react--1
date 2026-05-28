import React from 'react'
import Cards from './components/cards.jsx'
import './App.css'


const services = [
  {
    logo: "https://example.com/logo1.png",
    title: "Web Development",
    description: "Build responsive and modern websites using latest technologies."
  },
  {
    logo: "https://example.com/logo2.png",
    title: "Mobile App Design",
    description: "Create user-friendly mobile applications for Android and iOS."
  },
  {
    logo: "https://example.com/logo3.png",
    title: "UI/UX Design",
    description: "Design clean and attractive interfaces for better user experience."
  },
  {
    logo: "https://example.com/logo4.png",
    title: "Digital Marketing",
    description: "Promote brands effectively using SEO and social media strategies."
  },
  {
    logo: "https://example.com/logo5.png",
    title: "Cloud Hosting",
    description: "Secure and scalable cloud hosting solutions for businesses."
  },
  {
    logo: "https://example.com/logo6.png",
    title: "Graphic Design",
    description: "Create professional graphics, banners, and branding materials."
  },
  {
    logo: "https://example.com/logo7.png",
    title: "E-Commerce Solutions",
    description: "Develop powerful online stores with payment integration."
  },
  {
    logo: "https://example.com/logo8.png",
    title: "Cyber Security",
    description: "Protect systems and networks from digital attacks and threats."
  },
  {
    logo: "https://example.com/logo9.png",
    title: "AI Integration",
    description: "Integrate artificial intelligence features into modern applications."
  },
  {
    logo: "https://example.com/logo10.png",
    title: "Data Analytics",
    description: "Analyze business data to gain insights and improve decisions."
  }
]



const App = () => {
  return (
    <>


    <div className="parent">
      
     
      {services.map((service) => (
        <Cards
          logo={service.logo}
          title={service.title}
          description={service.description}
        />
      ))}
    </div> 



  </>
  )
}

export default App