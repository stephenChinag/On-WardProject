import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Event from "./pages/Event";
import EventDetail from "./pages/EventDetail";
import EditEvent from "./pages/EditEvent";
import Layout from "./layout/Layout";
import NewEvent from "./pages/NewEvent";
import EventRoot from "./pages/EventRoot";

// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const route = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: "page no found",
		children: [
			{ index: true, element: <Home /> },
			{
				path: "events",
				element: <EventRoot />,
				children: [
					{ index: true, element: <Event /> },
					{ path: "new", element: <NewEvent /> },
					{ path: ":productId", element: <EventDetail /> },
					{ path: ":eventId/edit", element: <EditEvent /> },
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
