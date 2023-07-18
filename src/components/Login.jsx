import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'
const Login = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [click,setClick]=useState(false);
  const navigate = useNavigate();
  const validateEmail=(email)=> {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const handleChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValid(validateEmail(inputEmail));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    if(isValid == true ){
      navigate("/home");
    }
  };
  return (
    <div className="relative min-h-screen flex ">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
        <div class="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative">
          <div class="absolute bg-gradient-to-b from-green-600 to-green-400 opacity-75 inset-0 z-0"></div>
          <div class="w-full  max-w-md z-10">
          <div class="sm:text-sm xl:text-md text-gray-200 font-normal">
             <img src={logo} className="sm:w-28 md:w-112 lg:w-60"/>
            </div>
            <div class="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              Spin The Wheel
            </div>
           
          </div>
        </div>
        <div class="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full  xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
          <div class="max-w-md w-full space-y-8">
            <div class="text-center">
              <img src={logo} className="w-full  sm:block md:hidden lg:hidden " />
              <h2 class="mt-6 text-3xl font-bold text-gray-900">
                הרשמה לניוזלטר
              </h2>
              <p class="mt-2 text-sm text-gray-500">
              אנא היכנס לחשבון שלך
              </p>
            </div>
            <form class="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div class="relative">
                <div class="absolute right-3 mt-4">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg> */}
                </div>
                {/* Email field */}
                <label class="ml-3 flex justify-end text-sm font-bold text-gray-700 tracking-wide">
                {/* class="w-full flex justify-center bg-gradient-to-r from-green-500 to-green-300  hover:bg-gradient-to-l hover:from-green-500 hover:to-green-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500" */}
                 כתובת מייל
                </label>
                <input
                  class=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                  type="mail"
                  placeholder="mail@xyz.com"
                  value={email}
                  onChange={handleChange}
                />
               {click ? isValid ? <span style={{ color: 'green' }}>Valid email</span> : <span style={{ color: 'red' }}>Invalid email</span>:<div></div>}

                {/* Phone number */}

                <label class="ml-3 flex justify-end text-sm font-bold text-gray-700 tracking-wide">
                מספר נייד 
                </label>
                <input
                  class=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                  type="number"
                  placeholder="XXXXXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  class="w-full flex justify-center bg-gradient-to-r from-green-500 to-green-300  hover:bg-gradient-to-l hover:from-green-500 hover:to-green-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  onClick={(e) => setClick(true)}  >
                  סיימתי, סובב את גלגל המזל
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
