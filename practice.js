document.getElementById('yell').addEventListener('click', run)

function run() {
  const fName = document.getElementById('firstName').value
  const fMiddle = document.getElementById('firstMiddle').value
  const lMiddle = document.getElementById('lastMiddle').value
  const lName = document.getElementById('lastName').value

const yellNames = `${fName} ${fMiddle} ${lMiddle} ${lName}`
document.getElementById('placeToYell').innerText = yellNames

}
