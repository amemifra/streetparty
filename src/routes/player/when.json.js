const date = new Date()
date.setHours(19, 45)

export function get(req, res, next) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(date.getTime()));
}
