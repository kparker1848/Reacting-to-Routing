import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const FilmDetails = () => {
    const { filmid } = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
            .then(res => res.json())
            .then(film => setFilm(film))
            .catch(err => console.log(err))
    }, []);


    return (
        <main className="container d-flex flex-wrap justify-content-center">
            <div key={`film-id-${film?.id}`} className="card shadow p-3 mb-5 bg-body rounded col-4 m-4">
                <img src={film?.image} alt="..." className="card-img-top" />
                <div className="card-body">
                    <h4 className="card-title text-center text-decoration-underline">{film?.title}</h4>
                    <h6 className="text-center fst-italic">{film?.original_title_romanised}</h6>
                    <h6 className="text-center">{film?.original_title}</h6>
                    <h6 className="text-center fw-bolder">{film?.release_date}</h6>
                    <p className="card-text">{film?.description}</p>
                </div>
            </div>
            <div className="col-12 mb-5 text-center">
                <Link to={`/films`} className="btn btn-info text-light">Back to Films
                </Link>
            </div>

        </main>
    );
};

export default FilmDetails;