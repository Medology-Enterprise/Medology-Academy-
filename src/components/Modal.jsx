import React from "react";
import close from "../assets/close.png";
import LinkedIn from "../assets/LinkedIn.png";

const Modal = ({ closeModal, people }) => {
  return (
    <div className="absolute rounded-md bg-color mx-[10rem] z-[999] lg:h-[24rem] -mt-[50rem]">
      <div className=" lg:flex">
        <img
          className="ml-10 lg:-ml-6 mt-[4rem] rounded-lg"
          src={people.imageUrl}
          alt=""
        />
        <div className="flex flex-col ml-8 mt-8">
          <div className="flex justify-between">
            <h3 className="mt-6 text-2xl mb-4 font-semibold leading-7 tracking-tight text-white">
              {people.name}
            </h3>
          </div>
          <p className="flex justify-start text-sm font-semibold leading-6 text-color-primary">
            {people.education}
          </p>
          <p //need separate years for each teacher
            className="font-light text-gray-200 text-xs mb-4"
          >
            Team member since 2019
          </p>
          <h3 className="text-white text-md font-semibold mb-2">Bio</h3>
          <p className="flex justify-start text-sm leading-5 mr-12 text-white">
            {people.description}
          </p>
        </div>
        <button
          className="border-none mr-12 rounded-full absolute top-8 right-0"
          onClick={() => {
            closeModal(false);
          }}
        >
          <img src={close} alt="" className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
