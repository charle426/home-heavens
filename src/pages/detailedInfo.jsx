import { useParams } from "react-router-dom";
import { useState, } from "react"
import server from "../server";
import house from "../assets/HouseLine.png";
import heart from "../assets/Hearts.png";
import map from "../assets/MapPinLine.png";
import tag from "../assets/Tag.png";
export default function DetailedHome() {
    const {id} = useParams()
    const [data, setData] = useState(server.filter(houses => houses.id === id))
    const mappedData = data.map((item) => {
      return (
        <div key={item.id} className="flex flex-col gap-3">
          <div>
            <img
              src={item.imageUrl}
              alt={item.name + " image"}
              onClick={(e) => console.log(e.target.src)}
              className="w-full rounded-md"
            />
          </div>
          <div className="px-2">
            <div className="flex items-start relative justify-between">
              <div>
                <div
                  className="flex mb-3 gap-2 items-center"
                  aria-label={item.name}
                >
                  <img src={house} alt="a house icon" />
                  <p className="text-[1.3rem] font-medium">{item.name}</p>
                </div>
                <div className="flex gap-1 items-center">
                  <img src={map} alt={item.location} />
                  <p>{item.location}</p>
                </div>
              </div>

              <button className="absolute right-0 -top-16">
                <img src={heart} alt="heart icon" className="" />
              </button>
            </div>
            <p className="text-[1.3rem]">{item.description}</p>
            <ul className="list-disc list-inside text-[1.3rem]">
              {item.proximity.map((li, index) => {
                return <li key={index}>{li}</li>;
              })}
            </ul>
            <div className="flex gap-2 flex-col text-[1.3rem]">
              <div className="flex gap-2 item-end text-[1.3rem]">
                <img src={tag} alt="price tag icon" />
                <p className="text-[1.1rem]">Price</p>
              </div>
              <p>₦{item.price}</p>
            </div>
          </div>
          <div className="bg-blue-600 rounded-md text-white flex py-3 justify-center items-center text-[1.3rem]">
            <p>Talk to the Agent</p>
          </div>
        </div>
      );
    });
    return (
      <section className="px-3 sm:px-5 lg:px-20 py-7">
        {data.length ? mappedData : (
          <p>No homes Here</p>
        )}
      </section>
    );
}