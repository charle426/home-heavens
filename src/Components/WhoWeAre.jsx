import frame from "../assets/Frame 8.png"
export default function WhoWeAre() {
    return (
      <section className="px-3 sm:px-5 py-4 lg:px-20 my-10">
        <div>
          <h3 className="underline-offset-4 underline text-center mb-4 font-bold text-[1.3rem]">
            WHO WE ARE
          </h3>
          <div className="flex flex-col md:flex-row gap-5 items-center">
            <img src={frame} alt="image" className="w-full max-w-[550px]" />
            <div className="flex flex-col gap-5">
              <div>
                <h4 className="font-bold text-[1.2rem] mb-3">Innovators</h4>
                <p>
                  We come up with ideas that are ideal for our users, agents and
                  landlords to make it easy
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[1.2rem] mb-3">
                  Solution Providers
                </h4>
                <p>
                  We are committed to providing ease for our users in house
                  hunting
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[1.2rem] mb-3">
                  Future Planners
                </h4>
                <p>
                  We are interested in seeing that noting stops your future from
                  growing so this is our own way of helping
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}