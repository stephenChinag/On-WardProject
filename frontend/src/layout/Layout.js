import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const Layout = () => {
	return (
		<>
			<MainNavigation />
			<Outlet />
		</>
	);
};
export default Layout;
