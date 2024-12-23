import React, { useState } from 'react';
import './App.css';

function App() {
  const [refractiveIndex, setRefractiveIndex] = useState(0);
  const [sodium, setSodium] = useState(0);
  const [magnesium, setMagnesium] = useState(0);
  const [aluminum, setAluminum] = useState(0);
  const [silicon, setSilicon] = useState(0);
  const [potassium, setPotassium] = useState(0);
  const [calcium, setCalcium] = useState(0);
  const [barium, setBarium] = useState(0);
  const [iron, setIron] = useState(0);
  const [prediction, setPrediction] = useState(null);

  const predictGlass = () => {
    fetch('http://yourbackendurl/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        refractive_index: refractiveIndex,
        Sodium: sodium,
        Magnesium: magnesium,
        Aluminum: aluminum,
        Silicon: silicon,
        Potassium: potassium,
        Calcium: calcium,
        Barium: barium,
        Iron: iron
      })
    })
    .then(response => response.json())
    .then(data => {
      setPrediction(data.predictedGlass);
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div className="App">
      <h1>GLASS Prediction</h1>
      <div className="input-container">
        <h2>Input Features</h2>
        <div className="input-box">
          <label>Refractive Index:</label>
          <input type="number" value={refractiveIndex} onChange={e => setRefractiveIndex(e.target.value)} />
        </div>
        <div className="input-box">
          <label>Sodium:</label>
          <input type="number" value={sodium} onChange={e => setSodium(e.target.value)} />
        </div>
        <div className="input-box">
          <label>Magnesium:</label>
          <input type="number" value={magnesium} onChange={e => setMagnesium(e.target.value)} />
        </div>
        <div className="input-box">
          <label>Aluminum:</label>
          <input type="number" value={aluminum} onChange={e => setAluminum(e.target.value)} />
        </div>
        <div className="input-box">
          <label>Silicon:</label>
          <input type="number" value={silicon} onChange={e => setSilicon(e.target.value)} />
        </div>
        <div className="input-box">
          <label>Potassium:</label>
          <input type="number" value={potassium} onChange={e => setPotassium(e.target.value)} />
        </div>
        <div className="input-box">
          <label>Calcium:</label>
          <input type="number" value={calcium} onChange={e => setCalcium(e.target.value)} />
        </div>
        <div className="input-box">
          <label>Barium:</label>
          <input type="number" value={barium} onChange={e => setBarium(e.target.value)} />
        </div>
        <div className="input-box">
          <label>Iron:</label>
          <input type="number" value={iron} onChange={e => setIron(e.target.value)} />
        </div>
        <button onClick={predictGlass}>Predict</button>
      </div>
      {prediction && <p className="prediction">Predicted Glass: {prediction}</p>}
    </div>
  );
}

export default App;

