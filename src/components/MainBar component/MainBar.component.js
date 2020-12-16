import "./MainBar.styles.scss";
import { FiFilter } from "react-icons/fi";

const MainBar = () => {
	return (
		<div className="main-bar">
			<h3>DashBoard</h3>
			<div className="filter">
				<h4>Filter</h4>
				<FiFilter className="filter-icon" />
			</div>
		</div>
	);
};

export default MainBar;
