import React from "react";
import BagSummary from "../components/BagSummary";
import BagItems from "../components/BagItems";
import { useSelector } from "react-redux";
const Bag = () => {
  const bagItems= useSelector((store)=>store.bag)
  const item = useSelector(store=>store.items)
  const finalItems= item.filter((item)=>{
    const itemIndex=bagItems.indexOf(item.id)
    console.log(itemIndex)
    return itemIndex >=0
    
  })
  return (
    <>
      <main>
        <div class="bag-page">
        <div class="bag-items-container">
          {finalItems.map((item)=>(
               <BagItems item={item}></BagItems>
          ))}
         </div>
          <BagSummary></BagSummary>
        </div>
      </main>
    </>
  );
};

export default Bag;
