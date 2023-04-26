const Projects = require('../models/createProject');

module.exports.deleteProject = async function(req, res){
    try{
        console.log(req.query.id);

        await Projects.findByIdAndDelete({_id: req.query.id});
        return res.redirect('/');

    }catch(err){
        console.log('error in delete project', err);
        return res.status(500).send('Internal Error');
    }
    
}