import React from "react";
import CoinItem from "./CoinItem";
import { Link } from "react-router-dom";
import Coin from "../routes/Coin";

import "./Coins.css";

const Coins = (props) => {
  return (
    <div className="container">
      <div>
        {/* Heading */}
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price(USD)</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Mkt Cap</p>
        </div>

        {/* Coin List */}
        {props.coins.map((coin) => {
          return (
            <Link to={`/coin/${coin.id}`} element={<Coin/>} key={coin.id}>
              <CoinItem coins={coin} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Coins;
