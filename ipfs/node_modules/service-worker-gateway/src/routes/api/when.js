const rightNow = Date.now() + 6000


export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(rightNow.toString())
}


export function post(req, res, next) {
	console.log({req})
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(true))
}