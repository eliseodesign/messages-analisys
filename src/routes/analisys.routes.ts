// rutas de analisis
import { Router, Request, Response } from 'express';
import { CompletionService } from '../service/completion.services'

const router = Router();

router.post('/', (req: Request, res: Response) => {
    const completionService = new CompletionService();
    const { message } = req.body;
    completionService.createCompletion(message).then((response) => {
        res.json(response);
    }).catch((error) => {
        res.status(500).json({ message: error.message });
    });
});

export { router }