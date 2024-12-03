// script.js
document.getElementById('book-card').addEventListener('click', function () {
  const bookTable = document.getElementById('book-table');
  const journalTable = document.getElementById('journal-table');

  // Hide the journal table if it's visible
  journalTable.style.display = 'none';

  // Toggle the visibility of the book table
  if (bookTable.style.display === 'none') {
    bookTable.style.display = 'table';

    // Populate the book table with data (replace with your actual data fetching logic)
    const bookData = [
      { grant: 'Grant 1', totalBooks: 100, totalTitles: 80, amount: 50000 },
      { grant: 'Grant 2', totalBooks: 150, totalTitles: 120, amount: 75000 },
      // ... more book records
    ];

    const tableBody = bookTable.querySelector('tbody');
    tableBody.innerHTML = '';

    bookData.forEach(book => {
      const row = document.createElement('tr');
      row.innerHTML = `
                <td>${book.grant}</td>
                <td>${book.totalBooks}</td>
                <td>${book.totalTitles}</td>
                <td>${book.amount}</td>
            `;
      tableBody.appendChild(row);
    });
  } else {
    bookTable.style.display = 'none';
  }
});

document.getElementById('periodical-card').addEventListener('click', function () {
  const bookTable = document.getElementById('book-table');
  const journalTable = document.getElementById('journal-table');

  // Hide the book table if it's visible
  bookTable.style.display = 'none';

  // Toggle the visibility of the journal table
  if (journalTable.style.display === 'none') {
    journalTable.style.display = 'table';

    // Populate the journal table with data (replace with your actual data fetching logic)
    const journalData = [
      { srNo: 1, names: "Journal of Science", periodicity: "Monthly" },
      { srNo: 2, names: "The New Yorker", periodicity: "Weekly" },
      { srNo: 3, names: "Nature", periodicity: "Bi-weekly" },
      // ... more journal records
    ];

    const tableBody = journalTable.querySelector('tbody');
    tableBody.innerHTML = '';

    journalData.forEach(journal => {
      const row = document.createElement('tr');
      row.innerHTML = `
                <td>${journal.srNo}</td>
                <td>${journal.names}</td>
                <td>${journal.periodicity}</td>
            `;
      tableBody.appendChild(row);
    });
  } else {
    journalTable.style.display = 'none';
  }
});

document.getElementById('notice-card').addEventListener('click', function () {
  const contentDisplay = document.getElementById('content-display');
  contentDisplay.innerHTML = `
      <h2>Notice Board</h2>
      <p>Important announcements, upcoming events, and library updates.</p>
      <ul>
        <li>Notice 1: Important Announcement</li>
        <li>Notice 2: Upcoming Event</li>
        <li>Notice 3: Library Hours Change</li>
      </ul>
    `;
});





const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(otherCard => {
      otherCard.classList.remove('active');
    });
    card.classList.add('active');

    const contentDisplay = document.getElementById('content-display');

    if (card.id === 'book-card') {
      contentDisplay.innerHTML = `
        <h3>Book Details</h3>
        <table id="book-table">
          <thead style="background-color:#DAE4F0;">
            <tr>
              <th>Grant</th>
              <th>Total No. of Books</th>
              <th>No. of Titles</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Basic Grant</td>
              <td>117</td>
              <td>116</td>
              <td>701</td>
            </tr>
            <tr>
              <td>COSIP</td>
              <td>46</td>
              <td>46</td>
              <td>2,230</td>
            </tr>
             <tr>
              <td>Donated Books</td>
              <td>3,588</td>
              <td>3,114</td>
              <td>48,493</td>
            </tr>
            <tr>
              <td>General</td>
              <td>25,471</td>
              <td>9,150</td>
              <td>16,30,278</td>
            </tr>
             <tr>
              <td>Planning Form</td>
              <td>24</td>
              <td>23</td>
              <td>336</td>
            </tr>
            <tr>
              <td>PSLL & DB</td>
              <td>887</td>
              <td>186</td>
              <td>1,19,221</td>
            </tr>
             <tr>
              <td>UGC</td>
              <td>13,476</td>
              <td>8,139</td>
              <td>8,97,965</td>
            </tr>
             <tr style="font-weight:bolder;">
              <td>Grand Total</td>
              <td>43,635</td>
              <td>20,800</td>
              <td>27,04,998</td>
            </tr>
            </tbody>
        </table>
      `;
    } else if (card.id === 'periodical-card') {
      contentDisplay.innerHTML = `
        <h3>Periodicals & Journals</h3>
        <table id="journal-table">
          <thead style="background-color:#DAE4F0;">
            <tr>
              <th style="background-color:#DAE4F0;">Sr. No.</th>
              <th style="background-color:#DAE4F0;">Name of the News Paper / Magazine </th>
              <th style="background-color:#DAE4F0;">Periodicity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Prajavani</td>
              <td>Daily</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Kannada Prabha</td>
              <td>Daily</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Vijay Karnataka</td>
              <td>Daily</td>
            </tr>
              <tr>
              <td>4</td>
              <td>Udayvani</td>
              <td>Daily</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Vijayvani</td>
              <td>Daily</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Hosadigant</td>
              <td>Daily</td>
            </tr>
            </tbody>
        </table>
      `;
    } else if (card.id === 'notice-card') {
      contentDisplay.innerHTML = `
      <div style="border:5px solid gray; text-align:center; border-radius:20px;">
    <div style=" color: red; height: 250px; margin-top:10px; overflow: hidden; position: relative;">
      <marquee style="position: absolute; color:red;" direction="up" scrollamount="2" behavior="scroll">
        <div>Important Announcement</div><br>
        <div>Upcoming Event</div><br>
        <div>Library Hours Change</div><br>
         <div>Upcoming Event</div><br>
        <div>Library Hours Change</div><br>
         <div>Library Hours Change</div><br>
      </marquee>
    </div>
    <div>
      `;
    }
  });
});