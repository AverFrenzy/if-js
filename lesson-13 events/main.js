const searchFormOtherInfo = document.getElementById('adults-children-rooms')
const mainPageDiv = document.getElementById('main-page')

const optionsData = [
  {
    optionNumber: 1,
    optionType: 'Adults',
  },
  {
    optionNumber: 0,
    optionType: 'Children',
  },
  {
    optionNumber: 1,
    optionType: 'Rooms',
  }
]


const labelInfoText = document.getElementById('option-adults-children-rooms')
labelInfoText.innerHTML =
  `${optionsData[0].optionNumber} ${optionsData[0].optionType} — ${optionsData[1].optionNumber} ${optionsData[1].optionType} — ${optionsData[2].optionNumber} ${optionsData[2].optionType}`


const createOptionsDiv = (e) => {
  const optionsDiv = document.createElement('div')
  optionsDiv.classList.add('options')
  optionsDiv.setAttribute('id', 'options')
  optionsDiv.innerHTML =
    `
      <div class="options-items" id="options-items"></div>
      <div class="options-text-div" id="options-text-div"></div>
      <div class="options-select-items" id="options-select-items"></div>
    `
  mainPageDiv.appendChild(optionsDiv)
  createOptions()
  searchFormOtherInfo.removeEventListener('click', createOptionsDiv)
  if (optionsData[1].optionNumber > 0) {
    addChildrenAgeQuestion()
    for (let i = 0; i < optionsData[1].optionNumber; i++) {
      addChildrenAge()
    }
  }
}


const createOptions = () => {
  optionsData.forEach((elem, index) => {
    const optionsItems = document.getElementById('options-items')
    const optionsItem = document.createElement('div')
    optionsItem.classList.add('options-item')
    optionsItem.innerHTML =
      `
        <div class="options-description-text">
          <span>${elem.optionType}</span>
        </div>
        <div class="options-item-buttons">
          <button class="options-button options-minus-button_js" id="options-minus-button-${index}" type="submit" data-num="${index}">—</button>
          <span class="options-counter-number">${elem.optionNumber}</span>
          <button class="options-button options-plus-button_js" id="options-plus-button-${index}" type="submit" data-num="${index}">+</button>
        </div>
      `
    optionsItems.appendChild(optionsItem)
    document.getElementById(`options-plus-button-${index}`).addEventListener('click', addOne)
    document.getElementById(`options-minus-button-${index}`).addEventListener('click', removeOne)
    if (elem.optionNumber === 0) {
      document.getElementById(`options-minus-button-${index}`).setAttribute('disabled', 'disabled')
    }
  })
}


const addOne = (e) => {
  const buttonDataSetIndex = e.target.dataset.num
  if (optionsData[buttonDataSetIndex].optionNumber > -1) {
    const optionsMinusButton = document.querySelectorAll('.options-minus-button_js')[buttonDataSetIndex]
    optionsMinusButton.removeAttribute('disabled', 'disabled')
  }
  if (buttonDataSetIndex == 0) {
    addOneAdult(buttonDataSetIndex)
  }
  if (buttonDataSetIndex == 1) {
    addOneChild(buttonDataSetIndex)
  }
  if (buttonDataSetIndex == 2) {
    addOneRoom(buttonDataSetIndex)
  }
  refreshOptionsCounterNumber(buttonDataSetIndex)
}


const addOneAdult = (buttonDataSetIndex) => {
  if (optionsData[0].optionNumber < 30) {
    optionsData[buttonDataSetIndex].optionNumber++
  }
  if (optionsData[0].optionNumber === 30) {
    const optionsPlusButton = document.querySelectorAll('.options-plus-button_js')[buttonDataSetIndex]
    optionsPlusButton.setAttribute('disabled', 'disabled')
  }
}


const addOneChild = (buttonDataSetIndex) => {
  if (optionsData[1].optionNumber < 10) {
    optionsData[buttonDataSetIndex].optionNumber++
    if (optionsData[1].optionNumber === 1) {
      addChildrenAgeQuestion()
    }
    addChildrenAge()
  }
  if (optionsData[1].optionNumber === 10) {
    const optionsPlusButton = document.querySelectorAll('.options-plus-button_js')[buttonDataSetIndex]
    optionsPlusButton.setAttribute('disabled', 'disabled')
  }
}


const addOneRoom = (buttonDataSetIndex) => {
  if (optionsData[2].optionNumber < 30) {
    optionsData[buttonDataSetIndex].optionNumber++
  }
  if (optionsData[2].optionNumber === 30) {
    const optionsPlusButton = document.querySelectorAll('.options-plus-button_js')[buttonDataSetIndex]
    optionsPlusButton.setAttribute('disabled', 'disabled')
  }
}


