import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

import Countries from "./components/Countries";
import country from "./services/country";
import Header from "./components/Header";
const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const api_key = import.meta.env.VITE_SOME_KEY;

  useEffect(() => {
    country.getAll().then((initialCountries) => {
      setCountries(initialCountries);
    });
  }, []);

  return (
    <section>
      <Header />
      <div className="main-container">
        <h1>Countries and Weather</h1>
        <Card className="main-card">
          <Card.Body>
            <Card.Title>Find countries</Card.Title>
            <Card.Text>
              <input value={filter} onChange={(e) => setFilter(e.target.value)} />
            </Card.Text>

            <Countries countries={countries} filter={filter} setFilter={setFilter} api_key={api_key} />
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};

export default App;
