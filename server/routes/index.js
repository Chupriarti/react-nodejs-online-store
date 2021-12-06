const Router = require('express');
const router = new Router();

router.user('/user');
router.user('/type');
router.user('/brand');
router.user('/device');

module.exports = router;