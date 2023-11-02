import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { router } from "./router";
import { Header, Footer } from "@widgets";
import { store } from "@entities";
import { GlobalStyle } from "./global/style";

export default function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
      <Footer />
    </Provider>
  );
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
