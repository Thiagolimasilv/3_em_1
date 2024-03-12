import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState('ageCalculator');
  const [birthYear, setBirthYear] = useState('');
  const [base, setBase] = useState('');
  const [height, setHeight] = useState('');
  const [sideA, setSideA] = useState('');
  const [sideB, setSideB] = useState('');
  const [ageResult, setAgeResult] = useState('');
  const [triangleAreaResult, setTriangleAreaResult] = useState('');
  const [squareAreaResult, setSquareAreaResult] = useState('');

  const showPage = (pageId) => {
    setPage(pageId);
  };

  const calculateAge = () => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    setAgeResult(`Idade: ${age} anos`);
  };

  const calculateTriangleArea = () => {
    const area = 0.5 * base * height;
    setTriangleAreaResult(`Área do Triângulo: ${area}`);
  };

  const calculateSquareArea = () => {
    const area = sideA * sideB;
    setSquareAreaResult(`Área do Quadrado: ${area}`);
  };

  return (
    <div>
      <header style={{ backgroundColor: '#0080ff', color: '#6c1919', padding: '20px 0', textAlign: 'center', marginBottom: '20px' }}>
        <h1>Calculadora</h1>
      </header>
      <nav style={{ backgroundColor: '#6c1919', padding: '10px', textAlign: 'center', borderBottom: '2px solid #6c1919', marginBottom: '20px' }}>
        <a href="#" onClick={() => showPage('ageCalculator')} style={{ textDecoration: 'none', color: '#0080ff', margin: '0 20px', fontSize: '18px' }}>Idade</a>
        <a href="#" onClick={() => showPage('triangleArea')} style={{ textDecoration: 'none', color: '#0080ff', margin: '0 20px', fontSize: '18px' }}>Área do Triângulo</a>
        <a href="#" onClick={() => showPage('squareArea')} style={{ textDecoration: 'none', color: '#0080ff', margin: '0 20px', fontSize: '18px' }}>Área do Quadrado</a>
      </nav>

      {page === 'ageCalculator' && (
        <section style={{ padding: '20px', backgroundColor: '#ffdd00', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
          <h2>Calculadora de Idade</h2>
          <input type="number" value={birthYear} onChange={(e) => setBirthYear(e.target.value)} placeholder="Ano de Nascimento" style={{ width: 'calc(100% - 40px)', padding: '10px', margin: '10px 0', border: '1px solid #6c1919', borderRadius: '5px' }} />
          <button onClick={calculateAge} style={{ backgroundColor: '#0080ff', color: '#6c1919', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>Calcular</button>
          <p>{ageResult}</p>
        </section>
      )}

      {page === 'triangleArea' && (
        <section style={{ padding: '20px', backgroundColor: '#ffdd00', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
          <h2>Área do Triângulo</h2>
          <input type="number" value={base} onChange={(e) => setBase(e.target.value)} placeholder="Base" style={{ width: 'calc(100% - 40px)', padding: '10px', margin: '10px 0', border: '1px solid #6c1919', borderRadius: '5px' }} />
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Altura" style={{ width: 'calc(100% - 40px)', padding: '10px', margin: '10px 0', border: '1px solid #6c1919', borderRadius: '5px' }} />
          <button onClick={calculateTriangleArea} style={{ backgroundColor: '#0080ff', color: '#6c1919', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>Calcular</button>
          <p>{triangleAreaResult}</p>
        </section>
      )}

      {page === 'squareArea' && (
        <section style={{ padding: '20px', backgroundColor: '#ffdd00', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
          <h2>Área do Quadrado</h2>
          <input type="number" value={sideA} onChange={(e) => setSideA(e.target.value)} placeholder="Lado A" style={{ width: 'calc(100% - 40px)', padding: '10px', margin: '10px 0', border: '1px solid #6c1919', borderRadius: '5px' }} />
          <input type="number" value={sideB} onChange={(e) => setSideB(e.target.value)} placeholder="Lado B" style={{ width: 'calc(100% - 40px)', padding: '10px', margin: '10px 0', border: '1px solid #6c1919', borderRadius: '5px' }} />
          <button onClick={calculateSquareArea} style={{ backgroundColor: '#0080ff', color: '#6c1919', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>Calcular</button>
          <p>{squareAreaResult}</p>
        </section>
      )}
    </div>
  );
}

export default App;
