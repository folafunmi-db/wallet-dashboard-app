import "./SideNav.styles.scss";

import SideNavList from "../SideNavList component/SideNavList.component";
import Avatar from "../Avatar component/Avatar.component";
import HistoryCard from "../HistoryCard component/HistoryCard.component";

import { AiOutlineDashboard } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { RiExchangeLine } from "react-icons/ri";
import { BiDollarCircle, BiWalletAlt, BiCoinStack } from "react-icons/bi";

const SideNav = () => {
	const sidenavs = [
		{
			title: "Dashboard",
			icon: <AiOutlineDashboard />,
		},
		{
			title: "My Wallet",
			icon: <BiWalletAlt />,
		},
		{
			title: "Transactions",
			icon: <BiCoinStack />,
		},
		{
			title: "Crypto",
			icon: <BiDollarCircle />,
		},
		{
			title: "Exchange",
			icon: <RiExchangeLine />,
		},
		{
			title: "Setting",
			icon: <FiSettings />,
		},
	];

	return (
		<aside className="side-nav">
			<Avatar />
			<div className="list">
				{sidenavs.map((item, idx) => (
					<SideNavList
						title={item.title}
						icon={item.icon}
						key={`side${idx}`}
					/>
				))}

				<HistoryCard />
			</div>
		</aside>
	);
};

export default SideNav;
