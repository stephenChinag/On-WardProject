import EventsNavigation from "../components/EventsNavigation";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import { useEffect } from "react";
const EventRoot = () => {
	const token = useLoaderData();
	const submit = useSubmit();

	useEffect(() => {
		if (!token) {
			return null;
		}
		setTimeout(() => {
			submit(null, { action: "/logout", method: "post" });
		}, 1 * 60 * 60 * 1000);
	}, [token, submit]);
	return (
		<>
			<EventsNavigation />
			<Outlet />
		</>
	);
};

export default EventRoot;
