
const RestaurantCategory = ({dataObj}) =>{
    console.log(dataObj)
    return <h1>{dataObj.card.info.name}</h1>
}

export default RestaurantCategory;