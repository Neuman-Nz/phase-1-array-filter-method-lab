const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

findMatching(drivers,'Bobby')
function findMatching(drivers, string) {
    return drivers.filter((matching) => matching.toLowerCase() === string.toLowerCase());
  }
  
  function fuzzyMatch(drivers, letters) {
    return drivers.filter((matching) => matching.toLowerCase().indexOf(letters.toLowerCase()) === 0);
  }
  
  function matchName(drivers, driverName) {
    return drivers.filter((record) => record.name === driverName);
  }