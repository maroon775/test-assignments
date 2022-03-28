import "./styles.css";
import useLagRadar from "./hooks/useLagRadar";
import React from "react";
import ReactDOM from "react-dom";
import Logotype from "./components/Logotype";
import SidebarNav from "./components/SidebarNav";
import Page from "./components/Page";

import Area from "./components/Area";
import Bar from "./components/Bar";

export default function App() {
  useLagRadar();

  return (
    <>
      <div className="content">
        <div className="sidebar">
          <Logotype />

          <SidebarNav
            items={[
              {
                link: "#",
                isActive: true,
                label: "Dashboard"
              },
              {
                link: "#",
                label: "Community Analytics"
              },
              {
                link: "#",
                label: "Demo Dashboard"
              },
              {
                link: "#",
                label: "Simulations"
              }
            ]}
          />
        </div>
        <div className="main">
          <Page title="Dashboard" hint="Lorem ipsum dolor sit amet" />

          <div>
            <Area title="Collateral to debt (USD) over change in qiAVAX price to USD" />
            <Bar title="Number of Transactions over time" />
          </div>
        </div>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
