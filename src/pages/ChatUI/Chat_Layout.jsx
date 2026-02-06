import { useState } from "react";

import NavBarHome from "../../components/Navbar/NavbarHOME";
import PetTypes from "../../components/pet_types";
import { useNavigate } from "react-router";

export default function SelectPet() {
  const [petType, setPetType] = useState("Dog");
  const navigate = useNavigate();

  return (
    <div className="">
      <NavBarHome />
      <img
        src="/cat_bg_hero.png"
        alt="cat_image_hero"
        draggable={false}
        className="fixed select-none bottom-0 right-0 translate-y-30 translate-x-30 w-150 opacity-20 overflow-hidden"
      />
      <div className="pt-40 w-full h-fit pb-40 flex flex-col items-center justify-center  bg-gradient-to-br from-orange-500/4 to-orange-600/4 px-10 md:px-15 lg:px-20 ">
        <header className="__header__ w-full flex flex-col items-center justify-center">
          <h1 className="text-[--black] font-bold font-[grotesk] text-3xl md:text-6xl text-center">
            Welcome to{" "}
            <span className="text-[var(--orange)] font-[oughter] font-normal">
              VetBot
            </span>
          </h1>

          <p className="text-normal md:text-base text-sm pt-3 text-gray-500 w-full md:w-full lg:w-1/2 text-center poppins">
            AI-powered pet symptom checker for quick guidance—anytime, anywhere.
            Describe your pet’s symptoms and get instant advice on what to do
            next.
          </p>
        </header>

        <section className="w-full pt-15 flex flex-col items-center justify-center pb-10">
          <p className="font-semibold pb-10 poppins text-xl">
            Choose your Pet Type to continue.
          </p>
          <PetTypes chosenPet={petType} setPetType={setPetType} />
        </section>
        <section className="w-full relative flex z-100 items-end justify-end md:items-center md:justify-center">
          <button
            onClick={() => navigate(`/chat/petType/${petType}`)}
            className="bg-[var(--orange)]   px-10 py-2 rounded-xl text-white poppins"
          >
            Next
          </button>
        </section>
      </div>
    </div>
  );
}
