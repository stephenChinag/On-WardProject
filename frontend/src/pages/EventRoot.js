import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";
const EventRoot = () => {
	return (
		<>
			<EventsNavigation />
			<Outlet />
		</>
	);
};

export default EventRoot;
