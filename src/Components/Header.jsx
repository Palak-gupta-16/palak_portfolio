


import { useState } from "react"
import Navbar from "./Navbar"


const Header = () => {

    const [navOpen,setNavOpen] = useState(true)

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex-items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
        <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
            <h1>
                <a href="/" className="logo flex items-center">
                <img src="https://cdn.icon-icons.com/icons2/3708/PNG/512/girl_female_woman_person_people_avatar_icon_230018.png" height={50} width={50} alt="palak" />
                <h1 className="mt-2 font-bold ">Palak-gupta-16</h1>
                </a>
            </h1>

            <div className="relative md:justify-self-center">
                <button className="menu-btn md:hidden" onClick={() => setNavOpen((prev) => !prev)}>
                    <span className="material-symbols-rounded">{navOpen ? 'close' : 'menu'}</span>
                </button>
               <Navbar navOpen={navOpen}/>
            </div>
            <a href="#contact" className="btn btn-secondary max-md:hidden md:justify-self-end">Contact Me</a>
        </div>

    </header>
  )
}

export default Header