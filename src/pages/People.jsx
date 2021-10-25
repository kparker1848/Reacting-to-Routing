import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const People = () => {
    const [allPeople, setPeople] = useState([]);

    useEffect(() => { }, [
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(allPeople => setPeople(allPeople))
            .catch(err => console.log(err))
    ]);

    return (
        <main className="container">
            <div className="col-12 d-flex flex-wrap justify-content-center">
                <img className="col-4" src="https://64.media.tumblr.com/a2c7267b99f34f1e9fbe2ca65f801ae1/3e6a8ea646afc9c3-7e/s540x810/b8533fb27d00270ad68233695f22c48f62a96f14.gifv" alt="Animal ears in tall grass" />
            </div>
            <h1 className="text-center m-5">Studio Ghibli</h1>
            <div className="container d-flex flex-wrap justify-content-center">
                <div>
                    <ul className="col-12 d-flex flex-wrap justify-content-evenly">
                        {allPeople.map((people) => (
                            <div key={`people-id-${people.id}`} className="card text-center shadow p-3 mb-5 bg-body rounded col-4 m-4">
                                <div className="card-body">
                                    <h4 className="card-title text-decoration-underline">{people.name}</h4>
                                    <Link to={`/people/${people.id}`} className="btn btn-info text-light">More Info
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

export default People;