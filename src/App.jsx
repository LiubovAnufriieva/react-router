import { Route, Routes,  } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from "./pages/ProductDetails ";
import NotFound from './pages/NotFound';
import css from './App.module.css';
import { AppBar } from "./components/AppBar";
import { Mission } from './components/Mission';
import { Team } from './components/Team';
import { Reviews } from './components/Reviews';

export const App = () => {
  return (
    <div className={css.container}>
      <AppBar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />}/>
          <Route path="team" element={<Team />}/>
          <Route path="reviews" element={<Reviews />}/>
        </Route>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:productId" element={<ProductDetails />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
};