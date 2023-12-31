"use client"
import React, { useState } from "react"
import Modal from "react-modal"
import Image from "next/image"
import pfp from ".//pfp.jpeg"

const PhotoWindow = () => {
  const [isOpen, setIsOpen] = useState(false)
  const customStyles = {
    overlay: {
       backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    content: {
       //top: '50%',
       //left: '50%',
       //right: 'auto',
       //bottom: 'auto',
       marginRight: '-50%',
       //transform: 'translate(-50%, -50%)'
    }
 }

//https://www.tutorialspoint.com/how-to-align-the-modal-content-box-to-the-center-of-any-screen#:~:text=Using%20CSS%20to%20position%20the,should%20be%20set%20to%2050%25.
//https://www.tutorialspoint.com/how-to-add-popup-in-nextjs


//h-screen flex justify-center items-center align-middle m-auto w-1/2 border-2 border-solid border-black rounded-3xl

//https://coryrylan.com/blog/how-to-center-in-css-with-flexbox
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Photo Window</button>
      <div className="">
        <div className="">
          {/*translate-x-[1%] translate-y-[20%]*/}
          <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} className="flex justify-center items-center w-[74rem] h-[35rem] bg-white rounded-3xl" style={{ overlay: { background: "rgb(161, 161, 170, 0.7)"}}}>
            <div className="flex justify-center items-center w-full h-full rounded-3xl shadow-xl">
              <img
                className="flex justify-center items-center object-contain m-6 h-5/6 rounded-3xl"
                alt="Mountain"
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg" />
              <div className="m-6">
                <div className="text-xl text-gray-600 body-font font-semibold font-rubik">Mount Everest</div>
                <div className="font-light">Resolution: 6000 x 4000</div>
                <div className="font-light">Location: Himalayas, Nepal</div>
                <div className="font-light">Collection: Nepal</div>
                <div className="flex items-center">
                  <Image
                    className="h-16 w-16 rounded-3xl mr-3 mt-3 mb-3"
                    alt="Photographer Profile"
                    src={pfp}/>
                  <div className="text-gray-600 font-semibold">Photographer Name</div>
                </div>
                <div className="text-gray-600 font-semibold">Style</div>
                <div className="h-10 grid grid-cols-4 gap-1 content-center">
                  <button className="flex justify-center items-center w-20 h-8 border-2 border-solid border-[#c5c5c5] rounded-lg hover:bg-gray-200">Print</button>
                  <button className="flex justify-center items-center w-20 h-8 border-2 border-solid border-[#c5c5c5] rounded-lg hover:bg-gray-200">Canvas</button>
                  <button className="flex justify-center items-center w-20 h-8 border-2 border-solid border-[#c5c5c5] rounded-lg hover:bg-gray-200">Metal</button>
                  <button className="flex justify-center items-center w-20 h-8 border-2 border-solid border-[#c5c5c5] rounded-lg hover:bg-gray-200">Puzzle</button>
                </div>
                <div className="text-gray-600 font-semibold">Size</div>
                <div className="h-20 grid grid-cols-4 gap-1 content-center">
                  <button className="flex justify-center items-center w-20 h-8 border-2 border-solid border-[#c5c5c5] rounded-lg hover:bg-gray-200">5"×7"</button>
                  <button className="flex justify-center items-center w-20 h-8 border-2 border-solid border-[#c5c5c5] rounded-lg hover:bg-gray-200">8"×10"</button>
                  <button className="flex justify-center items-center w-20 h-8 border-2 border-solid border-[#c5c5c5] rounded-lg hover:bg-gray-200">11"×14"</button>
                  <button className="flex justify-center items-center w-20 h-8 border-2 border-solid border-[#c5c5c5] rounded-lg hover:bg-gray-200">12"×16"</button>
                  <button className="flex justify-center items-center w-20 h-8 border-2 border-solid border-[#c5c5c5] rounded-lg hover:bg-gray-200">16"×20"</button>
                  <button className="flex justify-center items-center w-20 h-8 border-2 border-solid border-[#c5c5c5] rounded-lg hover:bg-gray-200">18"×24"</button>
                  <button className="flex justify-center items-center w-20 h-8 border-2 border-solid border-[#c5c5c5] rounded-lg hover:bg-gray-200">24"×36"</button>
                </div>
                <div className="mt-4 text-lg text-blue-600 font-semibold">$99.99</div>
                <button className="mt-4 flex justify-center items-center h-10 w-full bg-blue-500 hover:bg-blue-600 rounded-3xl text-white font-bold">Add To Cart</button>
                {/*<button onClick={() => setIsOpen(false)} className="relative">Close PhotoWindow</button>*/}
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>

  );
};

export default PhotoWindow