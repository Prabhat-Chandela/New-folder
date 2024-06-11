import { ArticleCard, Counter,Carousel, GuestCard, SwiperCarousel } from "../Components/index";
import { Newspaper, Star } from "lucide-react";
import { easeInOut, motion as m, spring } from "framer-motion";
import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import databaseService from "../appwrite/databaseService";
import bucketService from "../appwrite/bucketService";
import { getAllBlogs, getAllMagazines } from "../store/postSlice";
import { useNavigate } from "react-router-dom";


function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    databaseService.getMagazines().then((magazines) => {
      if (magazines) {
        dispatch(getAllMagazines({ allMagazines: magazines.documents }))
      }
    });

    databaseService.getBlogs().then((blogs) => {
      if (blogs) {
        dispatch(getAllBlogs({ allBlogs: blogs.documents }))
      }
    })

  }, [dispatch])

  const allMagazines = useSelector((state) => state.post.allMagazines);
  const allBlogs = useSelector((state) => state.post.allBlogs);


  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: easeInOut }}
      className="font-robotoBlack flex flex-col w-full gap-20 lg:gap-32 ">

      <section 
      className="w-full max-h-[100vh] flex flex-col-reverse lg:flex-row p-2 sm:px-5 lg: justify-between mt-[13vh] lg:mt-0">

        <div className="w-full overflow-hidden lg:w-[60%] sm:h-full  flex flex-col sm:gap-4  lg:mt-[14vh]">

          <div className="w-full overflow-hidden">
            <m.h1
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 100 }}
              className="text-[5vw] lg:text-[3vw] drop-shadow-md font-robotoBlack uppercase tracking-[1vw]">LateraL <mark className="bg-transparent text-red-600">Review</mark></m.h1>
            <m.span
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5, type: "spring", stiffness: 100 }}
              className=" hidden lg:block w-fit font-AlegreyaSansBold  text-sm uppercase tracking-widest bg-black text-white px-3 py-2 rounded-lg">Unlocking new Prespective</m.span>
          </div>

          <div className="hidden lg:block w-full">
              <Carousel>
                {allBlogs.filter((blog) => blog.guestTag == "nonGuest").map((blog) => (
                  <div key={blog.$id} className='py-3 w-full'>
                    <ArticleCard {...blog} />
                  </div>
                ))
                }
              </Carousel>
          </div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5, type: "spring", stiffness: 100 }}
            className="hidden lg:block">
            <Counter />
          </m.div>

        </div>

        <m.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.5, ease: "easeInOut" }}
          className="lg:w-[40%] xl:w-[35%] lg:max-h-full bg-transparent lg:rounded-xl overflow-hidden shadow-md shadow-gray-500">
          <img className="w-full h-full lg:object-fill" src="Lexis-Serot-Poster.webp" alt="hero-poster" />
        </m.div>

      </section>

      <section className="w-full grid grid-cols-6 lg:grid-rows-6 gap-2 p-5">

        <div className="bg-black rounded-lg col-span-6 lg:col-span-2 lg:row-span-3 text-white p-3 hover:bg-white hover:text-black hover:scale-105  duration-300 transition ease-in-out shadow-lg shadow-gray-500 flex flex-col gap-5">
          <h3 className="font-robotoBold sm:text-[3vw] w-fit pr-2 pb-1 border-b-2 border-b-red-600">Our <mark className="bg-transparent text-red-600">Mission</mark></h3>
          <p className="text-xs lg:text-sm font-robotoMedium tracking-wider">Our mission is to empower businesses and individuals with innovative solutions and fresh perspectives. We are committed to helping you navigate the ever-evolving digital space, providing you with the tools and knowledge needed to succeed.</p>
        </div>

        <div className="bg-black rounded-lg col-span-6 lg:col-span-4 lg:row-span-6 text-white p-3 hover:bg-white hover:text-black hover:scale-105  duration-300 transition ease-in-out shadow-lg shadow-gray-500 flex flex-col  gap-5">
          <h3 className="font-robotoBold sm:text-[3vw] w-fit pr-2 pb-1 border-b-2 border-b-red-600">Our <mark className="bg-transparent text-red-600">Values</mark></h3>

          <div className="flex flex-wrap gap-3 justify-evenly w-full h-full">

            <div className="bg-red-600 sm:w-[46%] p-2 rounded-lg flex flex-col gap-2">
              <h3 className="font-robotoMedium text-sm lg:text-lg border-b border-bwhite pb-2 pr-2">Innovation</h3>
              <p className="text-xs lg:text-sm font-robotoMedium tracking-wider text-black"> We constantly seek new ways to push the boundaries of digital marketing and content creation.</p>
            </div>

            <div className="bg-red-600 sm:w-[46%] p-2 rounded-lg flex flex-col gap-2"> <h3 className="font-robotoMedium text-sm lg:text-lg border-b border-bwhite pb-2 pr-2">Integrity</h3>
              <p className="text-xs lg:text-sm font-robotoMedium tracking-wider text-black"> We are committed to maintaining the highest standards of honesty and transparency in all our dealings.</p></div>

            <div className="bg-red-600 sm:w-[46%] p-2 rounded-lg flex flex-col gap-2"> <h3 className="font-robotoMedium text-sm lg:text-lg border-b border-bwhite pb-2 pr-2">Excellence</h3>
              <p className="text-xs lg:text-sm font-robotoMedium tracking-wider text-black">We strive for excellence in everything we do, from our services to our content.</p></div>

            <div className="bg-red-600 sm:w-[46%] p-2 rounded-lg flex flex-col gap-2"> <h3 className="font-robotoMedium text-sm lg:text-lg border-b border-bwhite pb-2 pr-2">Community</h3>
              <p className="text-xs lg:text-sm font-robotoMedium tracking-wider text-black"> We believe in building a community of like-minded individuals and businesses who share our passion for innovation and growth.</p></div>

            <div className="bg-red-600 sm:w-[46%] p-2 rounded-lg flex flex-col gap-2"> <h3 className="font-robotoMedium text-sm lg:text-lg border-b border-bwhite pb-2 pr-2">Transparent Practices</h3>
              <p className="text-xs lg:text-sm font-robotoMedium tracking-wider text-black"> We uphold the highest standards of honesty and transparency, building trust in all our interactions.</p></div>

            <div className="bg-red-600 sm:w-[46%] p-2 rounded-lg flex flex-col gap-2"> <h3 className="font-robotoMedium text-sm lg:text-lg border-b border-bwhite pb-2 pr-2">Uncompromising Quality</h3>
              <p className="text-xs lg:text-sm font-robotoMedium tracking-wider text-black">Excellence is our benchmark. We ensure the highest quality in everything we deliver, from services to content.</p></div>



          </div>
        </div>

        <div className="bg-black rounded-lg col-span-6 lg:col-span-2 lg:row-span-3 text-white p-3 hover:bg-white hover:text-black hover:scale-105  duration-300 transition ease-in-out shadow-lg shadow-gray-500 flex flex-col gap-5">
          <h3 className="font-robotoBold sm:text-[3vw] w-fit pr-2 pb-1 border-b-2 border-b-red-600">Join <mark className="bg-transparent text-red-600">Us</mark></h3>
          <p className="text-xs lg:text-sm font-robotoMedium tracking-wider">Whether you're a business looking to enhance your digital marketing efforts or a reader eager to stay informed about the latest industry trends, Lateral Review is here for you. Join us on our journey to redefine the digital marketing and media landscape through the power of lateral thinking.</p>
        </div>
      </section>

      {/* <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="w-full bg-transparent xl:mx-auto overflow-hidden">
        <Carousel>
          {allMagazines.map((magazine) => (
            <div key={magazine.$id} className="min-w-full flex items-center justify-center relative">

              <button onClick={()=> navigate(`/magazine/${magazine.magazineFile}`)} className="w-fit absolute bottom-[30%] left-[10%] flex justify-center items-center gap-1 sm:left-[10%] px-2 sm:p-2 font-robotoMedium text-red-700 bg-white rounded-sm sm:rounded-lg text-xs"><span className="hidden sm:block">Read Digital Version</span><ArrowBigRightDash size={10} /></button>


              <img className="w-full h-full object-fill overflow-hidden " src={bucketService.getMagazinePoster(magazine.magazinePoster)} alt={magazine.magazineTitle} />
            </div>

          ))}
        </Carousel>
      </m.section> */}

