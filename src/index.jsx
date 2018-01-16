import React from "react";
import mirror, { render, Router } from "mirrorx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import App from "./App";
mirror.defaults({
    historyMode: 'hash'
});



render(<Router hashType="hashbang">
        <App/>
    </Router>, document.getElementById("app"));
