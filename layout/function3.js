//Find the min and max element in the following array and switch their places. Print out the modified array in the console.

// function minMaxElement(array) {
//     var min = array[0];
//     var max = array[0];
//     var maxIndex = 0;
//     var minIndex = 0;

//     for (var i = 0; i < array.length; i++) {
//         if (array[i] < min)
//             min = array[i];
//         minIndex = i;
//     }
//     if (array[i] > max) {
//         max = array[i];
//         maxIndex = i;
//     }
//     array[minIndex] = max;
//     array[maxIndex] = min;
//     return array;
// }
// console.log(minMaxElement([3, 500, 12, 149, 53, 414, 1, 19]));


//Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.


// function newValue(array) {
//     var newArray = [];

//     for (var i = 0; i < array.length; i++) {
//         newArray[i] = array[i] / 2 + 5;
//         if (newArray[i] === 0) {
//             newArray[i] = 20;
//         }
//     }
//     return newArray;

// }

// console.log(newValue([3, 500, -10, 149, 53, 414, 1, 19]));

//Initialize two arrays.
//The first one should contain student names, the second one the number of points for each student.
//Display students' names with their corresponding grade.

// function calculateGrade(points) {
//     if (points >= 91) {
//         return 10;
//     } else if (points >= 81) {
//         return 9;
//     } else if (points >= 71) {
//         return 8;
//     } else if (points >= 61) {
//         return 7;
//     } else if (points >= 51) {
//         return 6;
//     } else {
//         return 0;
//     }
// }

// function studentsGrades(arrayNames, arrayGrades) {
//     var output = "";

//     for (var i = 0; i < arrayNames.length; i++) {
//         var grade = calculateGrade(arrayGrades[i]);

//         if (grade === 0) {
//             output += arrayNames[i] + " acquired " + arrayGrades[i] + " points and failed to complete the exam.\n";
//         } else {
//             output += arrayNames[i] + " acquired " + arrayGrades[i] + " points and earned " + grade + ".\n";
//         }
//     }

//     return output;
// }

// console.log(studentsGrades(["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], [50, 39, 63, 72, 99, 51, 83, 59]));


//Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.


function sortArray(array) {
    for (var i = 0; i < array.length; i++) {
        var position = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[position] > array[j]) {
                position = j;
            }

        }
        var tmp = array[i];
        array[i] = array[position];
        array[position] = tmp;
    }
    return array;
}


function multipliedArray (array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray[i] = array[i];
    }
    
    sortArray(newArray);
    
    for (var i = 0; i < newArray.length; i++) {
        newArray[i] = newArray[i] * 2;
    }
    return newArray;
}


console.log(multipliedArray([13, 11, 15, 5, 6, 1, 8, 2, 12]));
