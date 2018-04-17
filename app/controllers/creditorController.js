var creditorModel = require('../models/creditorModel');

// ---- add creditor funciton ----//

module.exports.addCreditorFunction = function(req,res){

    creditorModel.forge(req.body).save().then(function(response){

        res.json({status:200,message:"creditor added successfully"});

    },function(res){

        res.json({status:400,message:"Something went wrong"});
    })
}

// ---- get creditor funciton ----//


module.exports.getCreditorFunction = function(req,res){

    creditorModel.where({status:'active'}).orderBy('id','DESC').fetchAll().then(function(response){

        res.json(response);

    }).catch(function(err){

        res.json({status:400,message:err.message});
    })
}

//---- get creditor by id ----//

module.exports.creditorByIdFunction = function(req,res){
    
    creditorModel.forge({id:req.query.id}).fetch().then(function(creditor){

        if(creditor){                       

            res.json(creditor);
        }else{
            res.json("Debitor does not exist");
        }
    }).catch(function(response){

        res.json(response);
    })
}

// ---- update creditors ----//

module.exports.updateCreditorFunction = function(req,res){
    
    creditorModel.forge({id:req.body.id}).fetch().then(function(creditor){

        if(creditor){                       

            creditor.save({creditor_name:req.body.creditor_name}).then(function(response){

                res.json({status:200,message:"Creditor updated successfuly"});
            })
            .catch(function(response){

                res.json(response);
            })
        }else{
            res.json("Creditor does not exist");
        }
    }).catch(function(response){

        res.json(response);
    })
}

//---- delete creditor ----//


module.exports.deleteCreditorFunction = function(req,res){
    
    creditorModel.forge({id:req.query.id}).fetch().then(function(creditor){

        if(creditor){                       

            creditor.save({status:'inactive'}).then(function(response){

                res.json({status:200,message:"Creditor deleted successfuly"});
            })
            .catch(function(response){

                res.json(response);
            })
        }else{
            res.json("Creditor does not exist");
        }
    }).catch(function(response){

        res.json(response);
    })
}




