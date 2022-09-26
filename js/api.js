/* Authentication */

export async function login(jsonObject) {
	const url = "https://api.gopherindustries.net/api/v1/auth/login";
	const response = await fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(jsonObject),
	});

	const Response = await response.json();
	return Response;
}

export async function refresh(jsonObject) {
	const url = "https://api.gopherindustries.net/api/v1/auth/refresh";
	const response = await fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(jsonObject),
	});

	const Response = await response.json();
	return Response;
}

export async function validateAccess(jwt) {
	const url = "https://api.gopherindustries.net/api/v1/auth/validate";
	const response = await fetch(url, {
		method: "GET",
		headers: { "Content-Type": "text/json" },
		body: jwt,
	});

	const Response = await response.json();
	return Response;
}

/* Chat bot */

export async function sendMessage(jsonObject) {
	const url = "https://api.gopherindustries.net/api/v1/chatbot/send";
	const response = await fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(jsonObject),
	});

	const Response = await response.json();
	return Response;
}

/* Timeline */

export async function getTimeline(jsonObject) {
	const url = "https://api.gopherindustries.net/api/v1/timeline";
	const response = await fetch(url, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(jsonObject),
	});

	console.log(response);

	const Response = await response.json();
	return Response;
}

export async function createTimelineStudent(jsonObject) {
	const url =
		"https://api.gopherindustries.net/api/v1/timeline/students/create";
	const response = await fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(jsonObject),
	});

	const Response = await response.json();
	return Response;
}

export async function getTimelineStudent(studentId) {
	const url =
		"https://api.gopherindustries.net/api/v1/timeline/students/" + studentId;
	const response = await fetch(url, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
		body: "",
	});

	const Response = await response.json();
	return Response;
}

export async function deleteTimelineStudent(studentId) {
	const url =
		"https://api.gopherindustries.net/api/v1/timeline/students/" + studentId;
	const response = await fetch(url, {
		method: "DELETE",
		headers: { "Content-Type": "application/json" },
		body: "",
	});

	const Response = await response.json();
	return Response;
}

export async function createTimelineTeam(jsonObject) {
	const url = "https://api.gopherindustries.net/api/v1/timeline/teams/create";
	const response = await fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(jsonObject),
	});

	console.log(response);
	const Response = await response.json();
	return Response;
}

export async function getTimelineTeam(teamId) {
	const url =
		"https://api.gopherindustries.net/api/v1/timeline/teams/" + teamId;
	const response = await fetch(url, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
		body: "",
	});

	console.log(response);

	const Response = await response.json();
	return Response;
}

export async function getTimelineTrimester(trimester, teamName) {
	const url =
		"https://api.gopherindustries.net/api/v1/timeline/teams/" +
		trimester +
		"/" +
		teamName;
	const response = await fetch(url, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
		body: "",
	});

	const Response = await response.json();
	return Response;
}

export async function deleteTimelineTeam(teamId) {
	const url =
		"https://api.gopherindustries.net/api/v1/timeline/teams/" + teamId;
	const response = await fetch(url, {
		method: "DELETE",
		headers: { "Content-Type": "application/json" },
		body: "",
	});

	const Response = await response.json();
	return Response;
}

/* Users */

export async function getUser(userId) {
	const url = "https://api.gopherindustries.net/api/v1/users/" + userId;
	const response = await fetch(url, {
		method: "GET",
		headers: "",
		body: "",
	});

	const Response = await response.json();
	return Response;
}

export async function deleteTimelineTeam(userId) {
	const url = "https://api.gopherindustries.net/api/v1/users/" + userId;
	const response = await fetch(url, {
		method: "DELETE",
		headers: "",
		body: "",
	});

	const Response = await response.json();
	return Response;
}

export async function patchUser(userId) {
	const url = "https://api.gopherindustries.net/api/v1/users/" + userId;
	const response = await fetch(url, {
		method: "PATCH",
		headers: { "Content-Type": "application/json" },
		body: "",
	});

	const Response = await response.json();
	return Response;
}

export async function registerUser(jsonObject) {
	const url = "https://api.gopherindustries.net/api/v1/users/";
	const response = await fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(jsonObject),
	});

	const Response = await response.json();
	return Response;
}

export async function validateUser(userId) {
	const url =
		"https://api.gopherindustries.net/api/v1/users/" + userId + "/validate";
	const response = await fetch(url, {
		method: "GET",
		headers: "",
		body: "",
	});

	const Response = await response.json();
	return Response;
}
