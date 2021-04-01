import React from 'react'

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6" p-25>
                    <h3>About Us</h3> 
               <h1>Welcome to Social Awareness Web Apllication</h1>
               <p>
                   This web application intends to aware general public regarding
                    various types of social issues such as Corruption, Rape, Drugs, 
                    Domestic violence, Unemployment, Gender equality, Beggary, Bullying, 
                    Mental health, Climate change, Racial discrimination and so on.
               </p>
               <div className="about__btn">
                   <a href="" className="btn btn-smart">
                       READ MORE
                   </a>
               </div>
                    </div>
                    <div className="col-6">
                        <div className="about__img">
                          <img src="/img/awareness.jpg" alt="corruption"/>  
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About
