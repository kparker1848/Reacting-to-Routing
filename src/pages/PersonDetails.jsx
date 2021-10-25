import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PersonDetails = () => {
    const { personid } = useParams();
    const [person, setPerson] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${personid}`)
            .then(res => res.json())
            .then(person => setPerson(person))
            .catch(err => console.log(err))
    }, []);


    return (
        <main className="container d-flex flex-wrap justify-content-center">
            <div className="col-12 d-flex flex-wrap justify-content-center">
                <img className="col-4" src="https://64.media.tumblr.com/a2c7267b99f34f1e9fbe2ca65f801ae1/3e6a8ea646afc9c3-7e/s540x810/b8533fb27d00270ad68233695f22c48f62a96f14.gifv" alt="Animal ears in tall grass" />
                <h1 className="text-center col-12 m-5">Studio Ghibli</h1>
            </div>
            <div key={`people-id-${person?.id}`} className="card shadow p-3 mb-5 bg-body rounded col-4 m-4">
                <div className="card-body">
                    <h4 className="card-title text-center text-decoration-underline">{person?.name}</h4>
                    <p className="card-text">Age: {person?.age}</p>
                    <p className="card-text">Gender: {person?.gender}</p>
                    <p className="card-text">Hair Color: {person?.hair_color}</p>
                    <p className="card-text">Eye Color: {person?.eye_color}</p>

                </div>
            </div>

            <div className="col-12 mb-5 text-center">
                <Link to={`/people`} className="btn btn-info text-light">Back to Characters
                </Link>
            </div>

        </main>
    );
};

export default PersonDetails;