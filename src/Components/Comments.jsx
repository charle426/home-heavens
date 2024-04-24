import bgImg from "../assets/What people are saying.png";
export default function Comment() {
    return (
         <section className="px-3 sm:px-5 py-10 lg:px-32 *:text-white bg-no-repeat bg-cover" style={{backgroundImage : `url(${bgImg})`}}>
        <div>
          <h3 className="underline-offset-4 underline text-center mb-7 font-bold text-[1.8em]">
            WE WOULD LOVE TO HEAR FROM YOU
          </h3>
            </div>
            <div className="auto-grid1 gap-5 *:backdrop-blur-sm *:bg-[#d7d7d771] *:text-center *:rounded-md *:p-7">
                <div className="flex items-center flex-col gap-3">
                    <blockquote className="text-xl max-w-[200px]">
                        Am happy we my HH looking for houses has been so easy
                    </blockquote>
                    <p className="font-semibold text-[1.2rem]">Chimezie Divine</p>
                </div>
                <div className="flex items-center flex-col gap-3">
                    <blockquote className="text-xl max-w-[200px]">
                        Am happy we my HH looking for houses has been so easy
                    </blockquote>
                    <p className="font-semibold text-[1.2rem]">Udoka Esther</p>
                </div>
                <div className="flex items-center flex-col gap-3">
                    <blockquote className="text-xl max-w-[200px]">
                        Am happy we my HH looking for houses has been so easy
                    </blockquote>
                    <p className="font-semibold text-[1.2rem]">Alfred Diamond</p>
                </div>
            </div>
            </section>
    )
}