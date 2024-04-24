import img1 from "../assets/Frame 32.png";
import img2 from "../assets/Frame 33.png";
import img3 from "../assets/Frame 34.png";
import img4 from "../assets/Frame 35.png";
import img5 from "../assets/Frame 36.png";
import img6 from "../assets/Frame 37.png";
export default function WhyChooseUs() {
    return (
        <section className="px-3 sm:px-5 py-4 lg:px-20 my-10">
        <div>
          <h3 className="underline-offset-4 underline text-center mb-7 font-bold text-[1.3rem]">
            WHY CHOOSE US
                </h3>
                <div className="flex flex-col gap-5 justify-center items-center">
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="">
                            <img src={img1} alt="" className="w-full" />
                        </div>
                        <div className="relative">
                            <img src={img2} alt="" className="w-full" />
                            <p className="absolute bottom-2 left-2 text-white text-[23px] font-bold">We have got every apartment</p>
                        </div>
                        <div className="">
                            <img src={img3} alt="" className="w-full" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="">
                            <img src={img4} alt="" className="w-full" />
                        </div>
                        <div className="">
                            <img src={img5} alt="" className="w-full" />
                        </div>
                        <div className="">
                            <img src={img6} alt="" className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}