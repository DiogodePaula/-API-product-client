import { Router } from 'express';

import NoteController from './app/controllers/NoteController';

const routes = Router();

routes.get('/', (req, res) => res.json({ result: 'TEST-API' }));

routes.post('/notes', NoteController.store);

export default routes;
