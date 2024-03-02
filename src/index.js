import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./store";
import reportWebVitals from "./reportWebVitals";
import 'react-photo-view/dist/react-photo-view.css';
// ----------CSS----------
import "../src/assets/css/bootstrap.css";
import "../src/assets/css/style.css";
import "../src/assets/css/responsive.css";
import "../src/assets/css/animate.css";
import "../src/assets/css/color.css";
import "../src/assets/css/custom-animate.css";
import "../src/assets/css/elpath.css";
import "../src/assets/css/flaticon.css";
import "../src/assets/css/fontawesome-all.css";
import "../src/assets/css/jquery.fancybox.min.css";
import "../src/assets/css/nice-select.css";
import "../src/assets/css/jquery-ui-1.9.2.custom.min.css";
import "../src/assets/css/owl.css";
import "../src/assets/css/rtl.css";
import "../src/assets/css/scrollbar.css";
import "../src/assets/css/swiper.min.css";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

let persistor = persistStore(store);
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
//   <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
//   </React.StrictMode>

);

reportWebVitals();
