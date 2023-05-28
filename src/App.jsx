// import { Layout } from './components';
import { Home, List, Login, New, Single } from './pages/index';
import { Routes, Route } from 'react-router-dom';
import { productInputs, userInputs } from "./data/formSource";
import "./style/dark.scss"
import { useContext } from 'react';
import { DarkModeContext } from "./context/darkModeContext"

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Routes>
        <Route path='/' >
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />

          {/* Nested Routes for Users */}
          <Route path='users'>
            <Route index element={<List />} />
            <Route path=':userId' element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>

          {/* Nested Routes for Products */}
          <Route path='products'>
            <Route index element={<List />} />
            <Route path=':productId' element={<List />} />
            <Route
              path="new"
              element={<New inputs={productInputs} title="Add New Product" />}
            />
          </Route>

        </Route>
      </Routes>

      {/* <List/>
      <New/> */}
    </div>
  );
}

export default App;
