var bookshelf = require('../../bookshelf');

var Users = bookshelf.Model.extend({
    
    tableName: 'users',
    hasTimestamps: true

});

module.exports = Users;