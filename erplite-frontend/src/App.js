import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListUsersComponent from './components/ListUsersComponent';
import CreateItemComponent from './components/CreateItemComponent';
import CreateUserComponent from './components/CreateUserComponent';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ItemListComponent from './components/ItemListComponent';
import BaseUnitListComponent from './components/BaseUnitListComponent';
import CreateBaseUnitComponent from './components/CreateBaseUnitComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <Navbar/>
          <div className='container shadow p-3'>
          <Routes>
              <Route path = "/" exact element = {<Home/>}></Route>
              <Route path = "/users" element = {<ListUsersComponent/>}></Route>
              <Route path = "/item">
                <Route path = "itemlist" element = {<ItemListComponent/>}></Route>
                <Route path = ":id" element = {<CreateItemComponent/>}></Route>
                <Route path = "create-item" element = {<CreateItemComponent/>}></Route>
              </Route>
              <Route path = "/baseunit">
                <Route path = "baseunitlist" element = {<BaseUnitListComponent/>}></Route>
                <Route path = ":id" element = {<CreateBaseUnitComponent/>}></Route>
                <Route path = "create-baseunit" element = {<CreateBaseUnitComponent/>}></Route>
              </Route>
              <Route path = "/create-user" element = {<CreateUserComponent/>}></Route>
            </Routes>
            </div>

          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
