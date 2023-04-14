import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";
import MainContainer from "./components/MainContainer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <MainContainer /> },
      { path: "/watch", element: <WatchPage /> }
    ]
  }
]);

function App() {
  return (
    <Provider store={store}>
      <Head />
      <RouterProvider router={router}>
        <Body />
      </RouterProvider>
    </Provider>
  );
}

export default App;
