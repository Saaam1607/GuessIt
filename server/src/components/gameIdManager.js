function generateRandomGameId(activeIds) {
    const newID = Math.floor(Math.random() * 90000) + 10000;
    while (activeIds.includes(newID)) {
        newID = Math.floor(Math.random() * 90000) + 10000;
    }
    return newID;
}

function checkIfActive

module.exports = { generatePlayerId };