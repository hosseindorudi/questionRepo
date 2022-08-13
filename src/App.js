import './App.css';
import { Route, Routes } from "react-router-dom";
import QuestionPage from './questionPage/QuestionPage';

function App() {
  return (
    <>
    <Routes>
      <Route  path="/poll" element={<QuestionPage />} />


    </Routes>
    </>
  )
}

export default App;
