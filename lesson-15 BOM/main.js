const createHomesBlockFromStorage = () => {
  const homesItem = JSON.parse(sessionStorage.getItem('homesItem'))
  const mainContainer = document.createElement('div')
  mainContainer.className = 'container'
  mainContainer.innerHTML =
      `
      <div class="homes">
        <h2 class="homes__heading">Homes guests loves</h2>
        <div class="homes__img-container">
          ${homesItem}
        </div>
      </div>
      `
  document.body.appendChild(mainContainer)
}


async function createHomesGuestBlock() {
  try {
    let response = await fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
    let data = await response.json()
    const homesItem = data.map(elem => {
      return (
        `
        <div class="homes__item">
          <div class="homes__img-wrapper">
            <img src="${elem.imageUrl}">
          </div>
            <span class="homes__aparts-name">${elem.name}</span>
            <span class="homes__aparts-location">${elem.city}, ${elem.country}</span>
        </div>
        `)
    }).join('')

    const mainContainer = document.createElement('div')
    mainContainer.className = 'container'
    mainContainer.innerHTML =
      `
      <div class="homes">
        <h2 class="homes__heading">Homes guests loves</h2>
        <div class="homes__img-container">
          ${homesItem}
        </div>
      </div>
      `
    document.body.appendChild(mainContainer)
    
    sessionStorage.setItem('homesItem', JSON.stringify(homesItem))
  } catch (err) {
    console.log(err)
  }
}

if (sessionStorage.hasOwnProperty('homesItem')) {
  createHomesBlockFromStorage()
}
else {
  createHomesGuestBlock()
}
