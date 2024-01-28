import React ,{useContext}from 'react'
import {AppContext} from '../context/AppContextProvider'
import Card from './Card'
const Category = () => {
      const {categorydata}=useContext(AppContext);
  return (
      <div className='Category'>
      <div className='category_header'>
            #Category {}
      </div>
      {
      categorydata.map((data)=>{
            return <Card key={data.id} data={data}> </Card>
            })
      }
      </div>
)
}

export default Category
