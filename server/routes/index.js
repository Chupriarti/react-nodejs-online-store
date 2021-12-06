const Router = require('express');
const router = new Router();

const deviceRouter = require('./deviceRouter');
const brandRouter = require('./brandRouter');
const userRouter = require('./userRouter');
const typeRouter = require('./typeRouter');

router.user('/user', userRouter);
router.user('/type', typeRouter);
router.user('/brand', brandRouter);
router.user('/device', deviceRouter);

module.exports = router;