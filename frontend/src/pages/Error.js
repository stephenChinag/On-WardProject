import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

const ErrorPage = () => {
	const error = useRouteError();
	let title = "An error Occured ";
	let message = "could not find resource ";
	if (error.status === 500) {
		message = error.data.message;
	}
	if (error.status === 404) {
		title = "Not Found";
		message = "Could not Find Resource or Page";
	}

	return (
		<>
			<PageContent title={title}> {message}</PageContent>
		</>
	);
};

export default ErrorPage;
