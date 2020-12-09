import "./App.scss";
// import { Switch, Route } from "react-router-dom";
import { FiTwitter } from "react-icons/fi";

function App() {
	return (
		<div className="App">
			<p className="pl">
				Not suitable for mobile. Please 🥺🙏🏾 view on a large screen
			</p>
			<div className="page">
				{/* <TopNav /> */}
				Page
			</div>

			<div className="cir"></div>
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
