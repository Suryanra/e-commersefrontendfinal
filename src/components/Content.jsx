import React,{useContext} from 'react'
import {AppContext} from '../context/AppContextProvider'
import Card from './Card'
import {BeatLoader} from 'react-spinners';
import Banner from './Banner'
const Content = () => {
      
const {alldata,loading} = useContext(AppContext);
console.log("data collection ",alldata);

  return (
    <div className='Content'>
      <Banner></Banner>
{ loading &&
<div className='spinner'> <BeatLoader  color="#000000" /></div>}

    {!loading &&
      alldata.map((data)=>{
             return <Card key={data.id} data={data}> </Card>
            })
    }
    </div>
  )
}

export default Content
