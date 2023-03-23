import { redirect } from "react-router-dom";

export function getAuthToken() {
	const token = localStorage.getItem("token");
	return token;
}
export function Loader(){
	return getAuthToken()
}

export function checkAuthLoader (){
	const token = getAuthToken()
	if (!token){
		return redirect("/auth")
	}
	return null
}