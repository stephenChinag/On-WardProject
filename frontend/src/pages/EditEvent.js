import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

const EditEvent = () => {
	const data = useRouteLoaderData("event-detail");

	return (
		<div>
			<EventForm method="patch" event={data.event} />
		</div>
	);
};
export default EditEvent;
