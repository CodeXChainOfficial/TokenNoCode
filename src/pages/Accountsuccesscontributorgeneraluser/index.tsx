import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import CreateTokenHomepageFooterexplorer from "components/CreateTokenHomepageFooterexplorer";
import Header from "components/Header";

const AccountsuccesscontributorgeneraluserPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-center justify-end mx-auto w-full">
        <Header className="bg-black-900_cc flex md:flex-col md:gap-10 items-center justify-between px-20 md:px-5 w-full" />
        <div className="backdrop-opacity-[0.5] blur-[10.00px] h-[599px] sm:h-[613px] md:h-[786px] mt-8 md:px-5 relative w-full">
          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-black-900 flex flex-col items-start justify-start w-auto md:w-full">
                <div className="flex flex-col items-start justify-start md:px-10 px-20 sm:px-5 w-auto sm:w-full">
                  <Text
                    className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px] w-auto"
                    size="txtRalewayRomanSemiBold48"
                  >
                    Registration
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-black-900 flex flex-col items-center justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 py-2 w-full">
                      <div className="flex flex-row gap-8 items-center justify-start py-2 w-full">
                        <div className="flex flex-row gap-8 items-start justify-start w-auto">
                          <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[148px] py-[13px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                            create Account
                          </Button>
                          <div className="flex flex-col items-start justify-start p-2.5 w-auto">
                            <Text
                              className="capitalize text-base text-gray-500 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16"
                            >
                              my Contribution
                            </Text>
                          </div>
                        </div>
                        <Img
                          className="h-px w-px"
                          src="images/img_vector.svg"
                          alt="vector"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start max-w-7xl p-8 sm:px-5 rounded-lg w-full">
                <Text
                  className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20"
                >
                  Create Your Account
                </Text>
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
                        <div className="border border-solid border-white-A700_33 flex flex-col items-start justify-between px-4 py-2 rounded-lg w-full">
                          <Text
                            className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                            size="txtRalewayRomanSemiBold16WhiteA700"
                          >
                            xxxxx@gmail.com
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanSemiBold16WhiteA700e5"
                        >
                          github{" "}
                        </Text>
                        <Input
                          name="frame370927"
                          placeholder="ex. shiba"
                          className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                          wrapClassName="border border-solid border-white-A700_33 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
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
                          name="frame370928"
                          placeholder="token suply"
                          className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                          wrapClassName="border border-solid border-white-A700_33 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-full"
                        ></Input>
                      </div>
                      <Button className="bg-gradient1  capitalize cursor-pointer font-semibold min-w-[101px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
                        Register
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanSemiBold16WhiteA700e5"
                        >
                          Username
                        </Text>
                        <div className="border border-solid border-white-A700_33 flex flex-col items-start justify-start px-4 py-2 rounded-lg w-full">
                          <Text
                            className="capitalize text-base text-white-A700_4c tracking-[0.80px] w-auto"
                            size="txtRalewayRomanSemiBold16WhiteA7004c"
                          >
                            ex. shibainu
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanSemiBold16WhiteA700e5"
                        >
                          Wallet Address
                        </Text>
                        <Input
                          name="frame370928_One"
                          placeholder=""
                          className="p-0 w-full"
                          wrapClassName="border border-solid border-white-A700_33 flex h-10 rounded-lg w-full"
                        ></Input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-black-900_01 flex flex-col inset-x-[0] items-center justify-center max-w-[680px] mx-auto p-8 sm:px-5 rounded-[16px] top-[1%] w-full">
            <div className="flex flex-col items-start justify-center pb-8 pt-2 w-full">
              <div className="flex flex-row gap-2.5 items-start justify-between w-full">
                <Text
                  className="capitalize text-green-400 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20Green400"
                >
                  Account created succesfully
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_carbonclosefilled.svg"
                  alt="carbonclosefill"
                />
              </div>
            </div>
            <div className="flex flex-col gap-8 items-end justify-start w-auto md:w-full">
              <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA700e5"
                    >
                      name
                    </Text>
                    <Input
                      name="financeCounter"
                      placeholder="finance 1"
                      className="capitalize font-semibold p-0 placeholder:text-white-A700_e5 sm:pr-5 text-base text-left text-white-A700_e5 tracking-[0.80px] w-full"
                      wrapClassName="border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA700e5"
                    >
                      Github
                    </Text>
                    <Input
                      name="frame370928_Two"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="border border-solid border-white-A700_19 flex h-[42px] rounded-lg w-full"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA700e5"
                    >
                      Wallet Address
                    </Text>
                    <Input
                      name="frame370927_One"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="border border-solid border-white-A700_19 flex h-[42px] rounded-lg w-full"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA700e5"
                    >
                      Email Address
                    </Text>
                    <Input
                      name="frame370927_Two"
                      placeholder="hfyg686hh"
                      className="capitalize font-inter font-semibold p-0 placeholder:text-white-A700_e5 text-base text-left text-white-A700_e5 tracking-[0.80px] w-full"
                      wrapClassName="border border-solid border-white-A700_19 flex px-4 py-2 rounded-lg w-[305px]"
                      suffix={
                        <Img
                          className="mt-auto mb-px h-6 ml-[35px]"
                          src="images/img_volume.svg"
                          alt="volume"
                        />
                      }
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <Button
                  className="common-pointer bg-gradient1  capitalize cursor-pointer font-semibold min-w-[128px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]"
                  onClick={() => navigate("/myaccountdeveloper")}
                >
                  My Account
                </Button>
                <Button className="border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[208px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
                  Find the opportunity
                </Button>
              </div>
            </div>
          </div>
        </div>
        <CreateTokenHomepageFooterexplorer className="bg-gray-900 flex flex-col font-inter gap-8 items-center justify-start max-w-[1440px] mt-[178px] md:px-10 px-20 sm:px-5 py-4 w-full" />
        <CreateTokenHomepageFooterexplorer className="bg-gray-900 flex flex-col font-inter gap-8 items-center justify-start max-w-[1440px] mt-[1390px] md:px-10 px-20 sm:px-5 py-4 w-full" />
      </div>
    </>
  );
};

export default AccountsuccesscontributorgeneraluserPage;
