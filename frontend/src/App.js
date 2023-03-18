import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Event, { Loader as eventLoader } from "./pages/Event";
import EventDetail, { loader as eventDetailLoader } from "./pages/EventDetail";
import EditEvent from "./pages/EditEvent";
import Layout from "./layout/Layout";
import NewEvent, { action as NewEventAction } from "./pages/NewEvent";
import EventRoot from "./pages/EventRoot";
import ErrorPage from "./pages/Error";

const route = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: "events",
				element: <EventRoot />,

				children: [
					{
						index: true,
						element: <Event />,
						loader: eventLoader,
					},
					{
						path: ":eventId",
						id: "event-detail",
						loader: eventDetailLoader,
						children: [
							{
								index: true,
								element: <EventDetail />,
							},
							{ path: "edit", element: <EditEvent /> },
						],
					},

					{ path: "new", element: <NewEvent />, action: NewEventAction },
				],
			},
		],
	},
]);

function App() {
	return (
		<div>
			<RouterProvider router={route} />{" "}
		</div>
	);
}

export default App;
