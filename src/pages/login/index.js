import React, { useState } from "react";
import CardFront from "../../assets/Images/bg-card-front.png"
import CardBack from "../../assets/Images/bg-card-back.png";


const Login = () => {
    const [name, setName] = useState("Jane Appleseed");
    const [card, setCard] = useState("0000 0000 0000 0000");
    const onNameChange=(e)=>{
        e.preventDefault()
        setName(e.target.value)
    }
    const onCardChange = (e)=>{
        e.preventDefault()
        setCard(e.target.value)
    }
  return (
    <>
      <div>
        <div className="md:flex flex-wrap  ">
          <div className="w-full md:w-1/3 left-bg md:h-screen h-60">
            <div className="md:py-40 md:ml-40">
              <div className="card1 top-36 md:top-0 mb-10 right-6 md:right-0 z-10  md:left-40 h-40 md:h-72 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110 ">
                <img
                  className="relative object-cover w-full h-full rounded-xl"
                  src={CardFront}
                />

                <div className="w-full px-8 absolute top-4">
                  <div className="flex ">
                    <div className="">
                      <span className="dot"></span>
                    </div>
                    <div className="flex justify-center items-center pl-3">
                      <span className="dot-small"></span>
                    </div>
                  </div>
                  <div className="md:pt-16 pt-6">
                    <p className=" text-[color:white] md:text-4xl tracking-widest">
                      {[...card].map((d,i)=>(i) % 4 == 0 ? '' + d :d).join('').trim()}
                    </p>
                  </div>
                  <div className="pt-6 pr-6">
                    <div className="flex justify-between">
                      <div className="">
                        <p className="  text-[color:white] md:text-lg text-xs uppercase tracking-wider ">
                          {name}
                        </p>
                      </div>

                      <div className="">
                        <p className="  text-[color:white] md:text-lg text-xs uppercase tracking-wider ">
                          00/00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card1 bottom-40 md:bottom-0 md:ml-40 left-7 md:left-40 md:h-72 h-40 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110 ">
                <img
                  className="relative object-cover w-full h-full rounded-xl"
                  src={CardBack}
                />

                <div className="w-full px-8 absolute top-8">
                  <div className="flex justify-between"></div>
                  <div className="md:pt-12 pt-3"></div>
                  <div className="pt-6  md:pr-6">
                    <div className="flex justify-between">
                      <div className=""></div>
                      <div className=""></div>

                      <div className="md:pt-5 -pt-5 md:-pt-0">
                        <p className=" text-[color:white] md:text-lg">000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
            <div className="flex justify-center items-center h-screen">
              <div className="block p-6 r bg-white md:w-1/3">
                <form>
                  <div className="form-group mb-6">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label inline-block mb-2 text-primary text-xs"
                    >
                      CARDHOLDER NAME
                    </label>
                    <input
                      type="email"
                      className="form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white  border border-solid border-gray-300 border-rounded-lg rounded transition ease-in-out m-0
       "                onChange={onNameChange}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="e.g Jane Appleseed"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label inline-block mb-2 text-primary text-xs"
                    >
                      CARD NUMBER
                    </label>
                    <input
                    onChange={onCardChange}
                      type="number"
                      className="form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="flex flex-wrap  ">
                    <div className="flex flex-wrap w-full md:w-1/2 gap-x-2">
                      <div className=" md:w-1/3">
                        <div className="form-group mb-6">
                          <label
                            htmlFor="exampleInputPassword1"
                            className="form-label inline-block mb-2 text-primary text-xs"
                          >
                            EXP. DATE
                          </label>
                          <input
                            type="password"
                            className="form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInputPassword1"
                            placeholder="MM"
                          />
                        </div>
                      </div>
                      <div className=" md:w-1/3 ">
                        <div className="form-group mb-6">
                          <label
                            htmlFor="exampleInputPassword1"
                            className="form-label inline-block mb-2 text-primary text-xs"
                          >
                            (MM/YY)
                          </label>
                          <input
                            type="password"
                            className="form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInputPassword1"
                            placeholder="YY"
                          />
                        </div>
                      </div>
                    </div>
                    <div className=" md:w-1/2 ">
                      <div className="form-group mb-6">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label inline-block mb-2 text-primary text-xs"
                        >
                          CVC
                        </label>
                        <input
                          type="password"
                          className="form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleInputPassword1"
                          placeholder="e.g. 123"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="
                    w-full md:px-6 px-3 py-4 bg-[color:#220930] text-white font-medium text-lg leading-tight  rounded-md shadow-md hover:bg-primary hover:shadow-lg focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Confirm
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
