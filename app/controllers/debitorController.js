var debitorModel = require('../models/debitorModel');

// ---- add debitor funciton ----//

module.exports.addDebitorFunction = function(req,res){

    debitorModel.forge(req.body).save().then(function(response){

        res.json({status:200,message:"Debitor added successfully"});

    },function(res){

        res.json({status:400,message:"Something went wrong"});
    })
}

// ---- get debitor funciton ----//


module.exports.getDebitorFunction = function(req,res){

    debitorModel.where({status:'active'}).orderBy('id','DESC').fetchAll().then(function(response){

        res.json(response);

    }).catch(function(err){

        res.json({status:400,message:err.message});
    })
}

// ---- update Debitor ----//

module.exports.updateDebitorFunction = function(req,res){
    
    debitorModel.forge({id:req.body.id}).fetch().then(function(debitor){

        if(debitor){                       

            debitor.save({debitor_name:req.body.debitor_name}).then(function(response){

                res.json({status:200,message:"Debitor updated successfuly"});
            })
            .catch(function(response){

                res.json(response);
            })
        }else{
            res.json("Debitor does not exist");
        }
    }).catch(function(response){

        res.json(response);
    })
}

//---- get debitor by id ----//

module.exports.debitorByIdFunction = function(req,res){
    
    debitorModel.forge({id:req.query.id}).fetch().then(function(debitor){

        if(debitor){                       

            res.json(debitor);
        }else{
            res.json("Debitor does not exist");
        }
    }).catch(function(response){

        res.json(response);
    })
}


//---- delete debitor ----//


module.exports.deleteDebitorFunction = function(req,res){
    
    debitorModel.forge({id:req.query.id}).fetch().then(function(debitor){

        if(debitor){                       

            debitor.save({status:'inactive'}).then(function(response){

                res.json({status:200,message:"Debitor deleted successfuly"});
            })
            .catch(function(response){

                res.json(response);
            })
        }else{
            res.json("Debitor does not exist");
        }
    }).catch(function(response){

        res.json(response);
    })
}




