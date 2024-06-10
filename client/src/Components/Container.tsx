import { Background } from "./Chatroom/Background"
import { Footer } from "./Chatroom/Footer"
import { Navbar } from "./Navigation/Navbar"


function Container() {
  return (
    <div className="Container ">
    <Background />
    <Navbar />
    <Footer />
    </div>
  )
}

export default Container