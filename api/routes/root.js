const { getUsersCtrl, registerUserCtrl  } = require('../controllers/userController');
const { validatePostSignup } = require('../validations/auth');

module.exports = async (fastify) => {
    fastify.get('/users', getUsersCtrl)
    fastify.post('/auth/signup', validatePostSignup, registerUserCtrl);

} 



module.exports.autoload = true