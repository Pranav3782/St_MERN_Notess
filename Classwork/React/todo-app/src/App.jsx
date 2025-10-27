
import OpenRoles from "./OpenRoles.jsx";


function App(){
  const dummyOpenRoles=["frontend","backend","ui/ux","cto","ceo","product manager"];

  return (
    <div className="bg-red-500 h-screen w-screen flex items-center justify-center">
      <OpenRoles openRolesData={dummyOpenRoles}/>
      
    </div>
  )
}



export default App;