import EventsNavigation from "../components/EventsNavigation";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import { useEffect } from "react";
import { getTokenDuration } from "../util/Auth";
const EventRoot = () => {
	const token = useLoaderData();
	const submit = useSubmit();

	useEffect(() => {
		if (!token) {
			return undefined;
		}
		if (token === "EXPIRED") {
			submit(null, { action: "/logout", method: "post" });
			return ;
		}
		const tokenDuration = getTokenDuration();
		console.log(tokenDuration);

		setTimeout(() => {
			submit(null, { action: "/logout", method: "post" });
		}, tokenDuration);
	}, [token, submit]);
	return (
		<>
			<EventsNavigation />
			<Outlet />
		</>
	);
};

export default EventRoot;
