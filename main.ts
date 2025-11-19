import { google } from "googleapis";
import "dotenv/config";

// console.log("BRO\n\n\n------------\n\n\n\n");
const sheets = google.sheets(
	{
		version:"v4",
		auth: `${process.env.API_KEY}`
	}
);

async function getRange() {
	let data;

	try {
		const res = await sheets.spreadsheets.values.get({
			spreadsheetId:"14uSQ2hyJMtq0taZLP7tlWkzdJ5jdSx0iVZH1puEhpNo",
			range:"DB!A1"
		});
		data = res.data;

		
	}
	catch (error) {
		console.error(error);
		return;
	}
}

sheets.spreadsheets.values.get({
	spreadsheetId:"14uSQ2hyJMtq0taZLP7tlWkzdJ5jdSx0iVZH1puEhpNo",
	range:"DB!A1"
})
	.then(val => val.data)
	.catch(error => console.error(error));