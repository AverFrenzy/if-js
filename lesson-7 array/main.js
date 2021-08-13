const data = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];

// Function that checks if word is a polindrome(made with array methods)
function polindromReverse(word) {
  return word === word.split("").reverse().join("");
}

//function that finding word in the array of objects and return values of object(reduse method)
const findStrReduse = (str) => {
  return data.reduce((result, curr) => {
    for (key in curr) {
      if (curr[key].includes(str)) {
        return result.concat([Object.values(curr)])
      }
    }
    return result
  }, [])
}
console.log(findStrReduse('USA'))

//function that finding word in the array of objects and return values of object(forEach method)
const findStrForEach = (str) => {
  const founded = []
  data.forEach((obj) => {
    for (key in obj) {
      if (obj[key].includes(str)) {
        founded.push(Object.values(obj))
      }
    }
  })
  if (founded.length > 0) {
    return founded
  }
  return "No matchs founded"
}
console.log(findStrForEach('USA'))

//function that find unique countries from data and add cities(cycle)
const cityArr = (data) => {
  const countArr = {}
  for (let i = 0; i < data.length; i++) {
    !countArr[data[i].country] ? countArr[data[i].country] = [data[i].city] : countArr[data[i].country].push(data[i].city)
  }
  return countArr
}
console.log(cityArr(data))

//function that find unique countries from data and add cities(forEach method)
const cityArrForEach = (data) => {
  const countArrForEach = {}
  data.forEach((obj) => {
    !countArrForEach[obj.country] ? countArrForEach[obj.country] = [obj.city] : countArrForEach[obj.country].push(obj.city)
  })
  return countArrForEach
}
console.log(cityArrForEach(data))

//function that find unique countries from data and add cities(reduce method)
const cityArrReduce = (data) => {
  return data.reduce((result, curr) => {
    !result[curr.country] ? result[curr.country] = [curr.city] : result[curr.country].push(curr.city)
    return result
  }, {})
}
console.log(cityArrReduce(data))