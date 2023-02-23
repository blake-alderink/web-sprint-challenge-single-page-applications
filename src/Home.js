import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  const { orders } = props;
  return (
    <div>
      <h1>ALL ORDERS</h1>
      {orders.map((order) => {
        return (
          <div>
            {order.name} , {order.special}
          </div>
        );
      })}

      <Link to="/form">Form Link</Link>
    </div>
  );
}

export default Home;
