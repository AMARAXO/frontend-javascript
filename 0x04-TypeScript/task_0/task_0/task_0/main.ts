// main.ts
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Creating two students
  const student1: Student = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 20,
    location: "New York",
  };
  
  const student2: Student = {
    firstName: "Bob",
    lastName: "Smith",
    age: 22,
    location: "California",
  };
  
  // Array of students
  const studentsList: Student[] = [student1, student2];
  
  // Rendering a table using Vanilla JS
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  
  studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");
  
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });
  
  table.appendChild(tbody);
  document.body.appendChild(table);
  