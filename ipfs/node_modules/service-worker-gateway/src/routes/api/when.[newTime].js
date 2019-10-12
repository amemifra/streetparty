


export function get(req, res, next) {
    const { newTime } = req.params;
    console.log(newTime)
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end()
}