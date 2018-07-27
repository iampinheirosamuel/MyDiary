import express from 'express';
import bodyParser from 'body-parser';
import router from './src/router/router';

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extende: false }));

// register routes
app.use('/api/v1/', router);

app.listen(port);
export default app;
console.log(`listening on port ${port}`);
