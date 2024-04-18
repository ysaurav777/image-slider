import React, { useEffect, useState } from 'react'

const App = ({url,page,limit}) => {

  const [images,setImages]=useState([]);
  const [currimg,setcurrimg]=useState(0);
  const [error,seterror]=useState(null);
  const [loading,setloading]=useState(false);

  async function fetchImages (geturl) {
    try {
      setloading(true);
      const response = await fetch(`${geturl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if(data) {
        setImages(data);
        setloading(false);
      }
    }
    catch(e) {
      seterror(e.message);
      setloading(false);
    }
  }

  useEffect(()=>{
    if(url!=="") {
      fetchImages(url);
    }
  },[url]);

  if(loading) {
    return <div>Loading data! please wait</div>
  }

  if(error!==null) {
    return <div>Error Occured! {error}</div>
  }

  return (
    <div>App</div>
  )
}

export default App;