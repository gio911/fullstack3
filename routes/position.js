const express=require('express')
const controllers = require('../controllers/position')
const router = express()

router.get('/:categoryId', controllers.getByCategoryId)
router.post('/', controllers.create)
router.patch('/:id', controllers.remove)
router.delete('/:id', controllers.update)


module.exports=router