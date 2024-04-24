import how1 from "../assets/Component 1.png"
import how2 from "../assets/Component 1 (1).png"
import how3 from "../assets/Component 1 (2).png"
import how4 from "../assets/Component 1 (3).png"
export default function HowItWorks() {
    return (
      <section className="px-3 sm:px-5 py-4 lg:px-20 my-10">
        <div>
          <h3 className="underline-offset-4 underline text-center mb-7 font-bold text-[1.3rem]">
            HOW IT WORKS
          </h3>
          <div className="flex flex-col gap-5 items-center">
            <div className="flex items-center gap-5 justify-center flex-col sm:flex-row">
              <div className="how1 rounded-lg flex flex-col gap-3 p-4 w-full max-w-[370px] shadow-slate-400 shadow-lg min-h-[200px]">
                <img src={how1} alt="" className="w-full max-w-[65px]" />
                <h3 className="font-bold text-[1.4rem]">
                  We have got your back!
                </h3>
                <p>
                  Search through our platform for property listing you will find
                  a home you love
                </p>
              </div>
              <div className="how2 rounded-lg flex flex-col gap-3 p-4 w-full max-w-[370px] shadow-slate-400 shadow-lg min-h-[200px]">
                <img src={how2} alt="" className="w-full max-w-[65px]" />
                <h3 className="font-bold text-[1.4rem]">
                  We are great listeners
                </h3>
                <p>
                  We'd love to hear from you and the property you have found.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 justify-center flex-col sm:flex-row">
              <div className="how3 rounded-lg flex flex-col gap-3 p-4 w-full max-w-[370px] shadow-slate-400 shadow-lg min-h-[200px]">
                <img src={how3} alt="" className="w-full max-w-[65px]" />
                <h3 className="font-bold text-[1.4rem]">Now its our turn</h3>
                <p>
                  We would love to speak to the landlord and any party involved
                  we you
                </p>
              </div>
              <div className="how4 rounded-lg flex flex-col gap-3 p-4 w-full max-w-[370px] shadow-slate-400 shadow-lg min-h-[200px]">
                <img src={how4} alt="" className="w-full max-w-[65px]" />
                <h3 className="font-bold text-[1.4rem]">Welcome Home</h3>
                <p>And just like that you have a place to call home</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}