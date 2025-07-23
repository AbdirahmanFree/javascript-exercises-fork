const findTheOldest = function(people) {
    let oldest ="" ;
    let oldestAge = 0;
    for(person of people){
        let age = 0;
        if(person.yearOfDeath == undefined){
            age = 2025  - person.yearOfBirth;
        }
        else{
            age = person.yearOfDeath  -person.yearOfBirth;
        }

        if (age >oldestAge){
            oldestAge = age;
            oldest = person;
        }
    }
    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
