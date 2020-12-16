import "./Avatar.style.scss";
import { IoPersonCircleOutline } from "react-icons/io5";

const Avatar = () => {
	return (
		<div className="avatar">
			<IoPersonCircleOutline alt="avatar" className="av" />
			<h2 className="avatar-name">Folafunmi</h2>
			<p className="avatar-sub">Front-End Developer</p>
		</div>
	);
};

export default Avatar;
