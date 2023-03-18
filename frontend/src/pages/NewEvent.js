import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

const NewEvent = () => {
	return (
		<div>
			<EventForm />
		</div>
	);
};
export default NewEvent;

export async function action({ request, params }) {
	const data = await request.formData();

	const enteredData = {
		title: data.get("title"),
		image: data.get("image"),
		date: data.get("date"),
		description: data.get("description"),
	};
	const response = await fetch("http://localhost:8080/events", {
		method: "POST",
		body: JSON.stringify(enteredData),
		headers: { "Content-Type": "application/json" },
	});
	if (!response.ok) {
		throw json(
			{ message: "Something Went Wrong try new inputs " },
			{ status: 500 },
		);
	}
	return redirect("/events");
}
