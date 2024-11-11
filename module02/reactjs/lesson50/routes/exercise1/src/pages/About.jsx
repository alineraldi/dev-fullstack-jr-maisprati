import { Link, useNavigate } from 'react-router-dom'

function About() {
    return(
        <div>
        <h1>About us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus sint porro quod? Eos inventore esse, tempore velit itaque totam repellendus illum, obcaecati sit enim numquam corrupti fuga! Quos, fugit rerum?</p>
        
        <Link to="/"><button>Home</button></Link>
        <Link to="/services"><button>Services</button></Link>
        <Link to="/contact"><button>Contact</button></Link>  
        
        </div>
    )
}

export default About