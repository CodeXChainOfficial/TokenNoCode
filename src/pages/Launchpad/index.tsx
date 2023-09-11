import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import LaunchpadRadiobutton from "components/LaunchpadRadiobutton";

const LaunchpadPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-start justify-start mx-auto p-20 md:px-10 sm:px-5 w-full">
        <Text
          className="capitalize mt-9 text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px]"
          size="txtRalewayRomanSemiBold48"
        >
          LaunchPad
        </Text>
        <div className="flex flex-col items-center max-w-7xl mt-[37px] mx-auto w-full">
          <div className="bg-black-900_01 flex flex-col gap-12 items-start justify-start max-w-7xl p-8 sm:px-5 rounded-lg w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <Text
                className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                size="txtRalewayRomanSemiBold20"
              >
                LaunchPad Configurations
              </Text>
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <div className="flex flex-col items-start justify-start max-w-[1216px] w-full">
                  <div className="flex flex-col gap-4 items-end justify-end w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Name*
                      </Text>
                      <Input
                        name="inputfieldtext"
                        placeholder="name"
                        className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                        wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
                        type="text"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Logo
                      </Text>
                      <Text
                        className="text-base text-white-A700_99 tracking-[0.80px] w-full"
                        size="txtRalewayRomanMedium16"
                      >
                        JPG, PNG, GIF, or SVG of no more than 3MB. We recommend
                        1024x1024px.
                      </Text>
                      <div className="bg-white-A700_19 border border-dashed border-white-A700_e5 flex flex-col h-24 items-center justify-start p-10 sm:px-5 rounded-lg w-24">
                        <Img
                          className="h-4 w-[15px]"
                          src="images/img_minimize.svg"
                          alt="minimize"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Description
                      </Text>
                      <div className="border border-solid border-white-A700_33 flex flex-col h-[200px] md:h-auto items-start justify-start px-4 py-2 rounded-lg w-full">
                        <Text
                          className="capitalize text-base text-white-A700_4c tracking-[0.80px] w-auto"
                          size="txtRalewayRomanSemiBold16WhiteA7004c"
                        >
                          description
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Wallet
                      </Text>
                      <Input
                        name="language"
                        placeholder="connect  your link/ wallet"
                        className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                        wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <Text
                className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                size="txtRalewayRomanSemiBold20"
              >
                Select LaunchPad Settings
              </Text>
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <div className="flex flex-col items-start justify-start max-w-[1216px] w-full">
                  <div className="flex flex-col gap-4 items-end justify-end w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Select LaunchPad Settings
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-8 items-start justify-start w-full">
                        <Input
                          name="radiobuttonOne"
                          placeholder="Centralised"
                          className="capitalize font-semibold p-0 placeholder:text-white-A700 sm:px-5 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                          wrapClassName="bg-black-900_01 border border-solid border-white-A700_33 flex flex-1 px-8 py-[19px] rounded-lg w-full"
                          suffix={
                            <Img
                              className="h-4 ml-[35px] my-px"
                              src="images/img_contrast.svg"
                              alt="contrast"
                            />
                          }
                        ></Input>
                        <Input
                          name="radiobuttonOne_One"
                          placeholder="dAO"
                          className="capitalize font-semibold p-0 placeholder:text-white-A700 sm:px-5 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                          wrapClassName="bg-black-900_01 border border-solid border-white-A700_33 flex flex-1 px-8 py-[19px] rounded-lg w-full"
                          suffix={
                            <Img
                              className="h-4 ml-[35px] my-px"
                              src="images/img_contrast.svg"
                              alt="contrast"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Wallet Voting Power
                      </Text>
                      <div className="border-solid border-white-A700_19 border-y flex md:flex-col flex-row font-inter md:gap-10 gap-24 items-center justify-center py-4 w-full">
                        <div className="border border-solid border-white-A700_19 flex flex-col items-start justify-start px-4 py-2 rounded-lg w-auto">
                          <div className="flex flex-row gap-12 items-center justify-start w-auto">
                            <div className="bg-white-A700_19 flex flex-col h-12 items-center justify-start p-[21px] sm:px-5 rounded-lg w-12">
                              <div className="bg-white-A700 h-px my-0.5 w-[84%]"></div>
                            </div>
                            <Text
                              className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                              size="txtInterSemiBold16"
                            >
                              1
                            </Text>
                            <Button className="bg-white-A700_19 flex h-12 items-center justify-center p-5 rounded-lg w-12">
                              <Img
                                className="h-[7px]"
                                src="images/img_grid.svg"
                                alt="grid"
                              />
                            </Button>
                          </div>
                        </div>
                        <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-4 items-center justify-start w-auto sm:w-full">
                          <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[61px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                            yes
                          </Button>
                          <div className="flex flex-col font-inter items-center justify-center pb-4 w-auto sm:w-full">
                            <Text
                              className="capitalize text-white-A700 text-xs tracking-[0.60px] w-auto"
                              size="txtInterRegular12"
                            >
                              20%
                            </Text>
                            <div className="h-2 overflow-hidden relative w-full">
                              <div className="w-full h-full absolute bg-blue_gray_100 rounded-[4px]"></div>
                              <div
                                className="h-full absolute bg-light_blue_500  rounded-[4px]"
                                style={{ width: "25%" }}
                              ></div>
                            </div>
                          </div>
                          <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[55px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                            no
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Incubation Needed
                      </Text>
                      <div className="flex md:flex-col flex-row gap-8 items-start justify-start w-full">
                        <Input
                          name="radiobuttonOne_Two"
                          placeholder="yes"
                          className="capitalize font-semibold p-0 placeholder:text-white-A700 sm:px-5 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                          wrapClassName="bg-black-900_01 border border-solid border-white-A700_33 flex flex-1 px-8 py-[19px] rounded-lg w-full"
                          suffix={
                            <Img
                              className="h-4 ml-[35px] my-px"
                              src="images/img_contrast.svg"
                              alt="contrast"
                            />
                          }
                        ></Input>
                        <LaunchpadRadiobutton
                          className="bg-black-900_01 border border-solid border-white-A700_33 flex flex-1 flex-col gap-2 items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full"
                          tokenholders="no"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Generate Dashboard
                      </Text>
                      <Input
                        name="frame370928"
                        placeholder="selection"
                        className="capitalize font-semibold p-0 placeholder:text-white-A700 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                        wrapClassName="border border-solid border-white-A700_19 flex px-4 py-[9px] rounded-lg w-full"
                        suffix={
                          <Img
                            className="h-6 ml-[35px] my-auto"
                            src="images/img_bxsuparrow.svg"
                            alt="bxs:up-arrow"
                          />
                        }
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Milestone Needed?
                      </Text>
                      <div className="flex md:flex-col flex-row gap-8 items-start justify-start w-full">
                        <Input
                          name="radiobuttonOne_Three"
                          placeholder="yes"
                          className="capitalize font-semibold p-0 placeholder:text-white-A700 sm:px-5 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                          wrapClassName="bg-black-900_01 border border-solid border-white-A700_33 flex flex-1 px-8 py-[19px] rounded-lg w-full"
                          suffix={
                            <Img
                              className="h-4 ml-[35px] my-px"
                              src="images/img_contrast.svg"
                              alt="contrast"
                            />
                          }
                        ></Input>
                        <LaunchpadRadiobutton
                          className="bg-black-900_01 border border-solid border-white-A700_33 flex flex-1 flex-col gap-2 items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full"
                          tokenholders="no"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Choose Currency
                      </Text>
                      <Input
                        name="frame370928_One"
                        placeholder="native"
                        className="capitalize font-semibold p-0 placeholder:text-white-A700 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                        wrapClassName="border border-solid border-white-A700_19 flex px-4 py-[9px] rounded-lg w-full"
                        suffix={
                          <Img
                            className="h-6 ml-[35px] my-auto"
                            src="images/img_bxsuparrow.svg"
                            alt="bxs:up-arrow"
                          />
                        }
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Deploy on Selected
                      </Text>
                      <Input
                        name="inputfieldtext_One"
                        placeholder="network"
                        className="capitalize font-semibold p-0 placeholder:text-white-A700_99 sm:pr-5 text-base text-left text-white-A700_99 tracking-[0.80px] w-full"
                        wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        deploy option
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-8 items-start justify-start w-full">
                        <Input
                          name="language_One"
                          placeholder=" single-chain"
                          className="capitalize font-semibold p-0 placeholder:text-white-A700 sm:px-5 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                          wrapClassName="bg-black-900_01 border border-solid border-white-A700_33 flex flex-1 pb-[17px] pl-[35px] pr-8 pt-[21px] rounded-lg w-full"
                          suffix={
                            <Img
                              className="mt-auto mb-[3px] h-4 ml-[35px]"
                              src="images/img_contrast.svg"
                              alt="contrast"
                            />
                          }
                        ></Input>
                        <Input
                          name="radiobuttonOne_Four"
                          placeholder="multi-chain"
                          className="capitalize font-semibold p-0 placeholder:text-white-A700 sm:px-5 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                          wrapClassName="bg-black-900_01 border border-solid border-white-A700_33 flex flex-1 px-8 py-[19px] rounded-lg w-full"
                          suffix={
                            <Img
                              className="h-4 ml-[35px] my-px"
                              src="images/img_contrast.svg"
                              alt="contrast"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        chain selection
                      </Text>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Button
                          className="common-pointer bg-light_blue-500 cursor-pointer flex items-center justify-center min-w-[600px] md:min-w-full pl-8 pr-[35px] py-2 rounded-lg"
                          onClick={() => navigate("/launchpadchoosewallet")}
                          leftIcon={
                            <div className="h-12 mr-2 w-12 rounded-[50%]">
                              <Img
                                className="h-12 rounded-[24px]"
                                src="images/img_camera.svg"
                                alt="camera"
                              />
                            </div>
                          }
                        >
                          <div className="capitalize font-semibold sm:px-5 text-left text-white-A700 text-xl tracking-[1.00px]">
                            Select chain
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end max-w-7xl mb-[273px] mt-[114px] mx-auto sm:px-5 px-6 w-full">
          <div className="flex flex-row gap-8 items-start justify-start w-auto">
            <Button className="border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[72px] py-[11px] rounded text-base text-center text-light_blue-500 tracking-[0.80px]">
              back
            </Button>
            <Button
              className="common-pointer bg-gradient1  capitalize cursor-pointer font-semibold min-w-[70px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]"
              onClick={() => navigate("/launchpadresult")}
            >
              next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LaunchpadPage;
