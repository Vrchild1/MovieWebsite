const names = ["Caleb", "Shaun", "Charlotte", "Belinda"];
let initialStarterIndex = 3; // Index of the person who starts initially
let startDate = new Date("2023-10-2"); // Change this to your desired start date in the format YYYY-MM-DD

function updateTurnDisplay() {
    const currentTurnElement = document.getElementById("currentTurn");
    const currentDate = new Date();
    const millisecondsInWeek = 7 * 24 * 60 * 60 * 1000;

    // Calculate the number of weeks since the start date
    const weeksPassed = Math.floor((currentDate - startDate) / millisecondsInWeek);

    // Calculate the index for the current turn based on the number of weeks
    const currentTurnIndex = (initialStarterIndex + weeksPassed) % names.length;
    const currentTurnName = names[currentTurnIndex];

    // If the rotation is complete, display the initial starter
    const displayText = weeksPassed >= names.length ? names[initialStarterIndex] : currentTurnName;

    currentTurnElement.textContent = displayText;
}

// Initial update
updateTurnDisplay();
