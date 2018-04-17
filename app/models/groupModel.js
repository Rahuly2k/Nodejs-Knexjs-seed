var bookshelf = require('../../bookshelf');

var Group = bookshelf.Model.extend({
    
    tableName: 'groups',
    hasTimestamps: true

});

module.exports = Group;