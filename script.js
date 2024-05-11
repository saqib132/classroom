const classroomData = {
  "roll1": "Room A",
  "roll2": "Room B",
  "roll3": "Room C",
  // Add more roll numbers and corresponding classrooms as needed
};

const form = document.getElementById('classroomForm');
const resultDiv = document.getElementById('classroomResult');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const rollNumber = document.getElementById('rollNumber').value.trim();
  const classroom = classroomData[rollNumber];
  if (classroom) {
    resultDiv.innerHTML = `<p>Your class is: <strong>${classroom}</strong></p>`;
  } else {
    resultDiv.innerHTML = "<p>Sorry, your roll number doesn't match any records.</p>";
  }
});
