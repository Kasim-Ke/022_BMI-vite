import mainImg from "../images/image-man-eating.webp";

export const Hero = () => {
  return (
    <div className="lg:w-[1160px] lg:h-[533px] lg:flex lg:items-center md:w-[768px] md:h-[411px]   w-[375px] h-[745px] md:my-5 md:flex  mx-auto   ">
      {/* image */}
      <div className="lg:w-[580px] lg:h-[533px] lg:items-end  md:h-[411px]   md:flex-row md:justify-center   w-full h-[354px] flex flex-col ">
        <img src={mainImg} alt="mainImg" />
      </div>
      {/* image header & text */}
      <div className="lg:w-[580px] h-[391px]  flex flex-col justify-end  ">
        <div className="lg:w-[580px] md:w-[331px] w-[328px] h-[342px]  mx-auto md:px-8  ">
          <h1 className="lg:text-[48px] text-[32px] font-semibold my-7 leading-[110%]">
            What your BMI result means
          </h1>
          <p className="  lg:text-[16px]  md:text-[15px] ">
            A BMI range of 18.5 to 24.9 is considered a healthy weight.
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </p>
        </div>
      </div>
    </div>
  );
};
