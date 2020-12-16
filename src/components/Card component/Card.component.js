import "./Card.styles.scss";
import { HiOutlineDotsVertical } from "react-icons/hi";

const Card = (props) => {
	return (
		<div className="card">
			<div className="card-top">
				{props.crypto}
				<HiOutlineDotsVertical className="card-dots" />
			</div>
			<div className="card-mid">
				<h3>{props.amount}</h3>
				{props.graph}
			</div>
			<div className="card-btm">
				<h4>{props.percent}</h4>
				<p>{props.time}</p>
			</div>
		</div>
	);
};

export default Card;
