import Router from 'express'
import PostController from "./PostController.js";

const router = new Router()

router.post('/products', PostController.create);
router.get('/products', PostController.getAll);
router.get('/products/count',PostController.count);
router.delete('/products/:id', PostController.delete);
router.delete('/products/', PostController.deleteAll);
router.get('/products/expensivest',PostController.expensive);
router.get('/products/cheapest',PostController.cheapest);
router.get('/products/cheapest',PostController.cheapest);
router.get('/products/median',PostController.median);
router.get('/products/:id', PostController.getOne);





export default router;



