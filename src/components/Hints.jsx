import img1 from "../images/icon-eating.svg";
import img2 from "../images/icon-exercise.svg";
import img3 from "../images/icon-sleep.svg";

export const Hints = () => {
  return (
    <div className="lg:w-[1400px] lg:h-[400px] md:w-[768px] md:h-[500px] md:mt-12 w-[370px] h-[880px] mx-auto bg-gradient-to-r from-slate-100 to-sky-200 flex flex-col justify-center items-center rounded-3xl shadow-xl mt-[5rem]  ">
      <div className="lg:w-[1160px] lg:h-[235px] lg:flex-row  md:w-[686px] md:h-[383px] w-[327px] h-[767px]  flex flex-col justify-between  ">
        <div className=" lg:w-[365px] lg:h-[235px] lg:flex-col lg:items-start lg:justify-start  md:w-[686px] md:flex-row md:items-center md:justify-between  w-[327px] h-[221px] flex flex-col justify-between ">
          <img className="w-[64px] h-[64px]" src={img1} alt="img1" />
          <div className="lg:w-[365px] lg:h-[125px] lg:pt-5  md:w-[582px] md:flex md:flex-col">
            <h1 className="text-[24px] font-semibold">Healthy eating</h1>
            <p className=" pt-4">
              Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood.
            </p>
          </div>
        </div>
        <div className=" lg:w-[365px] lg:h-[235px] lg:flex-col lg:items-start lg:justify-start  md:w-[686px] md:flex-row md:items-center md:justify-between  w-[327px] h-[221px] flex flex-col justify-between ">
          <img className=" w-[64px] h-[64px]" src={img2} alt="img1" />
          <div className="lg:w-[365px] lg:h-[125px] lg:pt-5   md:w-[582px] md:flex md:flex-col">
            <h1 className="text-[24px] font-semibold">Regular exercise</h1>
            <p className=" pt-3 ">
              Exercise improves fitness, aids weight control, elevates mood, and
              reduces disease risk, fostering wellness and longevity.
            </p>
          </div>
        </div>
        <div className="  lg:w-[365px] lg:h-[235px] lg:flex-col lg:items-start lg:justify-start  md:w-[686px] md:flex-row md:items-center md:justify-between  w-[327px] h-[221px] flex flex-col justify-between ">
          <img className=" w-[64px] h-[64px]" src={img3} alt="img1" />
          <div className="lg:w-[365px] lg:h-[125px] lg:pt-5 md:w-[582px] md:flex md:flex-col">
            <h1 className="text-[24px] font-semibold">Adequate sleep</h1>
            <p className=" pt-4">
              Sleep enhances mental clarity, emotional stability, and physical
              wellness, promoting overall restoration and rejuvenation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
