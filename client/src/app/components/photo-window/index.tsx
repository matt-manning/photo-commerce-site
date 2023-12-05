"use client"
import React, { useState } from "react"
import Modal from "react-modal"

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

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Photo Window</button>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} className="flex items-center justify-center absolute top-0 left-0 w-3/5 h-3/5"> {/*bg-white top-1/2 left-1/2 right-auto bottom-auto translate-x-[-50%] translate-y-[-50%] */}
        <div className="w-80 h-52 bg-white p-5 border-2 border-solid border-black shadow-lg">
          <div className="">
            <img
              className=""
              alt="Image"
              src=""
            />
            <div className="">
              [Photographer Name]
            </div>
            <div className="">
              <div className="">
                Golden Hour at Matterhorn
              </div>
              <div className="">
                Resolution: 6000 x 4000
              </div>
              <div className="">
                Location: Matterhorn, Switzerland
              </div>
              <div className="">
                Collection: Switzerland
              </div>
            </div>
            <img
              className=""
              alt="Ellipse"
              src="ellipse-1.png"
            />
            <div className="">
              <div className="">
                Print
              </div>
            </div>
            <div className="">
              Style
            </div>
            <div className="">
              $99.99
            </div>
            <div className="">
              Size
            </div>
            <div className="">
              <div className="">
                Canvas
              </div>
            </div>
            <div className="">
              <div className="">
                Metal
              </div>
            </div>
            <div className="">
              <div className="">
                Puzzle
              </div>
            </div>
            <div className="">
              <div className="">
                5”×7”
              </div>
            </div>
            <div className="">
              <div className="">
                8”×10”
              </div>
            </div>
            <div className="">
              <div className="">
                11”×14”
              </div>
            </div>
            <div className="">
              <div className="">
                12”×16”
              </div>
            </div>
            <div className="">
              <div className="">
                16”×20”
              </div>
            </div>
            <div className="">
              <div className="">
                18”×24”
              </div>
            </div>
            <div className="">
              <div className="">
                18”×24”
              </div>
            </div>
            <div className="">
              <div className="">
                24”×36”
              </div>
            </div>
            <div className="">
              <div className="">
                Add To Cart
              </div>
            </div>
          </div>
        </div>
        <button onClick={() => setIsOpen(false)}>Close PhotoWindow</button>
      </Modal>

    </div>

  );
};

export default PhotoWindow

