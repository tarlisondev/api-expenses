import { Router } from 'express';
import { expenseController } from '../controllers/expense.js';

const router = Router();

// Routes for rendered pages only
router.get('/', expenseController);

export default router;