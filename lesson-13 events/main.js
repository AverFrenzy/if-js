const searchFormOtherInfo = document.getElementById('adults-children-rooms')
const mainPageDiv = document.querySelector('.main-page')

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
  const optionsItems = document.createElement('div')
  optionsItems.classList.add('options-items')
  optionsDiv.appendChild(optionsItems)
  const optionsTextDiv = document.createElement('div')
  optionsTextDiv.classList.add('options-text-div')
  const optionsSelectItems = document.createElement('div')
  optionsSelectItems.classList.add('options-select-items')
  optionsDiv.appendChild(optionsTextDiv)
  optionsDiv.appendChild(optionsSelectItems)
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
    const optionsItems = document.querySelector('.options-items')
    const optionsItem = document.createElement('div')
    optionsItem.classList.add('options-item')
    const optionsDescription = document.createElement('div')
    const optionsDescriptionText = document.createElement('span')
    optionsDescriptionText.textContent = `${elem.optionType}`
    const optionsItemButtons = document.createElement('div')
    optionsItemButtons.classList.add('options-item-buttons')
    const optionsPlusButton = document.createElement('button')
    optionsPlusButton.classList.add('options-button', 'options-plus-button')
    optionsPlusButton.textContent = '+'
    optionsPlusButton.setAttribute('data-num', index)
    const optionsNumber = document.createElement('span')
    optionsNumber.classList.add('options-number')
    optionsNumber.textContent = `${elem.optionNumber}`
    const optionsMinusButton = document.createElement('button')
    optionsMinusButton.classList.add('options-button', 'options-minus-button')
    optionsMinusButton.textContent = '—'
    optionsMinusButton.setAttribute('data-num', index)
    optionsItems.appendChild(optionsItem)
    optionsItem.appendChild(optionsDescription)
    optionsDescription.appendChild(optionsDescriptionText)
    optionsItem.appendChild(optionsItemButtons)
    optionsItemButtons.appendChild(optionsMinusButton)
    optionsItemButtons.appendChild(optionsNumber)
    optionsItemButtons.appendChild(optionsPlusButton)
    optionsPlusButton.addEventListener('click', addOne)
    optionsMinusButton.addEventListener('click', removeOne)
    if (elem.optionNumber === 0) {
      optionsMinusButton.setAttribute('disabled', 'disabled')
    }
  })
}


const addOne = (e) => {
  if (optionsData[e.target.dataset.num].optionNumber > -1) {
    const button = document.querySelectorAll('.options-minus-button')[e.target.dataset.num]
    button.removeAttribute('disabled', 'disabled')
  }
  if (e.target.dataset.num == 0) {
    if (optionsData[0].optionNumber < 30) {
      optionsData[e.target.dataset.num].optionNumber++
    }
    if (optionsData[0].optionNumber === 30) {
      const button = document.querySelectorAll('.options-plus-button')[e.target.dataset.num]
      button.setAttribute('disabled', 'disabled')
    }
  }
  if (e.target.dataset.num == 1) {
    if (optionsData[1].optionNumber < 10) {
      optionsData[e.target.dataset.num].optionNumber++
      if (optionsData[1].optionNumber === 1) {
        addChildrenAgeQuestion()
      }
      addChildrenAge()
    }
    if (optionsData[1].optionNumber === 10) {
      const button = document.querySelectorAll('.options-plus-button')[e.target.dataset.num]
      button.setAttribute('disabled', 'disabled')
    }
  }
  if (e.target.dataset.num == 2) {
    if (optionsData[2].optionNumber < 30) {
      optionsData[e.target.dataset.num].optionNumber++
    }
    if (optionsData[2].optionNumber === 30) {
      const button = document.querySelectorAll('.options-plus-button')[e.target.dataset.num]
      button.setAttribute('disabled', 'disabled')
    }
  }
  redrawOptionNumber(e.target.dataset.num)
}


const removeOne = (e) => {
  if (optionsData[e.target.dataset.num].optionNumber <= 1) {
    const button = document.querySelectorAll('.options-minus-button')[e.target.dataset.num]
    button.setAttribute('disabled', 'disabled')
  }
  if (optionsData[e.target.dataset.num].optionNumber > 0) {
    optionsData[e.target.dataset.num].optionNumber--
  }
  if (e.target.dataset.num == 0 && optionsData[0].optionNumber < 30) {
    const button = document.querySelectorAll('.options-plus-button')[e.target.dataset.num]
    button.removeAttribute('disabled', 'disabled')
  }
  if (e.target.dataset.num == 1) {
    if (optionsData[1].optionNumber === 0) {
      removeChildrenAgeQuestion()
    }
    if (optionsData[1].optionNumber > -1) {
      removeChildrenAge()
    }
    if (optionsData[1].optionNumber < 10) {
      const button = document.querySelectorAll('.options-plus-button')[e.target.dataset.num]
      button.removeAttribute('disabled', 'disabled')
    }
  }
  if (e.target.dataset.num == 2 && optionsData[1].optionNumber < 30) {
    const button = document.querySelectorAll('.options-plus-button')[e.target.dataset.num]
    button.removeAttribute('disabled', 'disabled')
  }
  redrawOptionNumber(e.target.dataset.num)
}


const redrawOptionNumber = (buttonNumber) => {
  const optionNumber = document.querySelectorAll('.options-number')[buttonNumber]
  optionNumber.textContent = optionsData[buttonNumber].optionNumber
  labelInfoText.innerHTML =
    `${optionsData[0].optionNumber} ${optionsData[0].optionType} — ${optionsData[1].optionNumber} ${optionsData[1].optionType} — ${optionsData[2].optionNumber} ${optionsData[2].optionType}`
}


const addChildrenAgeQuestion = () => {
  const optionsTextDiv = document.querySelector('.options-text-div')
  const optionsText = document.createElement('span')
  optionsText.classList.add('options-text')
  optionsText.textContent = 'What is the age of the child you’re travelling with?'
  optionsTextDiv.appendChild(optionsText)
}


const addChildrenAge = () => {
  const optionsSelectItems = document.querySelector('.options-select-items')
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
  const optionsTextDiv = document.querySelector('.options-text-div')
  const optionsText = document.querySelector('.options-text')
  optionsTextDiv.removeChild(optionsText)
}


const removeChildrenAge = () => {
  const optionsSelectItems = document.querySelector('.options-select-items')
  const optionsSelectItem = document.querySelector('.options-select-item')
  optionsSelectItems.removeChild(optionsSelectItem)
}


const removeOptions = (e) => {
  const optionsDiv = document.querySelector('.options')
  const isOutsideOptionsBlock = optionsDiv && e.target.tagName.toLowerCase() !== 'input' && !e.target.className.includes('options')
  if (isOutsideOptionsBlock) {
    mainPageDiv.removeChild(optionsDiv)
    searchFormOtherInfo.addEventListener('click', createOptionsDiv)
  }
}

searchFormOtherInfo.addEventListener('click', createOptionsDiv)
window.addEventListener('click', removeOptions)
