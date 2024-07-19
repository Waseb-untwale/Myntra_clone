import React from 'react'
import HomeItem from '../components/HomeItem'
import {useSelector} from 'react-redux'
const Home = () => {
  const item=useSelector(store=>store.items)


  return (
    <main>
        <div class="items-container">
          {item.map((item)=>(
              <HomeItem item={item}></HomeItem>
          ))}
         
        </div>
    </main>
  )
}

export default Home