/*
    <div>
      <button onClick={() => setIsOpen(true)}>Open Photo Window</button>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} className="rounded-3xl"> {className="absolute w-[900px] h-[500px]"}
      <div className="bg-white flex flex-row justify-center w-full rounded-3xl"> {flex flex-row ... w-full}
      <div className="bg-white w-[1100px] h-[511px] relative rounded-3xl">
        <img
          className="absolute w-[756px] h-[493px] top-[16px] left-[9px] object-cover rounded-3xl"
          alt="Image"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"
        />
        <div className="absolute top-[158px] left-[847px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#474747] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
          [Photographer Name]
        </div>
        <div className="flex-col items-start gap-[6px] top-[18px] left-[775px] inline-flex absolute">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#474747] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
            Golden Hour at Matterhorn
          </div>
          <div className="relative w-fit [font-family:'Roboto-Regular',Helvetica] font-normal text-[#474747] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
            Resolution: 6000 x 4000
          </div>
          <div className="relative w-fit [font-family:'Roboto-Regular',Helvetica] font-normal text-[#474747] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
            Location: Matterhorn, Switzerland
          </div>
          <div className="relative w-fit [font-family:'Roboto-Regular',Helvetica] font-normal text-[#474747] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
            Collection: Switzerland
          </div>
        </div>
        <img
          className="absolute w-[60px] h-[60px] top-[139px] left-[775px] object-cover"
          alt="Ellipse"
          src="ellipse-1.png"
        />
        <div className="items-center justify-center gap-[10px] px-[19px] py-[8px] top-[241px] left-[775px] bg-[#d9d9d966] rounded-[10px] overflow-hidden border-[1.5px] border-solid border-[#979797] inline-flex absolute">
          <div className="relative w-fit mt-[-1.50px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#474747] text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Print
          </div>
        </div>
        <div className="absolute top-[215px] left-[775px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#474747] text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Style
        </div>
        <div className="absolute top-[406px] left-[775px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#3b6fbd] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          $99.99
        </div>
        <div className="absolute top-[289px] left-[775px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#474747] text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Size
        </div>
        <div className="items-center justify-center gap-[10px] px-[10px] py-[8px] top-[241px] left-[851px] rounded-[10px] overflow-hidden border-[1.5px] border-solid border-[#979797] inline-flex absolute">
          <div className="relative w-fit mt-[-1.50px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#474747] text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Canvas
          </div>
        </div>
        <div className="items-center justify-center gap-[10px] px-[10px] py-[8px] top-[241px] left-[928px] rounded-[10px] overflow-hidden border-[1.5px] border-solid border-[#979797] inline-flex absolute">
          <div className="relative w-fit mt-[-1.50px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#474747] text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Metal
          </div>
        </div>
        <div className="items-center justify-center gap-[10px] px-[10px] py-[8px] top-[241px] left-[993px] rounded-[10px] overflow-hidden border-[1.5px] border-solid border-[#979797] inline-flex absolute">
          <div className="relative w-fit mt-[-1.50px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#474747] text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Puzzle
          </div>
        </div>
        <div className="items-center justify-center gap-[10px] px-[10px] py-[8px] top-[314px] left-[775px] rounded-[10px] overflow-hidden border-[1.5px] border-solid border-[#979797] inline-flex absolute">
          <div className="relative w-fit mt-[-1.50px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#474747] text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            5”×7”
          </div>
        </div>
        <div className="items-center justify-center gap-[10px] px-[10px] py-[8px] top-[314px] left-[835px] rounded-[10px] overflow-hidden border-[1.5px] border-solid border-[#979797] inline-flex absolute">
          <div className="relative w-fit mt-[-1.50px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#474747] text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            8”×10”
          </div>
        </div>
        <div className="items-center justify-center gap-[10px] px-[10px] py-[8px] top-[314px] left-[904px] bg-[#d9d9d966] rounded-[10px] overflow-hidden border-[1.5px] border-solid border-[#979797] inline-flex absolute">
          <div className="relative w-fit mt-[-1.50px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#474747] text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            11”×14”
          </div>
        </div>
        <div className="items-center justify-center gap-[10px] px-[10px] py-[8px] top-[314px] left-[982px] rounded-[10px] overflow-hidden border-[1.5px] border-solid border-[#979797] inline-flex absolute">
          <div className="relative w-fit mt-[-1.50px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#474747] text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            12”×16”
          </div>
        </div>
        <div className="items-center justify-center gap-[10px] px-[10px] py-[8px] top-[352px] left-[775px] rounded-[10px] overflow-hidden border-[1.5px] border-solid border-[#979797] inline-flex absolute">
          <div className="relative w-fit mt-[-1.50px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#474747] text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            16”×20”
          </div>
        </div>
        <div className="items-center justify-center gap-[10px] px-[10px] py-[8px] top-[352px] left-[853px] rounded-[10px] overflow-hidden border-[1.5px] border-solid border-[#979797] inline-flex absolute">
          <div className="relative w-fit mt-[-1.50px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#474747] text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            18”×24”
          </div>
        </div>
        <div className="items-center justify-center gap-[10px] px-[10px] py-[8px] top-[352px] left-[931px] rounded-[10px] overflow-hidden border-[1.5px] border-solid border-[#979797] inline-flex absolute">
          <div className="relative w-fit mt-[-1.50px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#474747] text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            18”×24”
          </div>
        </div>
        <div className="items-center justify-center gap-[10px] px-[10px] py-[8px] top-[352px] left-[1009px] rounded-[10px] overflow-hidden border-[1.5px] border-solid border-[#979797] inline-flex absolute">
          <div className="relative w-fit mt-[-1.50px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#474747] text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            24”×36”
          </div>
        </div>
        <div className="absolute w-[294px] h-[39px] top-[450px] left-[775px] bg-[#78a4fa] rounded-[20px]">
          <div className="absolute top-[9px] left-[103px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Add To Cart
          </div>
        </div>
      </div>
    </div>
    <button onClick={() => setIsOpen(false)}>Close PhotoWindow</button>
  </Modal>

</div>
*/