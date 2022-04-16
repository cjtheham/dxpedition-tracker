// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const StormDB = require("stormdb");
const engine = new StormDB.localFileEngine("./db.stormdb");



window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  const db = new StormDB(engine);
})
