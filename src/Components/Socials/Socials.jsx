import { Linkedin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

function Socials({textColor="text-white",
  bgColor="bg-black",
  hoverColor="hover:bg-red-600"
}) {
  return (
    <div className="flex justify-between sm:justify-normal sm:gap-5 mt-2" >

              <a href="https://www.linkedin.com/company/lateral-review/?viewAsMember=true" target="_blank" rel="noopner noreferrer" className={`${bgColor} ${textColor} rounded-full p-3 ${hoverColor} transition-all ease-out duration-100 `}><Linkedin size={20} /></a>
              <a href="https://www.facebook.com/profile.php?id=61557777824555" target="_blank" rel="noopner noreferrer" className={`${bgColor} ${textColor} rounded-full p-3 ${hoverColor} transition-all ease-out duration-100 `}><Facebook size={20} /></a>
              <a href="https://www.instagram.com/lateralreview/" target="_blank" rel="noopner noreferrer" className={`${bgColor} ${textColor} rounded-full p-3 ${hoverColor} transition-all ease-out duration-100 `}><Instagram size={20} /></a>
              <a href="https://twitter.com/LateralReviews" target="_blank" rel="noopner noreferrer" className={`${bgColor} ${textColor} rounded-full p-3 ${hoverColor} transition-all ease-out duration-100 `}><Twitter size={20} /></a>
              <a href="https://www.youtube.com/channel/UCPEXLEb0lX45U3mIzOTOr_g" target="_blank" rel="noopner noreferrer" className={`${bgColor} ${textColor} rounded-full p-3 ${hoverColor} transition-all ease-out duration-100 `}><Youtube size={20} /></a>
            </div>
  )
}

export default Socials