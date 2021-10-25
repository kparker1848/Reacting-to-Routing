import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="col-12 d-flex flex-wrap justify-content-center m-2">
            <Link to="/" className="btn btn-info text-light m-2">Home</Link>
            <Link to="/films" className="btn btn-info text-light m-2">Films</Link>
            <Link to="/people" className="btn btn-info text-light m-2">Characters</Link>
            <Link to="/locations" className="btn btn-info text-light m-2">Locations</Link>
        </nav>
    );
};

export default Navbar;