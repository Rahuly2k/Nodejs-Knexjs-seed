//---- import all controllers and functions ----// 

var loginController = require('../controllers/userLoginController');

var creditorController = require('../controllers/creditorController');

var debitorController = require('../controllers/debitorController');

var groupController = require('../controllers/groupController');

module.exports = function(app,express){
    
    var api = express.Router();

    api.post('/login',loginController.loginFunction);

    api.post('/register',loginController.registerUser);

    //---- creditors routes ----//
    
    api.post('/addcreditor',creditorController.addCreditorFunction);

    api.get('/getcreditor',creditorController.getCreditorFunction);

    api.post('/updatecreditor',creditorController.updateCreditorFunction);

    api.get('/deletecreditor',creditorController.deleteCreditorFunction);

    api.get('/creditorbyid',creditorController.creditorByIdFunction);

    //---- debitors routes ----//

    api.post('/adddebitor',debitorController.addDebitorFunction);

    api.get('/getdebitor',debitorController.getDebitorFunction);

    api.post('/updatedebitor',debitorController.updateDebitorFunction);

    api.get('/deletedebitor',debitorController.deleteDebitorFunction);

    api.get('/debitorbyid',debitorController.debitorByIdFunction);


    //---- group routes ----//

    api.post('/addgroup',groupController.addGroupFunction);

    api.get('/getgroup',groupController.getGroupFunction);

    api.post('/updategroup',groupController.updateGroupFunction);

    api.get('/deletegroup',groupController.deleteGroupFunction);

    api.get('/groupbyid',groupController.groupByIdFunction);

    return api;
}