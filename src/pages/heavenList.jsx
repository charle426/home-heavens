import { useState, } from "react";
import server from "../server.json";
import house from "../assets/HouseLine.png"
import heart from "../assets/Hearts.png"
import map from "../assets/MapPinLine.png"
import tag from "../assets/Tag.png"
import { Link } from "react-router-dom";
import ListingFilter from "../Components/ListingFilter";
export default function HeavenList() {
    const [HomeData, setHomeData] = useState(server)
   

    const mappedData = HomeData.map(item => {
        return (
          <div key={item.id} className="flex flex-col gap-3">
            <div>
              <img
                src={item.imageUrl}
                alt={item.name + "image"}
                className="w-full max-h-[200px] lg:max-h-[180px]"
              />
            </div>
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
            <div className="text-blue-600 flex justify-center py-3 items-center text-[1.3rem]">
              <Link to={`/heavenslist/${item.id}`}>Load more</Link>
            </div>
          </div>
        );
    })
    return (
      <section className="px-3 sm:px-5 lg:px-20">
        <ListingFilter/>
            <div className="auto-grid gap-10 gap-y-16">
                {mappedData}
            </div>
      </section>
  );
}
