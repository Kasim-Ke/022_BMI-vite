import { useState } from "react";
import logo from "../images/logo.svg";

export const Main = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false); // State to track visibility

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);
      setIsVisible(true); // Show BMI after calculation
      if (bmiValue < 18.5) {
        setMessage(
          "Underweight is a medical condition that can increase the risk of health issues such as weakened immunity, osteoporosis, and nutrient deficiencies."
        );
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setMessage(
          " Maintaining a healthy weight reduces the risk of serious health problems like heart disease, diabetes, and certain cancers."
        );
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setMessage(
          "Overweight is a medical condition that can increase the risk of health issues such as heart disease, type 2 diabetes, high blood pressure, and joint problems."
        );
      } else {
        setMessage(
          "Obesity is a medical condition that raises the risk of diseases like heart disease, diabetes, and certain cancers."
        );
      }
    }
  };

  return (
    <div className="lg:max-w-[1176px] lg:h-[637px] md:max-w-[768px] md:h-[821px] max-w-[375px] h-[1050px] bg-gradient-to-r from-slate-100 to-sky-200 mx-auto rounded-b-2xl shadow-xl mb-4">
      {/* logo */}
      <div className="lg:mx-0 lg:ml-10 lg:w-[64pc] lg:h-[64px] w-[40px]  h-[40px] py-[42px] mx-auto">
        <img src={logo} alt="logo" />
      </div>
      <div className="lg:flex-row flex flex-col justify-center items-center ">
        {/* header and text */}
        <div className="lg:w-[564px] lg:h-[271px] lg:text-left lg:ml-[150px]  md:w-[686px] md:h-[202px] w-[327px] h-[327px] text-center mx-auto l  ">
          <div className="lg:w-[564px]  lg:h-[140px] lg:px-0 lg:pr-[80px]  lg:text-[64px] md:w-[686px] md:h-[106px] md:px-[150px]  h-[159px] text-[48px] font-semibold leading-[110%] mb-5">
            <h1>Body Mass Index Calculator</h1>
          </div>
          <div className="lg:pr-[100px] lg:mt-[80px] flex items-end text-[16px]  ">
            <p>
              Better understand your weight in relation to your height using our
              body mass index (BMI) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </p>
          </div>
        </div>

        {/* BMI */}
        <div className="lg: md:w-[686px] md:h-[467px] w-[328px] h-[600px] mx-auto bg-white rounded-2xl my-5 p-5 shadow-2xl ">
          <h2 className="text-center py-3 text-[24px] font-semibold ">
            Enter your details below
          </h2>
          <div className=" md:w-[622px] md:h-[98px] md:flex-row md:mx-auto w-[280px] h-[170px] flex flex-col ">
            <div className="md:mx-8 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Height (cm)
              </label>
              <input
                type="number"
                placeholder="0"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-400 focus:border-[2px] focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className=" md:mx-8 ">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Weight (kg)
              </label>
              <input
                type="number"
                placeholder="0"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-400 focus:border-[2px]"
              />
            </div>
          </div>
          <button
            onClick={calculateBMI}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline md:mx-8   "
          >
            Calculate BMI
          </button>

          {/* Animated BMI result */}

          <div className=" md:hidden block w-[280px] h-[257px] my-5 rounded-xl bg-gray-700 ">
            <div
              className={`transition-opacity duration-500  ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {bmi && (
                <div className=" md:hidden  flex flex-col justify-center items-center text-white py-5  ">
                  <h3 className="text-[18px]">Your BMI is: </h3>
                  <h3 className="text-[48px]">{bmi}</h3>
                  <h3 className="mx-5 text-[13px] text-center">{message}</h3>
                </div>
              )}
            </div>
          </div>
          <div className="  w-[500px] h-[150px] hidden  md:flex flex-row justify-between items-center  my-5 px-8 rounded-r-full bg-gray-700 md:mx-8 ">
            <div
              className={`transition-opacity duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {bmi && (
                <div className=" md:flex flex-row justify-between items-center  text-white">
                  <div>
                    <h3 className="text-[17px]">Your BMI is: </h3>
                    <h3 className="text-[48px]">{bmi}</h3>
                  </div>
                  <h3 className="mx-5 text-[13px]">{message}</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
