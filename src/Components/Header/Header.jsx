import { NavLink } from "react-router-dom";
import { Home, BookOpen, Newspaper, HandPlatter, SquareUser } from "lucide-react";

function Header() {
  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: <Home size={20} />
    },
    {
      name: "Magazines",
      path: "/magazines",
      icon: <BookOpen size={20} />
    },
    {
      name: "Blogs",
      path: "/blogs",
      icon: <Newspaper size={20} />
    },
    {
      name: "Services",
      path: "/services",
      icon: <HandPlatter size={20} />
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <SquareUser size={20} />
    },

  ]


  return (
    <div className="lg:w-[58%] lg:rounded-b-lg fixed bg-[#FEFEFE] backdrop:filter backdrop-blur-md bg-opacity-20 z-10 h-[13vh] lg:h-[14vh] flex items-center">
      <nav className="flex items-center justify-between p-2 ">
        <section className="flex items-center ">
            <div className="w-[30%] sm:w-[10%] lg:w-[20%] xl:w-[30%]">
              <img className="w-full h-full" src="Lateral-Review.webp" alt="logo" />
            </div>
          
        </section>

        <section>
          <div>
            <ul className="flex items-center gap-4 ">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink className={({ isActive }) => `flex font-robotoMedium uppercase tracking-widest items-center justify-center gap-2 text-xs p-[5px] sm:px-2  rounded-lg sm:rounded-xl shadow-xl  text-center transition duration-150 ease-out  ${isActive ? "text-white bg-red-600" : "text-white bg-black hover:text-red-600"}`} to={item.path}><span>{item.icon}</span>
                    <span className="hidden xl:block">{item.name}</span></NavLink>
                </li>
              ))}
            </ul>
          </div>
        </section>

      </nav>
    </div>
  )
}

export default Header;