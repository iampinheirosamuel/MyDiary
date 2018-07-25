import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extende: false }));

// simple express route
app.get('/', (req, res) => { res.json({ message: 'Hello Sam' }); });

app.listen(port);
export default app;
console.log(`listening on port ${port}`);
