import { useParams } from "react-router-dom";

const Home = () => {
	const params = useParams();
	console.log(params.productId);
	return (
		<main>
			<h1> Home PAGE</h1>
		</main>
	);
};
export default Home;
