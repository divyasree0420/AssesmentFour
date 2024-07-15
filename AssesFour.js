//FUNCTION EXPRESSION
// Function expression named calculateVotes
const calculateVotes = function(candidateName, votes, region) {
    return `${candidateName} received ${votes} votes from ${region}.`;
};

// Example usage:
console.log(calculateVotes("John Doe", 5000, "North Region"));
// Output: "John Doe received 5000 votes from North Region."
//----------------------------------------------
//RECURSIVE FUNCTION
// Recursive function named verifyVotes
function verifyVotes(voteCounts) {
    if (voteCounts.length === 0) {
        return 0;
    } else {
        return voteCounts[0] + verifyVotes(voteCounts.slice(1));
    }
}

// Example usage:
console.log(verifyVotes([3500, 2700, 4500, 3200]));
// Output: 13900 (total sum of votes from all sources)
//------------------------------------------------------------------------------------
//REST PARAMETERS
// Function named totalVotes using rest parameters
function totalVotes(...votes) {
    let sum = 0;
    for (let vote of votes) {
        sum += vote;
    }
    return sum;
}

// Example usage:
console.log(totalVotes(3500, 2700, 4500, 3200));
// Output: 13900 (sum of votes from different regions)
//-------------------------------------------------------------------------------------------
//ARROW FUNCTIONS
// Arrow function named filterCandidates
const filterCandidates = (candidates, threshold) => {
    return candidates
        .filter(candidate => candidate.votes > threshold)
        .map(candidate => candidate.name);
};

// Example usage:
let candidateData = [
    { name: "Alice", votes: 4200 },
    { name: "Bob", votes: 3800 },
    { name: "Charlie", votes: 3100 }
];

console.log(filterCandidates(candidateData, 3500));
// Output: [ "Alice", "Bob" ] (candidates with more than 3500 votes)
//-------------------------------------------------------------------------------------------------
//COMBINING CONCEPTS
// Function analyzeElection combining all concepts
const analyzeElection = (threshold, ...candidates) => {
    // Arrow function to filter candidates based on threshold
    const filteredCandidates = candidates.filter(candidate => candidate.votes > threshold);

    // Recursive function to calculate total votes of filtered candidates
    const calculateTotalVotes = (filteredCandidates) => {
        if (filteredCandidates.length === 0) {
            return 0;
        } else {
            return filteredCandidates[0].votes + calculateTotalVotes(filteredCandidates.slice(1));
        }
    };

    // Calculate total votes of filtered candidates
    const totalVotes = calculateTotalVotes(filteredCandidates);

    // Extract names of filtered candidates
    const candidateNames = filteredCandidates.map(candidate => candidate.name);

    // Return object containing filtered candidate names and total votes
    return {
        candidates: candidateNames,
        totalVotes: totalVotes
    };
};

// Example usage:
let electionData = [
    { name: "Alice", votes: 4200 },
    { name: "Bob", votes: 3800 },
    { name: "Charlie", votes: 3100 },
    { name: "David", votes: 2800 }
];

console.log(analyzeElection(3500, ...electionData));
// Output: { candidates: [ "Alice", "Bob" ], totalVotes: 8000 }
//-----------------------------------------------------------------------------