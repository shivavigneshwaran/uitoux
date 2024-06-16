import './App.css';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from "./Components/Shop";
import { CircularProgress } from '@chakra-ui/react';
import { fetchProduct,fetchBrands} from "./redux/productReducer";
import Error404 from "./Components/Error/Error";
import Footer from './Components/Footer/Footer';

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state?.products?.status);
  const error = useSelector((state) => state?.products?.error);

  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchBrands());

    console.log('parentcomponent');
  }, [dispatch]);

  if (status === 'loading') {
    return (
      <div className="loading-container">
        <CircularProgress isIndeterminate color='green.300' />
      </div>
    );
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={status === 'loading' ? 'blur-background' : ''}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          {/* <Route path='*' element={<Error404 />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
