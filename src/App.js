import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuotes, setrandomQuotes] = useState([]);

  async function fetchQuote() {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    setQuotes(data);
    let randIndex = Math.floor(Math.random() * data.length);
    setrandomQuotes(data[randIndex]);
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id="quote-box">
      <div className="quote-item">
        <div>
          {randomQuotes ? (
            <>
              <h2>{randomQuotes.text}</h2>
              <p>-- {randomQuotes.author}</p>
            </>
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
