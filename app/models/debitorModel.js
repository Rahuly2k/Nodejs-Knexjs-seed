var bookshelf = require('../../bookshelf');

var Debitors = bookshelf.Model.extend({
    
    tableName: 'debitors',
    hasTimestamps: true

});

module.exports = Debitors;