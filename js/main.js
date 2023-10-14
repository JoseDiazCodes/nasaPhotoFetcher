//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector("button").addEventListener("click", getImgFromNasa);

function getImgFromNasa() {
	let userInput = document.getElementById("input").value;
	let url =
		"https://api.nasa.gov/planetary/apod?api_key=waAl32Gt4vLQSFUmafTvvHPlPS80zbBAuO4KsPVz";

	let format = userInput.split("-");
	if (
		userInput.length === 0 ||
		format.length !== 3 ||
		format[0].length !== 4 ||
		format[1].length !== 2 ||
		format[2].length !== 2
	) {
		document.querySelector("h2").innerHTML =
			"Please enter a valid date in a YYYY-MM-DD format";
		return;
	} else {
		url = `https://api.nasa.gov/planetary/apod?api_key=waAl32Gt4vLQSFUmafTvvHPlPS80zbBAuO4KsPVz&date=${userInput}&thumbs=False`;
	}

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			document.querySelector("img").src = data.hdurl;
			document.querySelector("h2").innerHTML = data.title;
			document.querySelector("h3").innerHTML =
				"The description for this picture is " + data.explanation;
		})
		.catch((error) => {
			console.log(`Error: ${error}`);
		});
}
