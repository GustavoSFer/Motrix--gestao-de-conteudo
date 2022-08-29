import React from 'react';

function CardBlog() {
  // Css - style
  const width = {
    width: '18em',
  };

  return (
    <div className="card m-2" style={width}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to bucontent.
          Some quick example text to bucontent.Some quick example text to bucontent.
          Some quick example text to bucontent.
          Some quick example text to bucontent.
        </p>
        <a href="#1" className="card-link">Card link</a>
        <a href="#2" className="card-link">Another link</a>
        <div>
          <time>criado</time>
          <time>atualizado</time>
        </div>
      </div>
    </div>
  );
}

export default CardBlog;
