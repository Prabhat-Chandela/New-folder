
function ServiceCard({
    serviceImage="",
    serviceName="service name",
    serviceDetail="about service",
}) {
  return (
    <div className="flex flex-col bg-black  bg-clip-padding rounded-lg p-3 shadow-md shadow-gray-500 overflow-hidden gap-7 w-full">
      
            <h3 className="font-robotoBold flex items-center justify-center gap-3 w-fit rounded-lg text-white text-lg"><span> <img src={serviceImage} className="w-6 h-6" alt="service-image" /></span>{serviceName}</h3>

            <p className="font-robotoRegular text-sm lg:text-base text-white/80">{serviceDetail}</p>
  
    </div>
  )
}

export default ServiceCard;