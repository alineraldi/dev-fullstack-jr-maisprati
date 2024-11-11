import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    const goToAbout = () => {
        navigate('/about')
    }

    const goToServices = () => {
        navigate('/services')
    }

    const goToContact = () => {
        navigate('/contact')
    }

    const goHome = () => {
        navigate('/')
    
    }
    
    return(
        <div>
            <h1>Home</h1>

            <Link to="/about"><button onClick={goToAbout}>About us</button></Link>
            <Link to="/services"><button onClick={goToServices}>Services</button></Link>
            <Link to="/contact"><button onClick={goToContact}>Contact</button></Link>   
        </div>
    )
}

export default Home