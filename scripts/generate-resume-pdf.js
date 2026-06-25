const puppeteer = require('puppeteer');
const path = require('path');
const http = require('http');
const fs = require('fs');

const ROOT = path.resolve(__dirname, '..');
const PORT = 8765;
const OUT = path.join(ROOT, 'Md-Nazmul-Hassan.pdf');

function serveStatic(root) {
    const mime = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.pdf': 'application/pdf'
    };
    return http.createServer((req, res) => {
        let file = path.join(root, req.url === '/' ? 'resume.html' : req.url.split('?')[0]);
        if (!file.startsWith(root)) {
            res.writeHead(403);
            return res.end();
        }
        fs.readFile(file, (err, data) => {
            if (err) {
                res.writeHead(404);
                return res.end();
            }
            const ext = path.extname(file);
            res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
            res.end(data);
        });
    });
}

(async () => {
    const server = serveStatic(ROOT);
    await new Promise((resolve) => server.listen(PORT, resolve));

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(`http://127.0.0.1:${PORT}/resume.html`, { waitUntil: 'networkidle0' });
    await page.pdf({
        path: OUT,
        format: 'A4',
        printBackground: true,
        margin: { top: '14mm', right: '16mm', bottom: '14mm', left: '16mm' }
    });
    await browser.close();
    server.close();
    console.log('Generated:', OUT);
})().catch((err) => {
    console.error(err);
    process.exit(1);
});
