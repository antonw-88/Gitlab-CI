const { get } = require("../controllers/messageController")

function getRandomString (array) {
    return array[Math.floor(Math.random() * array.length)].string
  }

exports.getRandomString = getRandomString
