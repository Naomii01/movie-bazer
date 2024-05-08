import React, { useEffect, useState } from 'react'
import axios from 'axios'
const TvShow = () => {
    const [data,setdata]=useState([]);
    const HandleFetch = async() =>{
        try{
          const Response =  await axios({
                method:"GET",
                 url: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTFmZDY3MDlhZTVjZWY0NmUzYThlNWU2MWNhMTM0MyIsInN1YiI6IjY2MzhkOWVkODEzY2I2MDEyMTg5OTg1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vA1TAGL4cl6TeGr0zAplS_9aCGPbcF7GvUSagH5OFiU'
                  }
            });
            console.log(Response.data.results)
            setdata(Response.data.results);
        } catch(error){
            console.log(error);
        }
    };
     useEffect(() =>{
        HandleFetch();
     },
    []);
  return (
    <div className=' mt-20'>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 justify-center'>
            {data.map((item)=>(
                <div key={item.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
                    <p>{item.name}</p>
                   
            
                </div>
            ))}
        </div>
    </div>
  )
}
export default TvShow