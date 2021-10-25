import React from 'react';

const Home = () => {
    return (
        <main className="container">
            <div className="col-12 d-flex flex-wrap justify-content-center">
                <img className="col-12" src="https://www.fanboy.com/wp-content/uploads/2013/07/Studio-noscale.jpg" alt="Ghibli Films Years" />
            </div>
            <h1 className="text-center m-5">Studio Ghibli</h1>
            <div className="container d-flex flex-wrap justify-content-center">
                <div className="col-6 d-flex justify-content-evenly">
                </div>
                <div className="col-12 d-flex m-5 justify-content-center">

                    <div className="card shadow p-3 mb-5 bg-body rounded col-4">
                        <div className="card-body">
                            <h4 className="m-5 text-center">Welcome to the Ghibli Routing Lab!</h4>
                        </div>
                    </div>

                </div>
            </div>

        </main>
    );
};

export default Home;