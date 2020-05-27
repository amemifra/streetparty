const date = new Date()
date.setHours(19, 49)

export function get(req, res, next) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(date.getTime()));
}

export async function post(req, res, next) {

    console.log(req.body)

    const { time } = req.body

    date.setTime(time)

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(date.getTime()));
}
