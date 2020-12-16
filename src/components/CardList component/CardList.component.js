import "./CardList.styles.scss";
import Card from "../Card component/Card.component";
import {BiBitcoin} from 'react-icons/bi'
import {FaEthereum} from 'react-icons/fa'
import {SiStellar} from 'react-icons/si'
import {IoTrendingUp} from 'react-icons/io5'

import React from "react";

const CardList = () => {
  const cards = [
		{
			crypto: <BiBitcoin className="card-icon" />,
			amount: "$1200",
			time: "This Week",
			percent: "45%",
			graph: <IoTrendingUp className="card-graph" />,
		},
		{
			crypto: <FaEthereum className="card-icon" />,
			amount: "$234.42",
			time: "This Week",
			percent: "35%",
			graph: <IoTrendingUp className="card-graph" />,
		},
		{
			crypto: <SiStellar className="card-icon" />,
			amount: "$600",
			time: "This Week",
			percent: "21%",
			graph: <IoTrendingUp className="card-graph" />,
		},
  ];
	return (
		<div className="card-list">
			{cards.map((item, idx) => (
				<Card
					key={`card${idx}`}
					crypto={item.crypto}
					amount={item.amount}
					time={item.time}
          percent={item.percent}
          graph={item.graph}
				/>
			))}
		</div>
	);
};

export default CardList;
