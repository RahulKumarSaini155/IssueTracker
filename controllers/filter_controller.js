const Projects = require('../models/createProject');
const Issues = require('../models/createIssue');


module.exports.filter = async function(req, res){
    console.log(req.body);
    // return res.send('hello');

    try{
        const allIssue = await Issues.find({project: req.body.project});
        let issueList = [];
        if(req.body.search){
            for(let issue of allIssue){
                if(req.body.search === issue.name){
                    // filter by title
                    issueList.push(issue);
                }else if(issue.description.includes(req.body.search)){
                    // filter by description
                    issueList.push(issue);
                }
            }
        }
        else if(req.body.author){
            for(let issue of allIssue){
                if(req.body.author === issue.author){
                    // filter by author
                    issueList.push(issue);
                }
            }
        }
        else if(req.body.label){
            for(let issue of allIssue){
                for(let label of issue.label){
                    // filter by labels
                    if(req.body.label.includes(label)){
                        issueList.push(issue);
                        break;
                    }
                }
            }
        }
        else{
            issueList = allIssue;
        }
        
        return res.render('projectDetail', {
            title: "Issue Detail",
            issues: issueList,
            project_id: req.body.project
        });
    
       
        //  const project = await Projects.updateOne({_id: req.body.project_id}, {$push:{"issue": issue._id}});    
        //  return res.redirect(`/issue/projectDetail/${req.body.project_id}`);
    
    }catch(err){
        console.log('error in create issue', err);
        return res.status(500).send("Internal Server Error");
    }
}