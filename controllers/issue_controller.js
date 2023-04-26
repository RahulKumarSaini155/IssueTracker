const Issues = require('../models/createIssue');
const Projects = require('../models/createProject');

module.exports.project_Detail = async function(req, res){
    // console.log(req.params.id);
    const issue = await Issues.find({project: req.params.id});
    return res.render('projectDetail', {
        title: "Issue Detail",
        issues: issue,
        project_id: req.params.id
    });
}


module.exports.add = function(req, res){
    // console.log(req.params.id);
    return res.render('createIssue', {
        title: "Issue Page",
        project_id: req.params.id
    });
}

module.exports.create = async function(req, res){
    try{
        const labelsList = ((req.body.labels).toLowerCase()).split(",");
        const issue = await Issues.create({
            name: req.body.name,
            author: req.body.author,
            description: req.body.description,
            // label: req.body.label,
            label: labelsList,
            project: req.body.project_id
        });
    
        if(issue){
            const project = await Projects.updateOne({_id: req.body.project_id}, {$push:{"issue": issue._id}});
            
            // console.log("project detail: ", project);
            // console.log("issue id: ", issue);
    
            return res.redirect(`/issue/projectDetail/${req.body.project_id}`);
        }

    }catch(err){
        console.log('error in create issue', err);
        return res.status(500).send("Internal Server Error");
    }
    



    // console.log(req.body);
    // Issues.create({
    //     name: req.body.name,
    //     author: req.body.author,
    //     description: req.body.description,
    //     label: req.body.label,
    //     project: req.body.project_id
    // }, function(err, issue) {
    //     if(err){
    //         console.log('error in creating issue', err);
    //         return;
    //     }

    //     // project add issue id
    //     Projects.find({_id: req.body.project_id}, function(err, pro_data){
    //         if(err){
    //             console.log('error to add issue id to project id');
    //         }
    //         const id = issue._id;
    //         // pro_data.issue.push(id);
    //         pro_data.issue = id;
           
    //         console.log('project add issue id', issue._id, 'and', pro_data);
    //     })

    //     console.log('issue add successful', issue);
    //     return res.redirect(`/issue/projectDetail/${req.body.project_id}`);
    //     // return res.render('projectDetail');
    //     // return res.redirect('projectDetail');
    // })
}