// Get Users Repos
var getUserRepos = function() {
    fetch("https://api.github.com/users/octocat/repos");
  };

  getUserRepos();