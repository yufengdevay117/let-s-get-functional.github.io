// #!/usr/bin/env node

'use strict';

var maleCount = function(array){
  let males = []

    for (let i = 0; i < array.length; i++){
       
        if (array[i].gender === "male"){
          males.push(array[i]);
        }
    } 
    return males.length;
};

var femaleCount = function(array){
  let femaleArray = array.filter(function(customer) {
    return customer.gender === 'female';
  });
  return femaleArray.length;
};

var oldestCustomer = function(array){
  let oldest = array.reduce(function(accumulator, current) {
    if (current.age > accumulator.age) {
      return current;
    }
    return accumulator;
  });
  

  if (typeof oldest.name === 'string') {
    return oldest.name;
  } else if (oldest.customerName) {
    return oldest.customerName;
  }
  
  return oldest.name; 
};
  
var youngestCustomer = function(array){
  let youngest = array.reduce(function(accumulator, current) {
    
    if (current.age < accumulator.age) {
      return current;
    }
    return accumulator;
  });
  
 
  return youngest.name;
};

var averageBalance = function(array){
  if (array.length === 0) {
    return 0;
  }


  let totalBalance = array.reduce(function(accumulator, current) {
   
    let cleanBalance = parseFloat(current.balance.replace(/[$,]/g, ""));
    return accumulator + cleanBalance;
  }, 0);

  return totalBalance / array.length;
};

var firstLetterCount = function(array, letter){
  var count = 0;
  var targetLetter = letter.toLowerCase();
  
  for (var i = 0; i < array.length; i++) {
    var customer = array[i];
    if (customer && customer.name) {
      var firstChar = customer.name.charAt(0).toLowerCase();
      if (firstChar === targetLetter) {
        count++;
      }
    }
  }
  
  return count;
};

var friendFirstLetterCount = function(array, customer, letter){
  return array.reduce(function(count, c) {
    if (c.name === customer) {
      c.friends.forEach(function(f) {
        if (f.name.charAt(0).toLowerCase() === letter.toLowerCase()) {
          count++;
        }
      });
    }
    return count;
  }, 0);
};

var friendsCount = function(array, name){
  let matches = array.filter(function(customer) {
    return customer.friends.some(function(friend) {
      return friend.name === name;
    });
  });
  
  return matches.map(function(customer) {
    return customer.name;
  });
};

var topThreeTags = function(array){
  let tagCounts = array.reduce(function(counts, customer) {
    customer.tags.forEach(function(tag) {
      counts[tag] = (counts[tag] || 0) + 1;
    });
    return counts;
  }, {});

  return Object.keys(tagCounts)
    .sort(function(a, b) {
      return tagCounts[b] - tagCounts[a];
    })
    .slice(0, 3);
};

var genderCount = function(array){
  return array.reduce(function(accumulator, customer) {
    if (accumulator[customer.gender] !== undefined) {
      accumulator[customer.gender]++;
    } else {
      accumulator[customer.gender] = 1;
    }
    return accumulator;
  }, {});
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
// module.exports.maleCount = maleCount;
// module.exports.femaleCount = femaleCount;
// module.exports.oldestCustomer = oldestCustomer;
// module.exports.youngestCustomer = youngestCustomer;
// module.exports.averageBalance = averageBalance;
// module.exports.firstLetterCount = firstLetterCount;
// module.exports.friendFirstLetterCount = friendFirstLetterCount;
// module.exports.friendsCount = friendsCount;
// module.exports.topThreeTags = topThreeTags;
// module.exports.genderCount = genderCount;
