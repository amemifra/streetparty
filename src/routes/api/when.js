const rightNow = 1570901234864


export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(rightNow.toString())
}