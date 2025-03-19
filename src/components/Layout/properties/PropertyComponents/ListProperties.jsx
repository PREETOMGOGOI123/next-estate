

import Button from "@/components/Button"
import usePropertyIndexStore from "@/store/store"
export default function ListProperties({propertyImages}) {

  return (
    <div className="w-[70vw] h-screen mx-auto flex flex-col justify-around">
      <div className="w-[70vw] m-auto grid grid-cols-2 md:grid-cols-3 gap-4 ">
        {propertyImages.map((item, index) => (
          <div key={index}>
            <img
              className="h-auto w-[80rem] rounded-lg cursor-pointer hover:scale-200 duration-100 hover:border-4 border-indigo-400 ease-in hover:z-50"
              src={item}
              alt=""
            />
            <a href="#" target="_blank" className="mt-10 underline text-blue-400">Click to enquire</a>
          </div>
        ))}
      </div>
      <div>
        <Button index={null}>Back to All Properties</Button>
      </div>
    </div>
  )
}
