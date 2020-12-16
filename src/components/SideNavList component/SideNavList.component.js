import './SideNavList.styles.scss'

const SideNavList = (props) => {
	return (
		<div className="side-nav-list">
			{props.icon}
			<p className="list-title">{props.title}</p>
		</div>
	);
};

export default SideNavList;
