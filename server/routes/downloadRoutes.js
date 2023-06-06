import {Router} from 'express';
import { downloadController } from './downloadController.js';

const router = Router();

router.get('/:name', downloadController);

export default router;