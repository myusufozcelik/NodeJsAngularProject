let express = require('express')
let router = express.Router();

const users = require('../controllers/controller.js')

router.post('/api/users/create',users.create)
router.get('/api/users/all',users.retrieveAllUsers);
router.get('/api/users/onebyid/:id',users.getUserById);
router.put('/api/users/update/:id',users.updateById)
router.delete('/api/users/delete/:id',users.deleteById)

module.exports = router;