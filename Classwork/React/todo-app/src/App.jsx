import {useState} from "react";

function App() {
  const [setUp,setSetup]=useState("No setup");
  const [punchLine,setPunchLine]=useState("No punchLine");

  
   async function fetchJoke(){
    try{
      const response= await fetch("http://official-joke-api.appspot.com/random_joke");
      const data= await response.json();
      console.log(data);
      // console.log(data.setUp);
      // console.log(data.punchLine);
      setSetup((previousState)=>(previousState = data.setup))
      setPunchLine(data.punchline);
      
    }
    catch(error){
      console.error(error);
    }
  }

  return (
    <div className="p-12">
      <button onClick={fetchJoke} className="bg-red-500 hover:bg-red-600 cursor-pointer px-4 py-2 text-white font-semibold rounded-xl ">
        GetJoke</button>
        <p className="text-red-600 font-semibold text-lg">{setUp}</p>
        <p >{punchLine}</p>
      

    </div>
  )
}

export default App;
