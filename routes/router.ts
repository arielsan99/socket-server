import {Router, Request, Response} from 'express';

const router = Router();

router.get('/messages',(req:Request, res:Response)=>{
    res.json(({
        ok: true,
        message: 'messages created'
    }));
});

router.post('/messages',(req:Request, res:Response)=>{
    const {body, to} = req.body;

    res.json(({
        to,
        body
    }));
});


router.post('/messages/:id',(req:Request, res:Response)=>{
    const {body, to} = req.body;
    const id = req.params.id;

    res.json(({
        to: to,
        message: body,
        id
    }));
});



export default router;