function updateDateTime() {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1; // Months are zero-indexed, so add 1
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    // Format: DD-MM-YYYY HH:MM:SS
    const formattedDateTime = `Date-${day}-${month}-${year} | Time-${hours}:${minutes}:${seconds}`;
    
    // Update the date-time element
    document.getElementById("date-time").textContent = formattedDateTime;
  }

  // Call the function to set the date and time initially
  updateDateTime();

  // Update the date and time every second
  setInterval(updateDateTime, 1000);