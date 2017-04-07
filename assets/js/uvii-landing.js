
function onDemoButtonClick (eventArgs) {
  eventArgs.preventDefault()
  window.Intercom('show')
}

function configureIntercomIfExists () {
  if (window.Intercom) {
    var $demoButtons = document.querySelectorAll('.js-demo-button')
    for (var i = 0; i < $demoButtons.length; i++) {
      $demoButtons.item(i).onclick = onDemoButtonClick
    }
  }
}

configureIntercomIfExists()
