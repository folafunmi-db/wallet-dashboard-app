import "./Main.styles.scss";
import CardList from "../CardList component/CardList.component";
import MainBar from "../MainBar component/MainBar.component";

const Main = () => {
	return (
		<main className="main">
      <MainBar />
			<CardList />
		</main>
	);
};

export default Main;
