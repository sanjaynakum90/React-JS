import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [currencies, setCurrencies] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://api.exchangerate.host/symbols")
      .then(res => res.json())
      .then(data => setCurrencies(Object.keys(data.symbols)));
  }, []);

  const convert = () => {
    setLoading(true);
    fetch(`https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`)
      .then(res => res.json())
      .then(data => {
        setResult(data.result.toFixed(2));
        setLoading(false);
      });
  };

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="container">
      <div className="converter-card">
        <h2 className="title">
          <span className="emoji">💱</span> Currency Converter
        </h2>
        <div className="input-container">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            className="amount-input"
            placeholder="Enter amount"
            min="0"
          />
        </div>
        <div className="selectors">
          <div className="currency-box">
            <label>From</label>
            <select 
              value={fromCurrency} 
              onChange={e => setFromCurrency(e.target.value)}
              className="currency-select"
            >
              {currencies.map(cur => (
                <option key={cur} value={cur}>{cur}</option>
              ))}
            </select>
          </div>
          <button 
            className="swap-button" 
            onClick={handleSwapCurrencies}
            title="Swap currencies"
          >
            ⇄
          </button>
          <div className="currency-box">
            <label>To</label>
            <select 
              value={toCurrency} 
              onChange={e => setToCurrency(e.target.value)}
              className="currency-select"
            >
              {currencies.map(cur => (
                <option key={cur} value={cur}>{cur}</option>
              ))}
            </select>
          </div>
        </div>
        <button 
          onClick={convert} 
          className="convert-button"
          disabled={loading}
        >
          {loading ? 'Converting...' : 'Convert Now'}
        </button>
        {result && (
          <div className="result">
            <p>
              {amount} {fromCurrency} = 
              <span className="converted-amount">
                {result} {toCurrency}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;