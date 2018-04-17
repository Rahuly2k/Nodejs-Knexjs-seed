var bookshelf = require('../../bookshelf');

var Creditors = bookshelf.Model.extend({
    
    tableName: 'creditors',
    hasTimestamps: true

});

module.exports = Creditors;