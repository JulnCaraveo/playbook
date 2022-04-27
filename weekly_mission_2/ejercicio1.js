//REPO {name,author,language,numberofcommits,stars,forks,issue_open,issue-close}

const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())

//ISSUE
const issue = {
    title: "LaunchX",
    repositorynameassociated: "carlogilmar",
    status: "JavaScript",
    numberofcomments: 100,
    labels: 199,
    author: 299,
    datecreated: 10,
    lastupdated: 10,
    gettitleandauthor: function(){
      return this.title + this.author
    },
    getGeneralInfo: function(){
      return `This repository ${this.repositorynameassociated} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())

//PULLREQUEST
const PullRequest = {
    title: "LaunchX",
    branchName: "carlogilmar",
    dateCreated: "JavaScript",
    status: 100,
    repositorynameassociated:"Julian Caraveo",
    getStatus: function(){
      return this.issues_open + this.issues_close
    },
    getTitleansAuthor: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())