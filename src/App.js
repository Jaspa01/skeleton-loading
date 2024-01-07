import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Skeleton from './components/Skeleton';

function App() {

  const [loading, isLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      isLoading(false);
    }, 1000)
  }, [])

  return (
    <div className="app">
      {loading ? <Skeleton /> : <Card />}
    </div>
  );
}

export default App;
