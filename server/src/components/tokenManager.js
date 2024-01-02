let tokens = [];

function generatePlayerId() {
  return (new Date()).getTime();
}

module.exports = { generatePlayerId };