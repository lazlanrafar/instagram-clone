import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<h1>Sign In</h1>} />

      <Route index path="/" element={<h1>Home</h1>} />
    </Routes>
  );
};
