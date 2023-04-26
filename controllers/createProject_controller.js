const Projects = require('../models/createProject');

module.exports.create_newProject = function(req, res){
    return res.render('newProject', {
        title: "Create Project"
    })
}


module.exports.create_Project = function(req, res){
    // console.log(req.body);

    Projects.create({
        name: req.body.name,
        author: req.body.author,
        description: req.body.description  
    }, function(err, project) {
        if(err){
            console.log('error in creating project', err);
            return;
        }
        console.log('project add successful in the project list', project);
        return res.redirect('/');
    })
}