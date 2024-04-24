import image from "../assets/Bearded man in denim shirt and round glasses.png"
import glow from "../assets/Glow shape.png"

export default function Hero() {
    return (
      <section className="hero px-3 sm:px-5 pt-4 lg:px-20 relative overflow-hidden">
        <div className="flex flex-col gap-4 items-start w-full max-w-[600px] py-14 relative z-20">
          <h1 className="text-white text-[2.9rem] md:text-[3.5rem] font-bold">
            PAY FOR HOUSES EASILY TODAY IN{" "}
            <span className="bg-blue-300 px-2 py-1 rounded-md">NIGERIA!</span>
                </h1>
                <p>
                    We are a group of individual who aims at making house hunting stress-free for our users and make all parties involved compensated
                </p>
                <button className=" ring-1 text-[1.5rem] w-full py-2 px-4 rounded-md ring-slate-800">
                    Get started
                </button>
            </div>
            <div className="">
                <img src={glow} alt=""  className="absolute right-0 top-[-90px] w-full"/>
                <img src={ image } alt="image" className="w-full right-7 bottom-0 absolute max-w-[500px] z-10 md:visible invisible" />
                
            </div>
      </section>
    );
}