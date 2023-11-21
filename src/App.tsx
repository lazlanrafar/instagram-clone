import { Route, Routes } from "react-router-dom";
import { LayoutApp, LayoutAuth } from "./layouts";
import { HomePage, SignInPage, SignUpPage } from "./pages";

export const App = () => {
  return (
    <Routes>
      <Route element={<LayoutAuth />}>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Route>

      <Route element={<LayoutApp />}>
        <Route index path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
