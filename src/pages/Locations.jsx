import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Locations = () => {
    const [allLocations, setAllLocations] = useState([]);

    useEffect(() => { }, [
        fetch("https://ghibliapi.herokuapp.com/locations")
            .then(res => res.json())
            .then(allLocations => setAllLocations(allLocations))
            .catch(err => console.log(err))
    ]);

    return (
        <main className="container">
            <div className="col-12 d-flex flex-wrap justify-content-center">
                <img className="col-4" src="https://media1.giphy.com/media/Uz4cDaGXPxeuY/giphy.gif" alt="Train window" />
            </div>
            <h1 className="text-center m-5">Studio Ghibli</h1>
            <div className="container d-flex flex-wrap justify-content-center">
                <div >
                    <ul className="col-12 d-flex flex-wrap justify-content-evenly">
                        {allLocations.map((locations) => (
                            <div key={`locations-id-${locations.id}`} className="card text-center shadow p-3 mb-5 bg-body rounded col-4 m-4">
                                <div className="card-body">
                                    <h4 className="card-title text-decoration-underline">{locations.name}</h4>
                                    <Link to={`/locations/${locations.id}`} className="btn btn-info text-light">More Info
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default Locations;