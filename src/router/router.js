import express from 'express';
import diary from '../controller/controller';

const router = express.Router();

// middleware to use for all requests
router.use((req, res, next) => { next(); });

// express route for API
router.get('/entries', diary.getEntries);
router.post('/entries/', diary.postEntry);
router.get('/entries/:entry_id', diary.getEntry);
router.put('/entries/:entry_id', diary.modifyEntry);
router.delete('/entries/:entry_id', diary.deleteEntry);

export default router;


/** reference
 *
 https://expressjs.com

 */