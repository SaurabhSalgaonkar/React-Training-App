import React from 'react'

const useGeneratePrice = () => {
    const [price, setPrice] = React.useState(null);
    const [hotelName, setNotelName] = React.useState(null);

    const computePrice = (ratings) => setPrice(ratings * 2000);
    const updateHoteName = (name) => setNotelName(name); 

    return {
        computePrice,
        price,
        hotelName,
        updateHoteName
    }
}

export default useGeneratePrice