import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Home";
import Layout from "../Layout";
import Post from "../components/PostDetail";
// import About from '../pages/About';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/post/:postId" element={<Post />} />

          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
