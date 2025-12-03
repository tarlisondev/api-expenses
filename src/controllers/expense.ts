import type { Request, Response } from 'express';
import service from '../services/index.js';

export const expenseController = async (req: Request, res: Response) => {

    try {
        res.json(await service.findExpenses());
    } catch (err) {
        console.log('Erro ao carregar despesas:');
    }
}

