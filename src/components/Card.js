import React from "react";

function Card() {
  return (
    <div className="props">
      <div className="d-flex flex-wrap">
        <div className="card w-25 m-2">
          <img
            src="https://img.freepik.com/photos-premium/illustration-fantastique-du-bel-environnement-naturel_492154-5336.jpg?size=626&ext=jpg" // Remplacez par le chemin de votre image
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">art 1</h5>
            <p className="card-text">
              Monde Fantastique Avec Un Magnifique Paysage D'environnement
              Naturel
            </p>
            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
        <div className="card w-25 m-2">
          <img
            src="https://img.freepik.com/photos-premium/monde-fantastique-magnifique-paysage-environnement-naturel_492154-5738.jpg" // Remplacez par le chemin de votre image
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">art 2</h5>
            <p className="card-text">
              Monde Fantastique Avec Un Magnifique Paysage D'environnement
              Naturel
            </p>
            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
        <div className="card w-25 m-2">
          <img
            src="https://img.freepik.com/photos-premium/assis-tranquillement-herbe-fraiche-dans-ciel-nocturne_492154-5526.jpg?size=626&ext=jpg" // Remplacez par le chemin de votre image
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">art 3</h5>
            <p className="card-text">
              Monde Fantastique Avec Un Magnifique Paysage D'environnement
              Naturel
            </p>
            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Card;
