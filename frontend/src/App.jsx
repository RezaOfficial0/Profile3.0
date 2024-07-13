import { Navbar, Footer, Services,Thing } from "./components";
function App() {
 

  return (
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Thing />  
      <Services />
    </div>
    
     
    <Footer />
  </div>
    
  )
}

export default App
