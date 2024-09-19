import gender from "../images/icon-gender.svg";
import age from "../images/icon-age.svg";
import mucles from "../images/icon-muscle.svg";
import pregnancy from "../images/icon-pregnancy.svg";
import race from "../images/icon-race.svg";

export const Cards = () => {
  return (
    <div className="lg:w-[1160px] lg:h-[704px] md:w-[686px] md:h-[903px] w-[375px] h-[1330px]   mx-auto mt-10 bg-gradient-to-r from-slate-100 to-sky-200 rounded-2xl ">
      <div className="lg:w-[564px] lg:h-[185px] lg:mx-2 lg:justify-around lg:items-start lg:text-left md:w-[686px] md:h-[140px]  w-[327px] h-[210px] flex flex-col justify-between text-center mx-auto py-3 ">
        <h1 className="lg:text-[48px] text-[32px] leading-[110%] font-semibold">
          Limitations of BMI
        </h1>
        <p className="">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>

      <div className="lg:w-[1060px] lg:h-[704px] lg:grid-cols-3 lg:grid-row-3 md:w-[686px] md:h-[768px]  w-[327px] h-[1095px] md:grid-cols-2 md:grid-rows-3 md:grid flex flex-col justify-between items-center  mx-auto  ">
        {/*DESKTOP*/}
        <div className="w-[327px] h-[200px] px-8 rounded-2xl shadow-md bg-white ">
          <div className="flex py-5">
            <img
              className="w-[32px] h-[32px] mr-[15px]"
              src={gender}
              alt="gender"
            />
            <h2 className=" text-[20px] font-semibold ">Gender</h2>
          </div>
          <p className="">
            The development and body fat composition of girls and boys vary with
            age. Consequently, a childs age and gender are considered when
            evaluating their BMI.
          </p>
        </div>
        {/*AGE CARD */}
        <div className="w-[327px] h-[200px] px-8 rounded-2xl shadow-md bg-white ">
          <div className="flex py-5">
            <img className="w-[32px] h-[32px] mr-[15px]" src={age} alt="age" />
            <h2 className="text-[20px] font-semibold ">Age </h2>
          </div>
          <p className="">
            In aging individuals, increased body fat and muscle loss may cause
            BMI to underestimate body fat content.
          </p>
        </div>
        {/*MUSCLE CARD */}
        <div className="w-[327px] h-[200px] px-8 rounded-2xl shadow-md  bg-white ">
          <div className="flex py-5">
            <img
              className="w-[32px] h-[32px] mr-[15px]"
              src={mucles}
              alt="mucles"
            />
            <h2 className="text-[20px] font-semibold ">Muscle </h2>
          </div>
          <p className="">
            BMI may misclassify muscular individuals as overweight or obese, as
            it doesnt differentiate muscle from fat.
          </p>
        </div>
        {/*PREGNANCY CARD */}
        <div className="lg:ml-[40%] w-[327px] h-[200px] px-8 rounded-2xl shadow-md bg-white ">
          <div className="flex py-3">
            <img
              className="w-[32px] h-[32px] mr-[15px]"
              src={pregnancy}
              alt="pregnancy"
            />
            <h2 className="text-[20px] font-semibold ">Pregnancy </h2>
          </div>
          <p className="">
            Expectant mothers experience weight gain due to their growing baby.
            Maintaining a healthy pre-pregnancy BMI is advisable to minimise
            health risks for both mother and child.
          </p>
        </div>
        {/*RACE CARD */}
        <div className=" md:ml-[50%] w-[327px] h-[200px] px-8 rounded-2xl shadow-md bg-white ">
          <div className="flex py-5">
            <img
              className="w-[32px] h-[32px] mr-[15px]"
              src={race}
              alt="race"
            />
            <h2 className="text-[20px] font-semibold ">Race </h2>
          </div>
          <p className="">
            Certain health concerns may affect individuals of some Black and
            Asian origins at lower BMIs than others. To learn more, it is
            advised to discuss this with your GP or practice nurse.
          </p>
        </div>
      </div>
    </div>
  );
};
