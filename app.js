console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    for (let i = 1; i <= Math.abs(count); i ++) {
        if (i % 2 != 0) {
            console.log(i * Math.sign(count));
        }
    }
}

printOdds(-10);
printOdds(10);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName = "User", age = 0) {
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if (age >= 16) {
        console.log(aboveSixteen);
    } else {
        console.log(belowSixteen);
    }
}

checkAge("Ben", 12);
checkAge("Seth", 16);
checkAge("Cameron", 21);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function findQuadrant(x, y) {
  switch (true) {
    case x > 0 && y > 0:
        return "Quadrant 1";
    case x < 0 && y > 0:
        return "Quadrant 2";
    case x < 0 && y < 0:
        return "Quadrant 3";
    case x > 0 && y < 0:
        return "Quadrant 4";
    case x == 0 && y != 0:
        return "X Axis";
    case x != 0 && y == 0:
        return "Y Axis";
    default:
        return "Origin";           
    }
}

console.log(findQuadrant(1, 1));
console.log(findQuadrant(-1, 1));
console.log(findQuadrant(-1, -1));
console.log(findQuadrant(1, -1));
console.log(findQuadrant(0, -1));
console.log(findQuadrant(1, 0));
console.log(findQuadrant(0, 0));
// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function checkTriangle(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Invalid triangle.";
    }

    if (a === b && b === c) {
        return "Equilateral triangle.";
    } else if (a === b || b === c || a === c) {
        return "Isosceles triangle.";
    } else {
        return "Scalene triangle.";
    }
}

console.log(checkTriangle(2, 3, 4));
console.log(checkTriangle(2, 2, 2));
console.log(checkTriangle(1, 2, 2));
console.log(checkTriangle(1, 1, 2));

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function dataPlanStatus(planLimit, day, usage) {
    const daysInMonth = 30;
    const daysRemaining = daysInMonth - day;
    const averageDailyUse = usage / day;
    const projectedUsage = averageDailyUse * daysInMonth;
    const remainingData = planLimit - usage;
    const remainingAverageUse = remainingData / daysRemaining;
    
    console.log(`${day} days used, ${daysRemaining} days remaining`);
    console.log(`Average daily use: ${averageDailyUse.toFixed(2)} GB/day`);

    if (projectedUsage > planLimit) {
        const excessData = projectedUsage - planLimit;
        console.log(`You are EXCEEDING your average daily use (${averageDailyUse.toFixed(2)} GB/day), continuing this high usage, you'll exceed your data plan by ${excessData.toFixed(2)} GB.`);
        console.log(`To stay below your data plan, use no more than ${remainingAverageUse.toFixed(2)} GB/day.`);
    } else {
        console.log(`You are within your data limit. You can use up to ${remainingAverageUse.toFixed(2)} GB/day.`);
    }

    if (remainingData <= 0) {
        console.log("You have run out of data.");
    }
}

dataPlanStatus(50, 12, 25);