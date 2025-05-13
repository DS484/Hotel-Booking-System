import logo from './logo.svg';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';


const App = () => {

  return (
    <div className="App">

      <ToastContainer
        position="top-right"
        autoClose={3000}
        style={{ height: '100px', width: '400px' }}
        hideProgressBar={123}
        style={{ height: '100px', width: '400px', marginTop: '100px' }}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />

      <Outlet />
    </div>
    
  );
}

export default App;
