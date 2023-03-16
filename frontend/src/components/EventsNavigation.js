import styles from "./EventsNavigation.module.css";
import { NavLink } from "react-router-dom";
function EventsNavigation() {
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
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? styles.active : undefined
							}
							to="/events/new"
						>
							New Event
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default EventsNavigation;
