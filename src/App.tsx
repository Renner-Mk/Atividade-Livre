import { RouterProvider } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalSyles";
import { router } from "./router/router";
import { ThemeProvider } from "styled-components";
import light from "./themes/light";

export function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
