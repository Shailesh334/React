import { useState } from "react";
import ItemCards from "./ItemCards";

const MenuCategory = ({ dataObj , showItems , setShowIndex , closeAll}) => {
  
  const info = dataObj.card.card;
  const [click , setClick] = useState(true);
  
  return (
    <div>
      <div>
        <div className="justify-between flex py-6 cursor-pointer  rounded-lg" onClick={()=>{      
           
           {click && setShowIndex()}
           {!click && closeAll()}
           { click === false ? setClick(true) : setClick(false)}
           
        }}>
          <div className="font-bold text-gray-800 text-lg ">
            {info.title} ({info.itemCards.length})
          </div>
          <div className="cursor-pointer">{showItems ? "⬆️" : "⬇️"}</div>
        </div>

        {showItems && info.itemCards.map((cards) => (
           <ItemCards key={cards.card.info.id} data={cards.card.info} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
