import React from 'react'
import Card from '../../Card'

const Body = () => {
const mockApiResponse = [
    {
        id: 1,
        name: 'Ginger',
        ratings: 3,
        img: 'https://r1imghtlak.mmtcdn.com/ff0aa3dcff9011e89d770242ac110002.jpg?&output-quality=75&downsize=243:162&crop=243:162;0,7&output-format=jpg',
        isCoupleFriendly: true,
        isFreeCancellation: true
    },
    {
        id: 2,
        name: 'Fern',
        img: 'https://r1imghtlak.mmtcdn.com/ff0aa3dcff9011e89d770242ac110002.jpg?&output-quality=75&downsize=243:162&crop=243:162;0,7&output-format=jpg',
        isCoupleFriendly: false,
        isFreeCancellation: true,
        ratings: 2
    },
    {
        id: 3,
        name: 'Oberoi',
        img: 'https://r1imghtlak.mmtcdn.com/ff0aa3dcff9011e89d770242ac110002.jpg?&output-quality=75&downsize=243:162&crop=243:162;0,7&output-format=jpg',
        isCoupleFriendly: true,
        isFreeCancellation: false,
        ratings: 1
    }
]
  return (
    <div className='container-card'>
        {
            mockApiResponse.map((hotel) => <Card key={hotel.id} details={hotel}/>)
        }
    </div>
  )
}

export default Body