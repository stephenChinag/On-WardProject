import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const Layout = () => {
	// const navigation = useNavigation();
	// console.log(navigation);

	return (
		<>
			<MainNavigation />

			<main>
				{/* {(navigation.state = "loading" && <p> loading...</p>)} */}
				<Outlet />
			</main>
		</>
	);
};
export default Layout;
