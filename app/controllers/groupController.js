var groupModel = require('../models/groupModel');

// ---- add group funciton ----//

module.exports.addGroupFunction = function(req,res){

    groupModel.forge(req.body).save().then(function(response){

        res.json({status:200,message:"Group added successfully"});

    },function(res){

        res.json({status:400,message:"Something went wrong"});
    })
}

// ---- get group funciton ----//


module.exports.getGroupFunction = function(req,res){

    groupModel.where({status:'active'}).orderBy('id','DESC').fetchAll().then(function(response){

        res.json(response);

    }).catch(function(err){

        res.json({status:400,message:err.message});
    })
}

//---- get group by id ----//

module.exports.groupByIdFunction = function(req,res){
    
    groupModel.forge({id:req.query.id}).fetch().then(function(group){

        if(group){                       

            res.json(group);
        }else{
            res.json("Group does not exist");
        }
    }).catch(function(response){

        res.json(response);
    })
}

// ---- update Group ----//

module.exports.updateGroupFunction = function(req,res){
    
    groupModel.forge({id:req.body.id}).fetch().then(function(group){

        if(group){                       

            group.save({group_name:req.body.group_name}).then(function(response){

                res.json({status:200,message:"Group updated successfuly"});
            })
            .catch(function(response){

                res.json(response);
            })
        }else{
            res.json("Group does not exist");
        }
    }).catch(function(response){

        res.json(response);
    })
}

//---- delete group ----//


module.exports.deleteGroupFunction = function(req,res){
    
    groupModel.forge({id:req.query.id}).fetch().then(function(group){

        if(group){                       

            group.save({status:'inactive'}).then(function(response){

                res.json({status:200,message:"Group deleted successfuly"});
            })
            .catch(function(response){

                res.json(response);
            })
        }else{
            res.json("Group does not exist");
        }
    }).catch(function(response){

        res.json(response);
    })
}

