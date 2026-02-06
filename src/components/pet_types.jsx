import { FaPaw } from "react-icons/fa";

const PET_TYPES = [
  { id: 1, label: "Dog" },
  { id: 2, label: "Cat" },
  { id: 3, label: "Other" },
];

const handlePetTypes = (set, petLabel) => {
  set(petLabel);
};

export default function PetTypes({ chosenPet, setPetType }) {
  return (
    <section className="grid grid-cols-2 md:flex md:flex-row gap-8 md:gap-14">
      {PET_TYPES.map((pet) => {
        const isActive = chosenPet === pet.label;

        return (
          <div key={pet.id} className=" flex gap-4 items-center">
            <section
              disabled={isActive}
              onClick={() => handlePetTypes(setPetType, pet.label)}
              className="relative w-30 h-50 md:w-40 md:h-60 lg:w-60 lg:h-100"
            >
              {/* ORANGE BACKGROUND — bottom half only */}
              <div
                className="
      absolute inset-0
      bg-[var(--orange)]
      rounded-full
      shadow-[inset_0_10px_60px_10px_rgba(0,0,0,0.10)]

      z-10
    "
              />

              {/* IMAGE CLIPPER — hides bottom only */}
              <div
                className="
      absolute inset-0
      
      overflow-hidden
      z-20 rounded-full
    "
              >
                {pet.id !== 3 ? (
                  <img
                    src={`${pet.label}.png`}
                    alt="animal picture"
                    draggable={false}
                    className="
                  rounded-b-full
                  select-none 
        w-fit h-full object-cover
        transition-all duration-200
        hover:-translate-y-1 hover:scale-104
      "
                  />
                ) : (
                  <span
                    className="inset-0 select-none text-white text-8xl flex items-center justify-center h-full transition-all duration-200
        hover:-translate-y-1 hover:scale-104"
                  >
                    <FaPaw />
                  </span>
                )}
              </div>
              <div className="inset-0 absolute flex items-center justify-center">
                <h1
                  className={`absolute rounded-full bottom-0 z-100 px-10 py-2 transition-all duration-300 mont text-white ${isActive ? "bg-[var(--dgray)]" : "bg-[var(--lgray)]"}`}
                >
                  {pet.label}
                </h1>
              </div>
            </section>
          </div>
        );
      })}
    </section>
  );
}
