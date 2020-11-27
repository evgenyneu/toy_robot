export function init(onClick) {
  let submitButton = document.querySelector(".ToyRobot-submitButton");
  let inputElement = document.querySelector(".ToyRobot-input");
  submitButton.onclick = () => onClick(inputElement.value);
}

export function appendToLog(output) {
  let logElement = document.querySelector(".ToyRobot-log");
  logElement.innerHTML = output + '<br>' + logElement.innerHTML;
}
