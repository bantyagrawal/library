import './App.css';
import LoginComponent from './components/LoginComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavComponent from './components/NavComponent';
import HomeComponent from './components/HomeComponent';
import SignupComponent from './components/SignupComponent';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store/store';
import { PersistGate } from 'redux-persist/integration/react'
import { Auth } from './components/Auth';
import { BookComponent } from './components/BookComponent';
import { IssuedBookComponent } from './components/IssuedBookComponent';
import AdminLoginComponent from './components/AdminLoginComponent';
import DetailComponent from './components/DetailComponent';
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>  
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<NavComponent />} >
              <Route index element={<HomeComponent />} />
              <Route path='login' element={<LoginComponent />} />
              <Route path='signup' element={<SignupComponent />} />
              <Route path='book' element={<Auth><BookComponent/></Auth>} />
              <Route path='issuedbook' element={<Auth><IssuedBookComponent/></Auth>} />
              <Route path='adminlogin' element={<AdminLoginComponent/>} />
              <Route path='allusers' element={<DetailComponent/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
