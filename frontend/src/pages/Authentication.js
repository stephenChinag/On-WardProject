import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
	return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
	const searchPramms = new URL(request.url).searchParams;
	const mode = searchPramms.get("mode") || "login";
	if (mode !== "login" && mode !== "signup") {
		throw json({ messaage: "wrong path " }, { status: 422 });
	}

	const data = await request.formData();

	const authData = {
		email: data.get("email"),
		password: data.get("password"),
	};

	const response = await fetch("http://localhost:8080/" + mode, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(authData),
	});
	if (response.staus === 422 || response.status === 401) {
		return response;
	}
	if (!response.ok) {
		throw json({ messaage: " n erro pease" }, { status: 500 });
	}

	console.log(authData);
	return redirect("/");
}
