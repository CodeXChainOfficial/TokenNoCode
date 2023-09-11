import React from "react";

import { Button, Img, Input, Text } from "components";
import CreateTokenHomepageFooterexplorer from "components/CreateTokenHomepageFooterexplorer";
import Header from "components/Header";

const RegristrationpagecontributorgeneraluserPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-center justify-end mx-auto w-full">
        <Header className="bg-black-900_cc flex md:flex-col md:gap-10 items-center justify-between px-20 md:px-5 w-full" />
        <div className="flex h-[173px] md:h-[205px] sm:h-[239px] justify-end mt-8 md:px-5 relative w-full">
          <Img
            className="h-px mb-[47px] mt-auto mx-auto w-px"
            src="images/img_vector.svg"
            alt="vector"
          />
          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
            <div className="bg-black-900 flex flex-col gap-8 items-start justify-start w-auto md:w-full">
              <div className="bg-black-900 flex flex-col items-start justify-start w-auto md:w-full">
                <div className="bg-black-900 flex sm:flex-col flex-row gap-2.5 items-start justify-start md:px-10 px-20 sm:px-5 w-auto md:w-full">
                  <Text
                    className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px] w-auto"
                    size="txtRalewayRomanSemiBold48"
                  >
                    regristration
                  </Text>
                  <Input
                    name="frame371293"
                    placeholder="general user"
                    className="capitalize font-semibold p-0 placeholder:text-white-A700 sm:px-5 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                    wrapClassName="bg-green-400 px-8 py-[7px] rounded-br-[32px] rounded-tl-[32px] w-[35%] sm:w-full"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-black-900 flex flex-col items-center justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 py-2 w-full">
                    <div className="flex flex-col items-center justify-start py-2 w-full">
                      <div className="flex flex-row gap-8 items-start justify-start w-auto">
                        <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[160px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                          create account
                        </Button>
                        <Button className="bg-black-900_01 capitalize cursor-pointer font-semibold min-w-[87px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                          tesnet
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start max-w-7xl mt-8 mx-auto p-8 md:px-5 rounded-lg w-full">
          <Text
            className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
            size="txtRalewayRomanSemiBold20"
          >
            Create Your Account
          </Text>
          <div className="flex flex-col gap-4 items-end justify-start w-auto md:w-full">
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-4 items-end justify-end w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA700e5"
                    >
                      Email Address
                    </Text>
                    <Input
                      name="email"
                      placeholder="xxx@gmai.com"
                      className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                      wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
                      type="email"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA700e5"
                    >
                      github{" "}
                    </Text>
                    <Input
                      name="inputfieldtext"
                      placeholder="ex. shiba"
                      className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                      wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA700e5"
                    >
                      Linkedin{" "}
                    </Text>
                    <Input
                      name="inputfieldtext_One"
                      placeholder="token suply"
                      className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                      wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-full"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA700e5"
                    >
                      Username
                    </Text>
                    <Input
                      name="inputfieldtext_Two"
                      placeholder="ex. shibainu"
                      className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                      wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA700e5"
                    >
                      Wallet Address
                    </Text>
                    <Input
                      name="inputfieldtext_Three"
                      placeholder="wallet link"
                      className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                      wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-8 w-auto">
              <Button className="bg-gradient1  capitalize cursor-pointer font-semibold min-w-[160px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
                connect wallet
              </Button>
            </div>
          </div>
        </div>
        <CreateTokenHomepageFooterexplorer className="bg-gray-900 flex flex-col font-inter gap-8 items-center justify-start max-w-[1440px] mt-[86px] md:px-10 px-20 sm:px-5 py-4 w-full" />
        <CreateTokenHomepageFooterexplorer className="bg-gray-900 flex flex-col font-inter gap-8 items-center justify-start max-w-[1440px] mt-[1390px] md:px-10 px-20 sm:px-5 py-4 w-full" />
      </div>
    </>
  );
};

export default RegristrationpagecontributorgeneraluserPage;
