import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const LocationDetails = () => {
    const { locationid } = useParams();
    const [location, setLocation] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/locations/${locationid}`)
            .then(res => res.json())
            .then(location => setLocation(location))
            .catch(err => console.log(err))
    }, []);


    return (
        <main className="container d-flex flex-wrap justify-content-center">
            <div className="col-12 d-flex flex-wrap justify-content-center">
                <img className="col-4" src="https://media1.giphy.com/media/Uz4cDaGXPxeuY/giphy.gif" alt="Train window" />
                <h1 className="text-center col-12 m-5">Studio Ghibli</h1>
            </div>
            <div key={`location-id-${location?.id}`} className="card shadow p-3 mb-5 bg-body rounded col-4 m-4">
                <div className="card-body">
                    <h4 className="card-title text-center text-decoration-underline">{location?.name}</h4>
                    <p className="card-text">Climate: {location?.climate}</p>
                    <p className="card-text">Terrain: {location?.terrain}</p>
                </div>
            </div>

            <div className="col-12 mb-5 text-center">
                <Link to={`/locations`} className="btn btn-info text-light">Back to Locations
                </Link>
            </div>

        </main>
    );
};

export default LocationDetails;