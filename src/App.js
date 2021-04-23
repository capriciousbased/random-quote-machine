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

  const getNewQuotes = () => {
    let randIndex = Math.floor(Math.random() * quotes.length);
    setrandomQuotes(quotes[randIndex]);
  };

  return (
    <div id="quote-box">
      <div className="quote-item" >
        <div>
          {randomQuotes ? (
            <>
              <h2 id="text">&quot;{randomQuotes.text}&quot;</h2>
              <p id="author">-- {randomQuotes.author}</p>
            </>
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
        <div className="quote-button">
          <a id="tweet-quote"
            href={encodeURI(
              `https://twitter.com/intent/tweet?text=${randomQuotes.text}&hashtags=thewebdevcoach`
            )}
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href={encodeURI(
              `https://tumblr.com/widgets/share/tool?posttype=quote&tag=quotes,text=${randomQuotes.text}&hashtags=thewebdevcoach`
            )}
          >
            <i class="fab fa-tumblr-square"></i>
          </a>
          <button id="new-quote" onClick={getNewQuotes}>New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
