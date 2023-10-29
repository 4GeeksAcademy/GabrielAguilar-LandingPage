import React from "react";

const Jumbotron = () => {
  return (
    <div className="bg-light p-5 rounded">
      <h1>The  Best</h1>
      <p className="lead">
      Si bien es difícil establecer comparaciones entre jugadores de diferentes épocas, este tipo de rankings históricos sirven para ver el deporte con perspectiva y darse cuenta del impacto que tienen algunos futbolistas, tanto para aficionados contemporáneos como con el paso de los años.
      </p>
      <a
        className="btn btn-lg btn-primary"
        href="/docs/5.0/components/navbar/"
        role="button"
      >
        Call to action!
      </a>
    </div>
  );
};

export default Jumbotron;