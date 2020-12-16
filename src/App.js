import "./App.scss";
// import { Switch, Route } from "react-router-dom";
import { FiTwitter } from "react-icons/fi";
import TopNav from "./components/TopNav component/TopNav.component";
import SideNav from "./components/SideNav component/SideNav.component";
import Main from "./components/Main component/Main.component";

function App() {
	return (
		<div className="App">
			<p className="pl">
				Not suitable for mobile. Please 🥺🙏🏾 view on a large screen
			</p>
			<div className="wra">
				<div className="page">
					<TopNav />
					<div className="section">
						<SideNav />
						<Main />
					</div>
				</div>
			</div>

			<div className="cir"></div>
			<div className="two"></div>
			<div className="copy">
				<p>
					Made with 💜 by{" "}
					<a href="https://github.com/folafunmi-db" className="gb">
						Folafunmi
					</a>{" "}
					|
					<a href="https://twitter.com/Folafunmi6" className="tw">
						<FiTwitter />
					</a>
					| Based on a design by Ghulam Rassol for Cuberto
				</p>
			</div>
		</div>
	);
}

export default App;