<section className="w-full p-5">
  <SwiperCarousel allMagazines={allMagazines}/>
</section>

      <section className="flex flex-col gap-3 lg:hidden p-5">
        <h2 className=" text-black font-robotoBold text-md sm:text-xl flex items-center justify-start gap-2 w-fit border-b-4 pb-2 pr-2 border-b-red-600"><span><Newspaper /></span> Recent <mark className="bg-transparent text-red-600">Blogs</mark></h2>

        <div className="grid grid-cols-4 sm:gap-3">

          {allBlogs.filter((blog) => blog.guestTag == "nonGuest").map((blog) => (
            <div key={blog.$id} className='py-3 w-full col-span-4 sm:col-span-2 lg:col-span-1'>
              <ArticleCard {...blog} />
            </div>
          ))
          }

        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className=" bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent font-robotoBold text-md sm:text-xl flex items-center justify-start gap-2"><span className="text-red-700"><Newspaper /></span>Guest Posts</h2>

        <div className="grid grid-cols-3 gap-3 sm:gap-0 flex-wrap">
          {allBlogs.filter((blog) => blog.guestTag == "guest").map((blog) => (
            <div key={blog.$id} className='p-1 col-span-3 sm:col-span-1 w-full'>
              <GuestCard {...blog} />
            </div>
          ))

          }
        </div>
      </section>

      <section className="w-full bg-[#ECF0E7] p-5 flex flex-col gap-5 relative xl:h-[60vh] xl:mb-[60vh]">

        <div className="flex flex-col gap-5">
          <h1 className="font-robotoBold text-[7vw] lg:text-[2.5vw] bg-gradient-to-br from-black to-neutral-950 bg-clip-text text-transparent uppercase"><mark className="bg-transparent text-red-600">About</mark> Lateral Review</h1>
          <p className="font-robotoMedium text-xs sm:text-sm ">At  <mark className="bg-transparent text-red-600">Lateral Review</mark>, we believe in the power of lateral thinking to transform the digital landscape. Our platform seamlessly blends cutting-edge digital marketing strategies with insightful magazine content, offering a unique and holistic approach to understanding and leveraging the digital world.</p>
          <p className="font-robotoMedium text-xs sm:text-sm "><mark className="bg-transparent text-red-600">Lateral Review</mark> is a platform for leaders, entrepreneurs
            and organizations from across the globe to showcase their story. We feature
            stories that are inspiring, unique, and extremely insightful. In just a short
            span, we have garnered a growing reader base and we would like to welcome you
            aboard in this journey. Our platform promises to share with you quality and
            nothing but quality.</p>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row sm:justify-between flex-wrap p-3 ">

          <div className="w-full sm:w-[45%] lg:w-[23%] bg-black text-white hover:bg-red-600  hover:scale-105  duration-300 rounded-lg shadow-lg shadow-gray-500 cursor-pointer p-5 flex flex-col gap-5 lg:gap-7 transition ease-in-out">

            <div><p className="text-xs font-robotoMedium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi eaque quibusdam amet atque cumque autem quaerat iure corrupti sed provident?</p></div>


            <div className="flex justify-between px-3">
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
            </div>

            <div className="border-t border-t-white flex items-center justify-center pt-5"><h3 className="font-robotoMedium text-sm text-center ">Lorem ipsum dolor sit amet.</h3></div>

          </div>

          <div className="w-full sm:w-[45%] lg:w-[23%] bg-black text-white hover:bg-red-600  hover:text-black hover:scale-105  duration-300 rounded-lg shadow-lg shadow-gray-500 cursor-pointer p-5 flex flex-col gap-5 lg:gap-7 transition ease-in-out">

            <div><p className="text-xs font-robotoMedium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi eaque quibusdam amet atque cumque autem quaerat iure corrupti sed provident?</p></div>

            <div className="flex justify-between px-3">
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
            </div>

            <div className="border-t border-t-white flex items-center justify-center pt-5"><h3 className="font-robotoMedium text-sm text-center ">Lorem ipsum dolor sit amet.</h3></div>

          </div>

          <div className="w-full sm:w-[45%] lg:w-[23%] bg-black text-white hover:bg-red-600  hover:text-black hover:scale-105  duration-300 rounded-lg shadow-lg shadow-gray-500 cursor-pointer p-5 flex flex-col gap-5 lg:gap-7 transition ease-in-out">

            <div><p className="text-xs font-robotoMedium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi eaque quibusdam amet atque cumque autem quaerat iure corrupti sed provident?</p></div>

            <div className="flex justify-between px-3">
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
            </div>

            <div className="border-t border-t-white flex items-center justify-center pt-5"><h3 className="font-robotoMedium text-sm text-center ">Lorem ipsum dolor sit amet.</h3></div>

          </div>

          <div className="w-full sm:w-[45%] lg:w-[23%] bg-black text-white hover:bg-red-600 hover:text-black hover:scale-105  duration-300 rounded-lg shadow-lg shadow-gray-500  cursor-pointer p-5 flex flex-col gap-5 lg:gap-7 transition ease-in-out">

            <div><p className="text-xs font-robotoMedium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi eaque quibusdam amet atque cumque autem quaerat iure corrupti sed provident?</p></div>


            <div className="flex justify-between px-3">
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
              <Star fill="yellow" strokeWidth={0} />
            </div>
            <div className="border-t border-t-white flex items-center justify-center pt-5"><h3 className="font-robotoMedium text-sm text-center ">Lorem ipsum dolor sit amet.</h3></div>

          </div>

        </div>

      </section>


    </m.div>
  )
}

export default Home;