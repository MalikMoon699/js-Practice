// Employee Database Management System

let employees = [];

const addEmployee = () => {
  const name = document.getElementById("name").value;
  const position = document.getElementById("position").value;
  const salary = document.getElementById("salary").value;

  if (name && position && salary) {
    employees.push({ name, position, salary });
    displayEmployees();
    clearInputs();
  }
};

const displayEmployees = () => {
  const table = document.getElementById("employeeTable");
  table.innerHTML = "";
  employees.forEach((Employee, index) => {
    table.innerHTML += `
                    <tr>
                        <td>${Employee.name}</td>
                        <td>${Employee.position}</td>
                        <td>${Employee.salary}</td>
                        <td>
                            <button onclick="editEmployee(${index})">Edit</button>
                            <button onclick="deleteEmployee(${index})">Delete</button>
                        </td>
                    </tr>
                `;
  });
};

const deleteEmployee = (index) => {
  employees.splice(index, 1);
  displayEmployees();
};

const editEmployee = (index) => {
  const Employee = employees[index];
  document.getElementById("name").value = Employee.name;
  document.getElementById("position").value = Employee.position;
  document.getElementById("salary").value = Employee.salary;
  deleteEmployee(index);
};

const clearInputs = () => {
  document.getElementById("name").value = "";
  document.getElementById("position").value = "";
  document.getElementById("salary").value = "";
};
