var db=null;

function authSuccess(username)
{
  log('authSuccess: '+username);
}

function authFailure()
{
  log(authFailure)
}

function initVote()
{
  db=freefall.Database('http://freefall.blanu.net', 'VotingMachine');
  db.setAuthCallbacks(authSuccess, authFailure);
  db.authenticate();
}

$(document).ready(initVote);