const removeOne = (e) => {
  const buttonDataSetIndex = e.target.dataset.num
  if (optionsData[buttonDataSetIndex].optionNumber <= 1) {
    const optionsMinusButton = document.querySelectorAll('.options-minus-button_js')[buttonDataSetIndex]
    optionsMinusButton.setAttribute('disabled', 'disabled')
  }
  if (optionsData[buttonDataSetIndex].optionNumber > 0) {
    optionsData[buttonDataSetIndex].optionNumber--
  }
  if (buttonDataSetIndex == 0 && optionsData[0].optionNumber < 30) {
    const optionsPlusButton = document.querySelectorAll('.options-plus-button_js')[buttonDataSetIndex]
    optionsPlusButton.removeAttribute('disabled', 'disabled')
  }
  if (buttonDataSetIndex == 1) {
    removeOneChild(buttonDataSetIndex)
  }
  if (buttonDataSetIndex == 2 && optionsData[1].optionNumber < 30) {
    const optionsPlusButton = document.querySelectorAll('.options-plus-button_js')[buttonDataSetIndex]
    optionsPlusButton.removeAttribute('disabled', 'disabled')
  }
  refreshOptionsCounterNumber(buttonDataSetIndex)
}


const removeOneChild = (buttonDataSetIndex) => {
  if (optionsData[1].optionNumber === 0) {
    removeChildrenAgeQuestion()
  }
  if (optionsData[1].optionNumber > -1) {
    removeChildrenAge()
  }
  if (optionsData[1].optionNumber < 10) {
    const optionsPlusButton = document.querySelectorAll('.options-plus-button_js')[buttonDataSetIndex]
    optionsPlusButton.removeAttribute('disabled', 'disabled')
  }
}

const refreshOptionsCounterNumber = (counterDataSetIndex) => {
  const optionCounterNumber = document.querySelectorAll('.options-counter-number')[counterDataSetIndex]
  optionCounterNumber.textContent = optionsData[counterDataSetIndex].optionNumber
  labelInfoText.innerHTML =
    `${optionsData[0].optionNumber} ${optionsData[0].optionType} — ${optionsData[1].optionNumber} ${optionsData[1].optionType} — ${optionsData[2].optionNumber} ${optionsData[2].optionType}`
}


const addChildrenAgeQuestion = () => {
  const optionsTextDiv = document.getElementById('options-text-div')
  optionsTextDiv.innerHTML = 
  `
    <span class="options-text" id="options-text">What is the age of the child you’re travelling with?</span>
  `
}


const addChildrenAge = () => {
  const optionsSelectItems = document.getElementById('options-select-items')
  const optionsSelectItem = document.createElement('div')
  optionsSelectItems.appendChild(optionsSelectItem)
  optionsSelectItem.classList.add('options-select-item')
  const optionsChildrensAge = document.createElement('select')
  optionsChildrensAge.setAttribute('name', 'options-child-age')
  optionsChildrensAge.setAttribute('id', 'options-child-age')
  optionsChildrensAge.classList.add('options-child-age-select')
  for (i = 1; i <= 17; i++) {
    const optionOfOptionsChildAge = document.createElement('option')
    optionOfOptionsChildAge.setAttribute('value', i)
    if (optionOfOptionsChildAge.getAttribute('value') == 1) {
      optionOfOptionsChildAge.innerText = ` ${i} year old`
    } else {
      optionOfOptionsChildAge.innerText = ` ${i} years old`
    }
    optionsSelectItem.appendChild(optionsChildrensAge)
    optionsChildrensAge.appendChild(optionOfOptionsChildAge)
  }
}


const removeChildrenAgeQuestion = () => {
  const optionsTextDiv = document.getElementById('options-text-div')
  const optionsText = document.getElementById('options-text')
  optionsTextDiv.removeChild(optionsText)
}


const removeChildrenAge = () => {
  const optionsSelectItems = document.getElementById('options-select-items')
  const optionsSelectItem = document.querySelector('.options-select-item:last-child')
  optionsSelectItems.removeChild(optionsSelectItem)
}


const removeOptions = (e) => {
  const optionsDiv = document.getElementById('options')
  const isOutsideOptionsBlock = optionsDiv && e.target.tagName.toLowerCase() !== 'input' && !e.target.className.includes('options')
  if (isOutsideOptionsBlock) {
    mainPageDiv.removeChild(optionsDiv)
    searchFormOtherInfo.addEventListener('click', createOptionsDiv)
  }
}

searchFormOtherInfo.addEventListener('click', createOptionsDiv)
window.addEventListener('click', removeOptions)
