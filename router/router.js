import express from 'express';
import diary from '../controller/controller';

const router = express.Router();

// middleware to use for all requests
router.use((req, res, next) => { next(); });

// simple express route
router.get('/entries', diary.getEntries);

export default router;
