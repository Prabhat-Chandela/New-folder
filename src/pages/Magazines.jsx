import { useSelector } from "react-redux";
import { Button, MagazineCard } from "../Components/index";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Magazines() {
  const allMagazines = useSelector((state) => state.post.allMagazines);
  const navigate = useNavigate();


  return (
    <div className="w-full  flex flex-col gap-14 p-5">

      <section className="w-full flex relative lg:max-h-[100vh] lg:justify-between">

        <div className="flex mt-[14vh] flex-col gap-4 lg:gap-9 lg:w-[65%] ">

          <div className="overflow-hidden">
            <m.h2
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 100 }}
              className="text-black font-robotoBlack text-[7vw] sm:text-[5vw] lg:text-[3vw] tracking-[1vw] drop-shadow-md">
              MAGAZINE <mark className="bg-transparent text-red-600">GALORE</mark>
            </m.h2>
          </div>

          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
            className="text-black font-robotoMedium text-xs sm:text-sm ">Embark on a journey into the minds of global leaders, gaining profound insights and inspiration from their experiences through our magazine. Delve deep and discover the perspectives shaping our world today.</m.p>

          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
            className="hidden lg:block text-black font-robotoMedium text-sm ">Lateral review offers a prestigious platform to share your insights and experiences with a discerning global audience.Our magazine's commitment to high-quality content and its esteemed reputation will enhance your credibility and visibility, positioning you as a thought leader in your field. Additionally, this feature opens doors to valuable networking opportunities, connecting you with other prominent figures and potential collaborators. Elevate your brand, inspire others, and make a lasting impact on a global scale by being featured in our magazine.</m.p>


          <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5, ease: "easeInOut" }}
          className=" flex gap-5">
        <Button onClick={()=>navigate("/contact")}>Ping Us Here</Button>
        <Button onClick={()=>navigate("/services")}>More To Serve</Button>
          </m.div>

        </div>

        <m.div
        initial={{ opacity: 0 , x:"100%"}}
        animate={{ opacity: 1, x:0 }}
        transition={{ delay: 0.9, duration: 0.5, ease: "easeInOut" }}
        className="hidden lg:block w-[32%] xl:w-[26%] rounded-xl overflow-hidden shadow-md shadow-gray-500 ">
          <img className="w-full h-full lg:object-fill" src="magazines-poster.webp" alt="magazines-page-poster" />
        </m.div>

      </section>


      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.7, ease: "easeInOut" }}>
        <div className="w-full grid grid-cols-12 gap-5">
          {allMagazines ? (
            allMagazines.map((magazine) => (
              <div className="w-full col-span-12 sm:col-span-6 lg:col-span-3 p-3" key={magazine.$id}>
                <MagazineCard {...magazine} />
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </m.section>

    </div>
  );
};

export default Magazines;