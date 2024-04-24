import { useState } from "react";
export default function MessageForm() {
    const [form, setForm] = useState({
        name: "", email: "", message: "",
    })

    function handleChange(e) {
        const { name, value } = e.target
        setForm(prev => ({...prev, [name]: value}))
    }
    return (
      <section className="px-3 sm:px-5 py-4 lg:px-20 mt-10 *:text-white rounded-t-[20px] bg-[#63BC54]">
        <div>
          <h3 className="underline-offset-4 underline text-center mb-7 font-bold text-[1.8em]">
            WE WOULD LOVE TO HEAR FROM YOU
          </h3>
        </div>
        <form className="w-full *:max-w-[500px] flex flex-col gap-5 items-center justify-center">
          <div className="flex flex-col md:flex-row gap-3 items-center w-full">
            <label className="text-[.9rem] w-full max-w-[100px]">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={form.name}
              className="ring-white bg-transparent w-full ring-1 placeholder:text-white rounded-md p-3"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-3 items-center w-full">
            <label className="text-[.9rem] w-full max-w-[100px]">
              Email Address
            </label>
            <input
              type="email"
              name="name"
              onChange={handleChange}
              value={form.email}
              className="ring-white bg-transparent w-full ring-1 placeholder:text-white rounded-md p-3"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-3 items-center w-full">
            <label className="text-[.9rem] w-full max-w-[100px]">Message</label>
            <textarea
              cols="30"
              rows="6"
              type="text"
              name="message"
              onChange={handleChange}
              value={form.message}
              className="ring-white bg-transparent w-full ring-1
              placeholder:text-white rounded-md p-3"
            >
             
            </textarea>
          </div>
          <div className="flex w-full justify-end">
            <button className="mt-3 bg-blue-600 rounded-md py-2 px-4">
              Send Message
            </button>
          </div>
        </form>
      </section>
    );
}