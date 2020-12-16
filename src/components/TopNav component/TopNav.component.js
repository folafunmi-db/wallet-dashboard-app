import "./TopNav.styles.scss";
import { BsSearch } from "react-icons/bs";
import { HiOutlineBell } from "react-icons/hi";
import { BiMessageRoundedDots, BiGift } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

const TopNav = () => {
	return (
		<div className="top-nav">
			<h2>Wallet</h2>
			<div className="right">
				<div className="search">
					<BsSearch className="search-icon" />
					<input type="text" placeholder="Search" />
				</div>

				<div className="top-buttons">
					<HiOutlineBell className="top-btn" />
					<BiMessageRoundedDots className="top-btn" />
					<BiGift className="top-btn" />
					<FiSettings className="top-btn" />
				</div>
			</div>
		</div>
	);
};

export default TopNav;
