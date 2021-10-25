import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Films = () => {
    const [allFilms, setAllFilms] = useState([]);

    useEffect(() => { }, [
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(allFilms => setAllFilms(allFilms))
            .catch(err => console.log(err))
    ]);

    return (
        <main className="container">
            <div className="col-12 d-flex flex-wrap justify-content-center">
                <img className="col-4" src="https://data.whicdn.com/images/350711764/original.gif" alt="Birds flying" />
            </div>
            <h1 className="text-center m-5">Studio Ghibli</h1>
            <div className="container d-flex flex-wrap justify-content-center">
                <div >
                    <ul className="col-12 d-flex flex-wrap justify-content-evenly">
                        {allFilms.map((films) => (
                            <div key={`film-id-${films.id}`} className="card text-center shadow p-3 mb-5 bg-body rounded col-4 m-4">
                                <img src={films.movie_banner} alt="..." className="card-img-top" />
                                <div className="card-body">
                                    <h4 className="card-title text-decoration-underline">{films.title}</h4>
                                    <Link to={`/films/${films.id}`} className="btn btn-info text-light">More Info
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

export default Films;