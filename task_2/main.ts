// main.ts
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  return typeof salary === "number" && salary < 500
    ? new Teacher()
    : new Director();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));

interface Employee {
  name: string;
  role: string;
}

class Director {
  workDirectorTasks() {
    return "Getting to director tasks";
  }
}

class Teacher {
  workTeacherTasks() {
    return "Getting to work";
  }
}

function isDirector(employee: Employee): employee is Director {
  return employee.role === "Director";
}

function executeWork(employee: Employee): void {
  if (isDirector(employee)) {
    console.log(new Director().workDirectorTasks());
  } else {
    console.log(new Teacher().workTeacherTasks());
  }
}

// Test Cases
executeWork({ name: "Alice", role: "Teacher" }); // "Getting to work"
executeWork({ name: "Bob", role: "Director" });  // "Getting to director tasks"

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  return `Teaching ${todayClass}`;
}

// Test Cases
console.log(teachClass("Math"));    // "Teaching Math"
console.log(teachClass("History")); // "Teaching History"
