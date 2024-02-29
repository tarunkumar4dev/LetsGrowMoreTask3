function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const website = document.getElementById("website").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  let skills = [];
  const skillCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  for (const checkbox of skillCheckboxes) {
    skills.push(checkbox.value);
  }

  const enrolledStudents = document.getElementById("enrolled-students");

  const newStudent = `<p><b>Name:</b> ${name}</p>
                        <p><b>Email:</b> ${email}</p>
                        <p><b>Website:</b> <a href="${website}">${website}</a></p>
                        <p><b>Gender:</b> ${gender}</p>
                        <p><b>Skills:</b> ${skills.join(", ")}</p>`;

  enrolledStudents.innerHTML += newStudent;
}
