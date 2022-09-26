export async function login(jsonObject) {
	const url = "https://api.gopherindustries.net/api/v1/auth/login";
	const response = await fetch(url, {
		method: "POST",
		headers: {
			Accept: "text/plain",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(jsonObject),
	});

	console.log(response);
	const Response = await response.json();
	return Response;
}

let credentials = {
	username: "DevUser",
	password: "	^7D1n7!6L9px782",
};

login(credentials);

/*
const timeline = document.getElementById("timeline-teams");
let HTML = [];
for (let index = 0; index < company.teams.length; index++) {
	HTML[index] =
		"<div class='card shadow-sm rounded col-l-3 col-md-4 col-sm-12 p-5 m-3'><h4 class='font-weight-bold text-primary'>" +
		company.teams[index].teamName +
		"</h4><button class='btn btn-light btn-outline-primary mt-5'>View details</button></div>";
}
timeline.innerHTML = HTML.join("");
*/
