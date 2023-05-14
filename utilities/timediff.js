// Function to calculate the difference between two times in hours
function calculateTimeDifference(startDate, startTime, endTime) {
  // Parse the date and time strings into Date objects
  const start = new Date(`${startDate}T${startTime}:00`);
  const end = new Date(`${startDate}T${endTime}:00`);

  // Calculate the difference in milliseconds
  const diff = end - start;

  // Convert the milliseconds to hours
  const hours = Math.floor(diff / 1000 / 60);

  return hours;
}

// Export the function
module.exports = calculateTimeDifference;
