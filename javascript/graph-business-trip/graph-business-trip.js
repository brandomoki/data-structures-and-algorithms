// Given a business trip itinerary, and an Alaska Airlines route map, is the trip possible with direct flights? If so, how much will the total trip cost be?

// Write a function called business trip
// Arguments: graph, array of city names
// Return: the cost of the trip (if it’s possible) or null (if not)
// Determine whether the trip is possible with direct flights, and how much it would cost.

// Input: graph, array of city names
// Output: cost of trip (if possible) or null (if not)

// Process:
// 1. Check if the trip is possible with direct flights
// 2. If possible, return the cost of the trip
// 3. If not, return null

// Edge cases:
// 1. If the array is empty, return null
// 2. If the array has only one city, return 0

// Pseudocode:
// 1. Check if the array is empty
// 2. If it is, return null
// 3. Check if the array has only one city
// 4. If it does, return 0
// 5. Check if the trip is possible with direct flights
// 6. If it is, return the cost of the trip
// 7. If not, return null

// Big O:
// Time: O(n)
// Space: O(1)

// Algorithm:
// 1. Check if the array is empty
// 2. If it is, return null
// 3. Check if the array has only one city
// 4. If it does, return 0
// 5. Check if the trip is possible with direct flights
// 6. If it is, return the cost of the trip
// 7. If not, return null


// Code:

/**
 * If the array is empty, return null. If the array has one element, return 0. Otherwise, loop through the array and add the cost of each flight to the total cost. If the flight doesn't exist, return
 * null.
 * @param graph - a 2D array representing the graph. The graph is an array of arrays, where each array
 * is a list of nodes.
 * @param array - an array of strings, representing the cities you will visit in order
 * @returns the number of times the value is found in the array.
 */



function businessTrip(graph, array) {

  if (array.length === 0) {
    return null;
  }
  if (array.length === 1) {
    return 0;
  }
  let totalCost = 0;

  for (let i = 0; i < array.length - 1; i++) {
    let currentCity = array[i];
    let nextCity = array[i + 1];

    let neighbors = graph.getNeighbors(currentCity);
    let found = false;

    for (let j = 0; j < neighbors.length; j++) {
      if (neighbors[j].vertex === nextCity) {
        totalCost += neighbors[j].weight;
        found = true;
        break;
      }
    }
    if (!found) {
      return null;
    }
  }
  return totalCost;
}

module.exports = businessTrip;



