data = {
	students: [
		{
			studentId: "535353535",
			fullName: "Person Personson",
			LinkedInProfile: "Linkedin profile",
			displayPicture: null,
			role: "developer",
			areaOfSpecialisation: "yes",
			remarkableAchievements: "this is an achievement",
			teamId: "3535",
		},
		{
			studentId: "535353535",
			fullName: "Person Personson",
			LinkedInProfile: "Linkedin profile",
			displayPicture: null,
			role: "developer",
			areaOfSpecialisation: "yes",
			remarkableAchievements: "this is an achievement",
			teamId: "3535",
		},
		{
			studentId: "535353535",
			fullName: "Person Personson",
			LinkedInProfile: "Linkedin profile",
			displayPicture: null,
			role: "developer",
			areaOfSpecialisation: "yes",
			remarkableAchievements: "this is an achievement",
			teamId: "3535",
		},
		{
			studentId: "535353535",
			fullName: "Person Personson",
			LinkedInProfile: "Linkedin profile",
			displayPicture: null,
			role: "developer",
			areaOfSpecialisation: "yes",
			remarkableAchievements: "this is an achievement",
			teamId: "3535",
		},
		{
			studentId: "535353535",
			fullName: "Person Personson",
			LinkedInProfile: "Linkedin profile",
			displayPicture: null,
			role: "developer",
			areaOfSpecialisation: "yes",
			remarkableAchievements: "this is an achievement",
			teamId: "3535",
		},
		{
			studentId: "535353535",
			fullName: "Person Personson",
			LinkedInProfile: "Linkedin link",
			displayPicture: null,
			role: "developer",
			areaOfSpecialisation: "yes",
			remarkableAchievements: "this is an achievement",
			teamId: "3535",
		},
		{
			studentId: "535353535",
			fullName: "Person Personson",
			LinkedInProfile: "Linkedin link",
			displayPicture: null,
			role: "developer",
			areaOfSpecialisation: "yes",
			remarkableAchievements: "this is an achievement",
			teamId: "3535",
		},
	],
	year: "2022-t2",
	teamId: "3535",
	teamName: "Team name",
	description: null,
	prototypeLink: null,
	mentors: null,
};

const team = document.getElementById("team");
team.innerHTML = "<h3>" + data.teamName + "</h3>";

const avatars = document.getElementById("avatars");
let HTML = [];

for (let index = 0; index < data.students.length; index++) {
	HTML[index] =
		"<div class='card shadow-sm rounded col-2 p-5 m-3'><h4 class='font-weight-bold text-primary'>" +
		data.students[index].fullName +
		"</h4><button class='btn btn-light btn-outline-primary mt-5'>View details</button></div>";
}
avatars.innerHTML = HTML.join("");

const linkedin = document.getElementById("linkedin");
linkedin.innerHTML =
	"<button class ='btn btn-light btn-outline-primary m-3 ml-5 text-primary'>" +
	data.students[0].LinkedInProfile +
	"</button>";

const role = document.getElementById("role");
role.innerHTML =
	"<h4 class='text-light m-3 ml-5'>" + data.students[0].role + "</h4>";

const special = document.getElementById("special");
special.innerHTML =
	"<h4 class='text-light m-3 ml-5'>" +
	data.students[0].areaOfSpecialisation +
	"</h4>";

const achievements = document.getElementById("achievements");
achievements.innerHTML =
	"<h4 class='text-light m-3 ml-5'>" +
	data.students[0].remarkableAchievements +
	"</h4>";
