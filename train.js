var trainData = new Firebase("https://trainhw.firebaseio.com/");

// 2. Button for adding trains
$("#addTrainBtn").on("click", function(){

    // Grabs user input
    var trainName = $("#trainNameInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var trainTime = moment($("#trainTimeInput").val().trim(), "DD/MM/YY").format("X");
    var frequency = $("#frequencyInput").val().trim();

    // Creates local "temporary" object for holding employee data
    var newTrain = {
        name:  trainName,
        destination: trainDestination,
        time: trainTime,
        frequency: trainFrequency,
    }

    // Uploads employee data to the database
    trainData.push(newTrain);

    // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.destination); 
    console.log(newTrain.time);
    console.log(newTrain.frequency)

    // Alert
    alert("Train information added");

    // Clears all of the text-boxes
    $("#trainNameInput").val("");
    $("#destinationInput").val("");
    $("#timeInput").val("");
    $("#frequencyInput").val("");

    // Determine when the next train arrives.
    return false;
});


// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
trainData.on("child_added", function(childSnapshot, prevChildKey){

    console.log(childSnapshot.val());

    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().role;
    var trainTime = childSnapshot.val().start;
    var frequency = childSnapshot.val().rate;

    // Employee Info
    console.log(trainName);
    console.log(destination);
    console.log(trainTime);
    console.log(frequency);

    // // Prettify the employee start
    // var empStartPretty = moment.unix(empStart).format("MM/DD/YY");
    // // Calculate the months worked using hardcore math
    // // To calculate the months worked 
    // var empMonths = moment().diff(moment.unix(empStart, 'X'), "months");
    // console.log(empMonths);

    // // Calculate the total billed rate
    // var empBilled = empMonths * empRate;
    // console.log(empBilled);

    // Add each train's data into the table
    $("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + empStartPretty + "</td><td>" + empRate + "</td><td>" + empMonths + "</td><td>" + empBilled + "</td></tr>");

});

// Will continue to work on the HW