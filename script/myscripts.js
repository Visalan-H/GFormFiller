document.addEventListener("DOMContentLoaded", function() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed, so we add 1
  const day = String(today.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  document.getElementById("examDate").value = formattedDate;
});
function submitForm() {
  const siteLink = document.getElementById("siteLink").value;
  const regNumber = encodeURIComponent(
    document.getElementById("regNumber").value,
  );
  const studentName = encodeURIComponent(
    document.getElementById("studentName").value,
  );
  const macAddress = encodeURIComponent(
    document.getElementById("macAddress").value,
  );
  const courseCode = encodeURIComponent(
    document.getElementById("courseCode").value,
  );
  const courseName = encodeURIComponent(
    document.getElementById("courseName").value,
  );
  const mobileNumber = encodeURIComponent(
    document.getElementById("mobileNumber").value,
  );
  const department = encodeURIComponent(
    document.getElementById("department").value,
  );
  const year = encodeURIComponent(document.getElementById("year").value);
  const semester = encodeURIComponent(
    document.getElementById("semester").value,
  );
  let examDate = encodeURIComponent(document.getElementById("examDate").value);
  let parts = examDate.split("-");
  examDate = `${parts[2]}-${parts[1]}-${parts[0]}`;

  // Format the query string
  const queryString = `?entry.151300878=${courseCode}&entry.269045572=${regNumber}&entry.470796958=${examDate}&entry.545502880=${year}&entry.619978745=${mobileNumber}&entry.767058731=${macAddress}&entry.1474847017=${studentName}&entry.1661013302=${courseName}&entry.2025981088=${department}&entry.2102436453=${semester}`;

  // Display the result as a clickable link
  document.getElementById("result").innerHTML =
    `<a href="${siteLink}${queryString}" target="_blank">Open Link</a><button id="copyButton">Copy Link</button>`;

  document.getElementById("copyButton").addEventListener("click", function() {
    navigator.clipboard.writeText(`${siteLink}${queryString}`);
    document.getElementById("copyButton").style = "background-color: grey;";
  });
}
