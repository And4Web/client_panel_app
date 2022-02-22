import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppNavbar from "../src/components/layouts/AppNavbar";
import DashBoard from "../src/components/layouts/DashBoard";
import { Provider } from "react-redux";
import { store, rrfProps } from "./store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <div className="App">
            <AppNavbar />
            <div className="container">
              <Routes>
                <Route exact path="/" element={<DashBoard />} />
                <Route exact path="/dashboard" element={<DashBoard />} />
              </Routes>
            </div>
          </div>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
