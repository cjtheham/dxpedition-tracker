// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const engine = new BrowserEngine('db')
const db = new StormDB(engine);

function updateCallsign(element) {
    const call = document.getElementById("callsign");
    db.set('call', call.value).save();
}

function toggleCheckbox(element) {
     if(element.checked) {
        element.parentNode.classList.add('table-success')
        element.parentNode.classList.remove('table-danger')
     } else if (!element.checked) {
        element.parentNode.classList.add('table-danger')
        element.parentNode.classList.remove('table-success')
     }
     db.get("bands").set(element.name, element.checked).save();
}

var elements = document.getElementsByClassName("an-input")

for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    
    if(element.checked) {
        
     } else if (!element.checked) {
        
     };
     
    const dbGrab = db.get("bands").value()[element.name];
    if(dbGrab == true) {
        if (!element.checked) {
            element.checked = true;
            element.parentNode.classList.add('table-success')
            element.parentNode.classList.remove('table-danger')
        }
    }
    else {
        element.checked = false;
        element.parentNode.classList.add('table-danger')
        element.parentNode.classList.remove('table-success')
    }
}

document.getElementById("callsign").value = db.get('call').value();