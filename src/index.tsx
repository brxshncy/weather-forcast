import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <Auth0Provider
        domain={`${process.env.REACT_APP_AUTH0_DOMAIN}`}
        clientId={`${process.env.REACT_APP_AUTH0_CLIENTKEY}`}
        authorizationParams={{
            redirect_uri: window.location.origin,
        }}
        useRefreshTokens={true}
    >
        <App />
    </Auth0Provider>
);
