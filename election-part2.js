function filterInvalidVoters(voters) {
    /* Your code from part 1 here */
}


function candidatesObjToArray(candidates) {
    /* Your code from part 1 here */
}

/**
 * 1 - Write a Voter class modelling a member of the population who votes in the election.
 */


/**
 * 2 - Write a Candidate class modelling a candidate in the election. Candidates are also voters (they can vote for themselves, or anyone else).
 * However they have some extra properties.
 */


/**
 * 3 - Write an Election class which models the election.
 */



// Include your votingPopulation array here.
let votingPopulation = [];


// Include your candidates array here.
let candidates = [];


let allVoters = votingPopulation.concat(candidatesObjToArray(candidates));

let validVoters = filterInvalidVoters(allVoters);

let election = new Election(validVoters, candidates);

election.runElection();