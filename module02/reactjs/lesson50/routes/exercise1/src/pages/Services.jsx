import { Link, useNavigate } from 'react-router-dom'
import Home from './Home'

function Services() {
    return(
        <div>
            <ul>
                <li>Service 1
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, minima.</p></li>

                <li>Service 2
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></li>
            </ul>

            <Link to="/"><button>Home</button></Link>
            <Link to="/about"><button>About us</button></Link>
            <Link to="/contact"><button>Contact</button></Link>  
        </div>
    )
}

export default Services