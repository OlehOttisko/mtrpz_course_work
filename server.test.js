import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import request from 'supertest';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let server;

before((done) => {
    const app = express();
    app.use(express.static(path.join(__dirname, 'public')));
    server = app.listen(3000, done);
});

after((done) => {
    server.close(done);
});

describe('GET /', () => {
    it('should return 200 OK and serve index.html', (done) => {
        request(server)
            .get('/')
            .expect('Content-Type', /html/)
            .expect(200, done);
    });

    it('should return 404 for non-existent route', (done) => {
        request(server)
            .get('/non-existent')
            .expect(404, done);
    });
});
