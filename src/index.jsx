import React from "react";
import mirror, { render, Router } from "mirrorx";
import App from "./App";

mirror.defaults({
    historyMode: 'hash'
});

render(<App/>, document.getElementById("app"));
