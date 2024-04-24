import { useState } from "react"

export default function ListingFilter() {
    const [filter, setFilter] = useState({
        street: "", apartment: "", user: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFilter(prev => ({...prev, [name]: value}))
    }

    return (
      <section className="py-7 flex items-center justify-center">
        <div className="w-full max-w-[700px] list-filter-bg *:mb-4 md:px-7 rounded-2xl px-3 py-5 *:flex *:items-center *:w-full *:md:flex-row *:flex-col *:gap-2">
          <div>
            <p className="text-white text-[1.3rem] font-semibold">Street</p>
            <input
              type="text"
              name="street"
              onChange={handleChange}
              value={filter.street}
              placeholder="What street are you looking for an apartment in"
              className="bg-transparent rounded-md ring-1 ring-white focus:bg-white placeholder:text-[#4b8d5ca5]  w-full text-[23px] px-4 py-2"
            />
          </div>
          <div>
            <p className="text-white text-[1.3rem] w-[300px] font-semibold">
              Type of Apartment
            </p>
            <input
              type="text"
              name="apartment"
              onChange={handleChange}
              value={filter.apartment}
              placeholder="What type of apartment are you looking for?"
              className="bg-transparent rounded-md ring-1 ring-white focus:bg-white placeholder:text-[#4b8d5ca5] w-full text-[23px] px-4 py-2"
            />
          </div>
          <div>
            <p className="text-white text-[1.3rem] font-semibold w-[200px]">
              Select User
            </p>
            <select
              name="user"
              onChange={handleChange}
              className="bg-transparent rounded-md ring-1 ring-white focus:bg-white placeholder:text-[#4b8d5ca5] w-full text-[23px] px-4 py-2"
            >
              <option value="Select User" >
                Select User
              </option>
              <option value="Landlord">
                LandLord
              </option>
              <option value="Tenant">
                Tenant
              </option>
            </select>
          </div>
        </div>
      </section>
    );
}