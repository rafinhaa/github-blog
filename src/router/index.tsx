import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layouts/defaultLayout";

import { Home } from "../pages/Home";
import { Post } from "../pages/Post";

export const Router = () => (
  <Routes>
    <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<Post />} />
    </Route>
  </Routes>
);
