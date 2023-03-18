import { json, useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
	const data = useLoaderData();

	// if (data.isError) {
	// 	return <p> {data.message}</p>;
	// }
	const events = data.events;
	return (
		<>
			<div>
				<EventsList events={events} />
			</div>
		</>
	);
}

export default EventsPage;

export async function Loader() {
	const response = await fetch("http://localhost:8080/events");

	if (!response.ok) {
		// throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
		// 	status: 500,
		// });
		throw json({ message: " Could not Fetch Eventt " }, { status: 500 });
	} else {
		return response;
	}
}
