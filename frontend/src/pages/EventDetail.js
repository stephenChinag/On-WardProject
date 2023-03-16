import { useParams } from "react-router-dom";

const EditDetail = () => {
	const param = useParams();
	return (
		<main>
			{" "}
			<p> {param.productId}</p>
			<h1> Event Detail Page</h1>
		</main>
	);
};
export default EditDetail;
