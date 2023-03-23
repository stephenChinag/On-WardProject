import styles from "./EventsNavigation.module.css";
import { NavLink, useRouteLoaderData } from "react-router-dom";
function EventsNavigation() {
	const token =useRouteLoaderData("root")
	return (
		<header className={styles.header}>
			<nav>
				<ul className={styles.list}>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? styles.active : undefined
							}
							to="/events"
							end
						>
							All Events
						</NavLink>
					</li>
				{ token &&	<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? styles.active : undefined
							}
							to="/events/new"
						>
							New Event
						</NavLink>
					</li>}
				</ul>
			</nav>
		</header>
	);
}

export default EventsNavigation;
