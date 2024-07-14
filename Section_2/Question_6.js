// Create an object named student with properties name, age, and grades. Add a method calculateAverage that calculates the average of the grades.

const student = {
    name: "John",
    age: 20,
    grades: [85, 90, 78, 92],
    calculateAverage() {
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    }
};

console.log(student.calculateAverage()); // calculates and logs the average
