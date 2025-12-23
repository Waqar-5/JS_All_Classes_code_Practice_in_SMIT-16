// Student Management System
// ===== Student Management System =====

// 1️⃣ Array to store student objects
const students = [];

// 2️⃣ Function to add a student
function addStudent(name, age, marks) {
    const student = { name, age, marks }; // student object
    students.push(student); // add to array
}

// Add some sample students
addStudent('Ali', 20, { math: 90, english: 85, science: 95 });
addStudent('Sara', 22, { math: 75, english: 95, science: 80 });
addStudent('John', 21, { math: 88, english: 80, science: 85 });

// 3️⃣ List all students
console.log('--- All Students ---');
for (const student of students) { // iterate array of students
    for (const key in student) { // iterate object keys of each student
        if (key !== 'marks') {
            console.log(`${key}: ${student[key]}`);
        } else {
            console.log('Marks:');
            for (const subject in student.marks) { // iterate marks object
                console.log(`  ${subject}: ${student.marks[subject]}`);
            }
        }
    }
    console.log('----------------');
}

// 4️⃣ Calculate average marks for each student
console.log('--- Average Marks ---');
for (const student of students) { // iterate array
    let total = 0;
    let count = 0;
    for (const subject in student.marks) { // iterate marks
        total += student.marks[subject];
        count++;
    }
    const average = total / count;
    console.log(`${student.name}'s average: ${average.toFixed(2)}`);
}

// 5️⃣ Find top student
let topStudent = null;
let highestAverage = 0;

for (const student of students) { // iterate students
    let total = 0;
    let count = 0;
    for (const subject in student.marks) { // iterate marks
        total += student.marks[subject];
        count++;
    }
    const average = total / count;
    if (average > highestAverage) {
        highestAverage = average;
        topStudent = student.name;
    }
}

console.log('--- Top Student ---');
console.log(`${topStudent} has the highest average: ${highestAverage.toFixed(2)}`);

// 6️⃣ Filter students with marks above 85 in math
console.log('--- Students with Math > 85 ---');
for (const student of students) {
    if (student.marks.math > 85) {
        console.log(student.name);
    }
}
