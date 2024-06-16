import Home from "./components/Home/Home";
import ArticleDetails from "./components/ArticleDetails/ArticleDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article-details/:id" element={<ArticleDetails />} />
      </Routes>
    </div>
  );
}

export default App;
