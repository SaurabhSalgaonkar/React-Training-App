import React from 'react'

const Card = (props) => {
 console.log(props);
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
    </div>
</div>
  )
}

export default Card