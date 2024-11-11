import { Link, useNavigate } from 'react-router-dom'

function Contact() {
    return(
        <div>
            <h1>Contact</h1>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" required></input>

                <label htmlFor="email">Email:</label>
                <input type="text" required></input>

                <label htmlFor="telephone">Phone number:</label>
                <input type="tel" required></input>

                <label htmlFor="message">Message</label>
                <textarea id="message" required></textarea>

                <button type="submit">Send</button>
            </form>

            <Link to="/"><button>Home</button></Link>
            <Link to="/about"><button>About us</button></Link>
            <Link to="/services"><button>Services</button></Link>  
        </div>
    )
}

export default Contact