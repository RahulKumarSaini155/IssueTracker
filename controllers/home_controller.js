const Projects = require('../models/createProject');

module.exports.home = async function(req, res){
    try{
        let projects = await Projects.find({})
        console.log(projects);
        return res.render('home', {
            title: "Home",
            projects: projects
        });
    }catch(err){
        console.log('error in get data from database and display to projects', err);
        return res.status(500).send("Internal Server Error");
    }
    
}