import {
	json,
	redirect,
	useLoaderData,
	useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";
// import EventsList from "../components/EventsList";

const EditDetail = () => {
	const data = useRouteLoaderData("event-detail");
	return (
		<main>
			<EventItem event={data.event} />
		</main>
	);
};
export default EditDetail;

export async function loader({ request, params }) {
	const id = params.eventId;
	const response = await fetch("http://localhost:8080/events/" + id);
	if (!response.ok) {
		throw json({ message: " page not Found " }, { status: 500 });
	} else {
		return response;
	}
}

export async function action({ params }) {
	const eventId = params.eventId;
	const response = await fetch("http://localhost:8080/events/" + eventId);
	if (!response.ok) {
		throw json({ message: " could not delete event " }, { status: 500 });
	}
	return redirect("/events");
}
