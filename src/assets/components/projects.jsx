import React from "react";
import { motion } from "framer-motion"

function Projects() {
    return (
        <>
            <div className="proheading">
                <h1>What I’ve Built</h1>
            </div>
            <br />
            <br />
            <div className="projectdes1" style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <img src="/images/recipesite.png" style={{ marginLeft: "100px"  }} />
                <div style={{ marginTop: "100px" , marginRight:"50px"  }}>The "Flavoursome Recipes" website is a culinary platform designed to inspire
                    cooking enthusiasts by offering a diverse collection of recipes. It features a
                    user-friendly interface with sections such as featured recipes, categories, and detailed
                    recipe instructions, ensuring that both novice and experienced chefs can easily
                    navigate and discover new cooking ideas.
                    </div>
                
            </div>
            <div className="projectdes2" style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <img src="/images/omni.png" style={{ height: "400px", width: "670px", marginLeft: "100px" }} />
                <div style={{ marginLeft: "15px" , marginTop: "100px" , marginRight:"50px"  }}>Omnifood is a modern food 
                delivery service that offers a personalized and healthy dining experience. 
                The website showcases the platform's features, including AI-powered meal planning, 
                organic ingredients, and convenient delivery options. It includes sections 
                for how it works, meal options, 
                testimonials, pricing plans, and a call to action to sign up. </div>
            </div>
            
        </>
    )
}
export default Projects;