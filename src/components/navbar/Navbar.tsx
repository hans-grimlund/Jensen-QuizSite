import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
    return (
        <div className="my-navbar col-12 bg-dark d-flex align-items-center">
            <div className="col-4">
                
            </div>
            <div className="col-4 d-flex justify-content-center">
                <Link to="/" className='lead'>The Quiz Site</Link>
            </div>
            <div className="col-4">
                
            </div>
        </div>
    )
}