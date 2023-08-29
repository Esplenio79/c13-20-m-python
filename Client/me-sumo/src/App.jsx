import "./App.css";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Landing from "./views/Landing";
import Interests from "./views/Interests";

function App() {
  return (
    <Provider store={store}>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/home" element={<Landing />} />
          <Route path="/interests" element={<Interests />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
