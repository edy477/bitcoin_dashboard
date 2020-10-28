import React from "react";
import { withRedux } from "../lib/with-redux-store";

function Layout({ children }) {
    return <div className="cs">{children}</div>;
}

export default withRedux(Layout);