const data = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
  },
];


const mainContainer = document.createElement('div')
mainContainer.className = 'container'
const homesContainer = document.createElement('div')
homesContainer.className = 'homes'
const homesImgContainer = document.createElement('div')
homesImgContainer.className = 'homes__img-container'
const header = document.createElement('h2')
header.className = 'homes__heading'
header.textContent = 'Homes guests loves'

mainContainer.appendChild(homesContainer)
mainContainer.appendChild(header)
mainContainer.appendChild(homesImgContainer)


data.forEach(elem => {
  const homesItem = document.createElement('div') 
  homesItem.className = 'homes__item'
  const homesImgWrapper = document.createElement('div')
  homesImgWrapper.className = 'homes__img-wrapper'
  const homesImg = document.createElement('img')
  const homesAppartName = document.createElement('span')
  homesAppartName.className = 'homes__aparts-name'
  const homesAppartLocation = document.createElement('span')
  homesAppartLocation.className = 'homes__aparts-location'
  homesImgContainer.appendChild(homesItem)
  homesItem.appendChild(homesImgWrapper)
  homesImgWrapper.appendChild(homesImg)
  homesItem.appendChild(homesAppartName)
  homesItem.appendChild(homesAppartLocation)
  homesAppartLocation.textContent = `${elem.city}, ${elem.country}`
  homesAppartName.textContent = `${elem.name}`
  homesImg.setAttribute('src', elem.imageUrl)
})

document.body.appendChild(mainContainer)