import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Event, { Loader as eventLoader } from "./pages/Event";
import EventDetail, {
	loader as eventDetailLoader,
	action as deleteEventAction,
} from "./pages/EventDetail";
import EditEvent from "./pages/EditEvent";
import Layout from "./layout/Layout";
import NewEvent from "./pages/NewEvent";
import EventRoot from "./pages/EventRoot";
import ErrorPage from "./pages/Error";
import { action as changeEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsLetterAction } from "./pages/Newsletter";
import AuthenticationPage, {
	action as authenticationAction,
} from "./pages/Authentication";
import { action as logOutAction} from "./pages/logout"
import  {checkAuthLoader, Loader as authLoader} from "./util/Auth"


const route = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		id:"root",
		loader: authLoader,
		children: [
			{ index: true, element: <Home /> },

			{
				path: "newsletter",
				element: <NewsletterPage />,
				action: newsLetterAction,
			},
			{
				path: "auth",
				element: <AuthenticationPage />,
				action: authenticationAction,
			},
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
								action: deleteEventAction,
							},
							{
								path: "edit",
								element: <EditEvent />,
								action: changeEventAction,
								loader: checkAuthLoader
							},
						],
					},

					{ path: "new", element: <NewEvent />, action: changeEventAction ,loader: checkAuthLoader},
				
				],
			},
			{path:"logout",action: logOutAction}
		],
	},
]);

function App() {
	return (
		<div>
			<RouterProvider router={route} />
		</div>
	);
}

export default App;
