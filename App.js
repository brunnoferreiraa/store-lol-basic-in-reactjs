import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {

  const [dados, setdados] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3000/static/prices.json')
    .then((response) => response.json())
    .then(setdados);

  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  

  return (
    <div className="container">
      <div className="logo">
       
      </div>
      <div className="carousel" ref={carousel}>
        {dados.map((item) => {
          const {id, name, price, oldPrice, image} = item;
          return (
        <div className="item" key={id}>
          <div className="image">
            <img src= {image} alt= {name} />
          </div>
          <div className="info-skins">
            <span className="name">{name}</span>
            <span className="oldPrince">R$ {oldPrice}</span>
            <span className="price">R$ {price}</span>
          </div>
        </div>
        );
        })}
      </div>
      <div className="button">
        
        <button onClick={handleLeftClick}>
          <img img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Left"/></button>
       
        <button onClick={handleRightClick}
        ><img img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Right"/></button>
      </div>
    </div>
    
  );
}

export default App;
