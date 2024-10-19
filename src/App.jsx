import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import { API } from "./assets/data.js";

function App() {
  const getCardId = () => crypto.randomUUID();

  const [fetchedData, setFetchedData] = useState(null);
  const [cards, setCards] = useState([]);

  const fetchPictures = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setFetchedData(data);

      const cardsData = data.data.map((item) => ({
        name: item.title.replace(/GIF by .+$/, "").trim(),
        image: item.images.original.url,
        id: getCardId(),
      }));
      setCards(cardsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPictures();
  }, []);

  return (
    <>
      <div className="pageContents">
        <h1>Memory Card Game</h1>
        <header>
          <span>Current Score:</span>
          <span>Personal Best:</span>
        </header>
        <div className="gameboard">
          {cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              image={card.image}
              name={card.name}
            />
          ))}
        </div>
        <button onClick={() => console.log(fetchedData)}>Get Pictures</button>
      </div>
    </>
  );
}

export default App;
