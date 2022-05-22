import React from "react";
import { store } from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";

const App = () => (
    <ReduxProvider store={store}>
        <h5> Redux Setup </h5>
    </ReduxProvider>
);

export default App;
