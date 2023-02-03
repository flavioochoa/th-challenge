import "./Home.css";

import { Card } from "../../ui/card/Card";
import { PageTitle } from "../../ui/page-title/PageTitle";
import { config } from "./Config";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="products"></div>
      <div className="dashboard-container">
        <PageTitle>
          <span className="title">Products</span>
          <span className="title bold margin-left-5">Dashboard</span>
        </PageTitle>
        <div className="cards-grid">
          {config.map((card) => {
            return <Card {...card} key={card.id} />;
          })}
        </div>
      </div>
    </div>
  );
};
