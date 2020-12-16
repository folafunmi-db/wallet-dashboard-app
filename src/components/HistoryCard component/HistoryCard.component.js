import "./HistoryCard.styles.scss";
import { MdHistory } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";

const HistoryCard = () => {
	return (
		<div className="history">
			<div className="history-icons">
				<MdHistory className="hist" />
				<HiOutlineDotsVertical className="dots" />
			</div>
			<h3>History available</h3>
			<p>Check you weekly transactions reports</p>
		</div>
	);
};

export default HistoryCard;
