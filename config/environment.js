const development = {
    db: "IssueTracker_Developer",
}

const production = {
    db: process.env.DB,
}

// module.exports = production;
module.exports = eval(process.env.NODE_ENV) == undefined ? development : eval(process.env.NODE_ENV);