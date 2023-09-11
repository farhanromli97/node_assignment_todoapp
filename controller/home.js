const home = (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.send(
        `<!DOCTYPE html><html><head><title>Hello World</title></head><body><h1>Welcome to Home page!</h1></body></html>`
    );
}

module.exports = home