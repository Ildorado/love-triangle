/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences) {
  // your implementation
  preferences.unshift(0);
  let count = 0;
  for(let i = 1; i < preferences.length; i++) {
    // i = n place Spichonee; preferences[i] =place of Spichonee whom i loves
    // preferences[preferences[i]] = place of Spichonee whom preferences[i] loves
    // preferences[preferences[preferences[i]] ] = place of person whom 
    // preferences[preferences[i]] loves, if this places is the place 
    // of i person then the triangle is closed
    if(i != preferences[i]) {
      if (preferences[ preferences[preferences[i]] ] ==i) {
        count++;
        preferences[i] = 0;
      }
    }
  }
  return count;
};

