import { NavLink } from "react-router-dom";

import style from "./MainNavigation.module.css";

function MainNavigation() {
	return (
		<header className={style.header}>
			<nav>
				<ul className={style.list}>
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? style.active : undefined
							}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? style.active : undefined
							}
							to="/events"
						>
							Event
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
