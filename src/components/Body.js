import React, { useReducer, useState } from 'react'
import Card from '../../Card'
import mockApiResponse from '../utils/mockResponse'
import useGeneratePrice from '../hooks.js/useGeneratePrice'

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "UPDATE_HOTELS":
            return {
                ...state,
                hotels: action.payload
            } 
        case "UPDATE_FILTER":
            return {
                ...state,
                isFilter: action.payload
            }
        case "UPDATE_BUTTON_NAME":
            return {
                ...state,
                buttonName: action.payload
            }
    }
}

const Body = () => {
    const [ state, dispatch ] = useReducer(reducer, { hotels: mockApiResponse, isFilter: false, buttonName: 'Get Filtered hotels' })
    const { price, computePrice, hotelName, updateHoteName } = useGeneratePrice();

    React.useEffect(() => {
        if(state.isFilter) {
            dispatch({ type: "UPDATE_BUTTON_NAME", payload: "Get Unfiltered hotels"})
        }
        else {
            dispatch({ type: "UPDATE_BUTTON_NAME", payload: "Get Filtered hotels"})
        }
    }, [state.isFilter])

    const cardButtonClick = (ratings, hotelName) => {
        computePrice(ratings);
        updateHoteName(hotelName);
    }
    
    const filterHotels = () => {
        if(!state.isFilter) {
            filteredData = mockApiResponse.filter((hotel) => hotel.ratings > 1);
            console.log(filteredData);
            dispatch({type: "UPDATE_HOTELS", payload: filteredData});
            // setHotels(filteredData);
        }
        else {
            dispatch({type: "UPDATE_HOTELS", payload: mockApiResponse});
        }
        dispatch({type: "UPDATE_FILTER", payload: !state.isFilter});

    }
    return (
        <div className='container-card'>
            <div>Currently displayed hotels on your page - {state.hotels.length}</div>
            <div>Filer is {state.isFilter ? "active" : "inactive"}</div>
            {price && hotelName && (<div>Your price of {hotelName} hotel is {price}</div>)}
            <button onClick={filterHotels}>{state.buttonName}</button>
            <div className='cards-list'>
                {state.hotels.map((hotel) => <Card key={hotel.id} details={hotel} cardButtonClick={cardButtonClick}/>)}
            </div>
        </div>
    )
}

export default Body