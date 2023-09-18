import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Details from './components/details/Details';
import Layout from './components/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="details" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default App;
