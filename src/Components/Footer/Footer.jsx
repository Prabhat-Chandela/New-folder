import { Button, Input, Socials } from "../index";
import { Handshake, ReceiptText } from "lucide-react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import databaseService from "../../appwrite/databaseService";
import { toast } from "react-toastify";

function Footer() {

    const { register, handleSubmit, reset } = useForm();

    const subscribe = async (data) => {
        try {
            await databaseService.createSubscription(data);
            toast.success("Thank you for subscribing")
            reset();
        } catch (error) {
            toast.error(error);
        }
    }

    return (
        <section className="w-full mt-5 bg-black shadow-2xl shadow-white grid grid-cols-6 gap-3 sm:gap-0 p-5">

            <div className="col-span-6 flex flex-col gap-5 sm:px-5 py-3 border-b-2 border-b-white/70 pb-6">
                <div className=" w-full">
                    <h1 className="text-[7vw] text-white lg:text-[3vw] font-robotoBlack uppercase tracking-[1vw]">LateraL <mark className="bg-transparent text-red-600">Review</mark></h1>
                    <span className="block w-fit font-AlegreyaSansBold text-xs lg:text-sm uppercase tracking-widest bg-white backdrop:blur-md bg-opacity-20 text-white px-3 py-2 rounded-lg">Unlocking new Prespective</span>
                </div>
                <p className="hidden sm:block font-robotoMedium text-base text-white/80">At Lateral <mark className="bg-transparent text-red-600">Review</mark>, we believe in the power of lateral thinking to transform the digital landscape. Our platform seamlessly blends cutting-edge digital marketing strategies with insightful magazine content, offering a unique and holistic approach to understanding and leveraging the digital world.</p>

                <p className="hidden sm:block font-robotoMedium text-base text-white/80"><mark  className="bg-transparent text-red-600">Excellence
                    </mark> is never an accident. It is always the result of high intention, sincere effort, and intelligent execution; it represents the wise choice of many alternatives - choice, not chance, determines your destiny.</p>


                <div className="flex flex-col w-full gap-7 ">

                    <div className="w-full">
                        <Socials bgColor="bg-white" textColor="text-black" />
                    </div>

                    <div className="flex justify-between sm:justify-normal w-full sm:gap-7 ">
                        <Link to={"/terms-condition"}>
                            <h3 className="font-robotoMedium text-red-600 hover:text-white flex flex-col sm:flex-row items-start sm:items-center justify-center gap-2 text-xs sm:text-lg"><span className="hidden sm:block"><Handshake /></span>Terms & Conditions</h3>
                        </Link>

                        <Link to={"/privacy-policy"}>
                            <h3 className="font-robotoMedium text-red-600 hover:text-white flex flex-col sm:flex-row items-start sm:items-center justify-center gap-2 text-xs sm:text-lg"><span className="hidden sm:block"><ReceiptText /></span>Privacy Policy</h3>
                        </Link>

                        <Link to={"/"}>
                            <h3 className="font-robotoMedium text-red-600 hover:text-white flex  flex-col sm:flex-row items-start sm:items-center justify-center gap-2 text-xs sm:text-lg"><span className="hidden sm:block"><ReceiptText /></span>Admins Board</h3>
                        </Link>
                    </div>


                </div>



            </div>


            <div className="col-span-6">

                {/* <h3 className="font-robotoBold text-[4vw] sm:text-[3vw] lg:text-[1.5vw] sm:tracking-widest bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent uppercase">Subscribe For Personalized Updates</h3>

                <div className="w-full">
                    <form onSubmit={handleSubmit(subscribe)} className="flex flex-col gap-3">
                        <div className="w-full sm:w-[70%]">
                            <Input label="Email" placeholder="Enter email here" type="email"
                                {...register("email", {
                                    required: true,
                                    validate: {
                                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                            "Email address must be a valid address",
                                    }
                                })} />
                        </div>
                        <Button type="submit">Subscribe</Button>
                    </form>
                </div> */}

                <h3 className="w-full text-center text-[5vw] sm:text-[2vw] font-robotoBold text-white/80 p-3">© 2024, Lateral Review. <mark className="bg-transparent text-red-600">All rights reserved</mark> </h3>

            </div>

        </section>
    )
}

export default Footer;