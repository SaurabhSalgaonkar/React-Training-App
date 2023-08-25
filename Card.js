import React from 'react'

const Card = (props) => {
 const { img, name, ratings, isCoupleFriendly, isFreeCancellation } = props.details;
  return (
    <div className='card'>
    <div className='card-logo'>
        <img src={img}></img>
    </div>
    <div className='details-container' style={{ marginLeft: '20px' }}>
        <span className='hotel-name' style={{ fontSize: "28px", fontWeight: "bold" }}>{name}</span>
        <span className='rating'style={{ fontSize: "28px", fontWeight: "bold", marginLeft: "10px" }}>{`${ratings} stars`}</span>
        {isCoupleFriendly ? <div className='couple-friendly-tag'>couple friendly</div> : null}
        {isFreeCancellation ? <div className='free-cancellation-tag'>Free cancellation</div> : null}
        <button onClick={() => { props.cardButtonClick(ratings, name) }}>Check Price</button>
    </div>
</div>
  )
}

export default Card