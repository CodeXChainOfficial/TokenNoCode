import React from "react";

import { Button, Img, Input, List, Text } from "components";
import LaunchpadRadiobutton from "components/LaunchpadRadiobutton";

const LaunchpadchoosewalletPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway sm:gap-10 md:gap-10 gap-[114px] justify-center mx-auto p-20 md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-center max-w-7xl mt-9 mx-auto w-full">
          <div className="sm:h-[1768px] h-[1964px] md:h-[2421px] relative w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
              <div className="flex flex-col gap-[37px] items-start justify-start w-full">
                <Text
                  className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px]"
                  size="txtRalewayRomanSemiBold48"
                >
                  LaunchPad
                </Text>
                <div className="backdrop-opacity-[0.5] bg-black-900_01 blur-[10.00px] flex flex-col gap-12 items-start justify-start max-w-7xl p-8 sm:px-5 rounded-lg w-full">
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
                              JPG, PNG, GIF, or SVG of no more than 3MB. We
                              recommend 1024x1024px.
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
                            <div className="bg-black-900_01 border border-solid border-white-A700_19 flex flex-col items-start justify-start px-4 py-2 rounded-lg w-full">
                              <Text
                                className="capitalize text-base text-white-A700_4c tracking-[0.80px] w-auto"
                                size="txtRalewayRomanSemiBold16WhiteA7004c"
                              >
                                connect your link/ wallet
                              </Text>
                            </div>
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
                            <div className="flex md:flex-col flex-row gap-8 items-start justify-start w-full">
                              <LaunchpadRadiobutton
                                className="bg-black-900_01 border border-solid border-white-A700_33 flex flex-1 flex-col gap-2 items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full"
                                tokenholders="Centralised"
                              />
                              <LaunchpadRadiobutton
                                className="bg-black-900_01 border border-solid border-white-A700_33 flex flex-1 flex-col gap-2 items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full"
                                tokenholders="dAO"
                              />
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
                              <LaunchpadRadiobutton
                                className="bg-black-900_01 border border-solid border-white-A700_33 flex flex-1 flex-col gap-2 items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full"
                                tokenholders="yes"
                              />
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
                                name="radiobuttonOne"
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
                                name="radiobuttonOne_One"
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
                              <Input
                                name="frame371198"
                                placeholder="Select chain"
                                className="capitalize font-semibold md:h-auto p-0 placeholder:text-white-A700 sm:h-auto sm:px-5 text-left text-white-A700 text-xl tracking-[1.00px] w-full"
                                wrapClassName="bg-light_blue-500 flex pl-8 pr-[35px] py-2 rounded-lg w-1/2"
                                prefix={
                                  <div className="h-12 mr-2 w-12 rounded-[50%]">
                                    <Img
                                      className="h-12 rounded-[24px] my-auto"
                                      src="images/img_camera.svg"
                                      alt="camera"
                                    />
                                  </div>
                                }
                              ></Input>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-black-900 flex flex-col gap-8 inset-x-[0] items-center justify-start mx-auto p-8 sm:px-5 rounded-lg shadow-bs1 top-[0] w-auto">
              <div className="flex flex-row gap-8 items-center justify-between w-full">
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-light_blue-500 tracking-[1.60px] w-auto"
                    size="txtRalewayRomanSemiBold32"
                  >
                    Select Blockchain
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_icroundclose.svg"
                  alt="icroundclose"
                />
              </div>
              <List
                className="sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 justify-start w-auto md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <div className="bg-light_blue-500 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                    <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                      <div className="h-12 md:h-[53px] relative rounded-[50%] w-12">
                        <div className="bg-black-900_01 h-[53px] m-auto w-[53px]"></div>
                        <Img
                          className="absolute h-[33px] inset-[0] justify-center m-auto object-cover w-[33px]"
                          src="images/img_codex11.png"
                          alt="codexEleven"
                        />
                      </div>
                    </div>
                    <Text
                      className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                      size="txtRalewayRomanSemiBold20WhiteA700"
                    >
                      codex mainnet
                    </Text>
                  </div>
                  <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                    <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_image400.png"
                        alt="image400"
                      />
                    </div>
                    <Text
                      className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                      size="txtRalewayRomanSemiBold20WhiteA700"
                    >
                      tron mainnet
                    </Text>
                  </div>
                  <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                    <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_image400_48x48.png"
                        alt="image400_One"
                      />
                    </div>
                    <Text
                      className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                      size="txtRalewayRomanSemiBold20WhiteA700"
                    >
                      etherium mainnet
                    </Text>
                  </div>
                  <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                    <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_image400_1.png"
                        alt="image400_Two"
                      />
                    </div>
                    <Text
                      className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                      size="txtRalewayRomanSemiBold20WhiteA700"
                    >
                      polygon mainnet
                    </Text>
                  </div>
                  <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                    <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_image400_2.png"
                        alt="image400_Three"
                      />
                    </div>
                    <Text
                      className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                      size="txtRalewayRomanSemiBold20WhiteA700"
                    >
                      arbritrum nova
                    </Text>
                  </div>
                  <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                    <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_image400_3.png"
                        alt="image400_Four"
                      />
                    </div>
                    <Text
                      className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                      size="txtRalewayRomanSemiBold20WhiteA700"
                    >
                      fantom opera mainnet
                    </Text>
                  </div>
                  <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                    <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_image400_4.png"
                        alt="image400_Five"
                      />
                    </div>
                    <Text
                      className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                      size="txtRalewayRomanSemiBold20WhiteA700"
                    >
                      kava
                    </Text>
                  </div>
                  <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                    <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_image400_5.png"
                        alt="image400_Six"
                      />
                    </div>
                    <Text
                      className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                      size="txtRalewayRomanSemiBold20WhiteA700"
                    >
                      moonbin mainnet
                    </Text>
                  </div>
                  <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                    <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_image400_6.png"
                        alt="image400_Seven"
                      />
                    </div>
                    <Text
                      className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                      size="txtRalewayRomanSemiBold20WhiteA700"
                    >
                      moonriver{" "}
                    </Text>
                  </div>
                  <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                    <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_image400_7.png"
                        alt="image400_Eight"
                      />
                    </div>
                    <Text
                      className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                      size="txtRalewayRomanSemiBold20WhiteA700"
                    >
                      optimism
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                    <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_image400_8.png"
                        alt="image400"
                      />
                    </div>
                    <Text
                      className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                      size="txtRalewayRomanSemiBold20WhiteA700"
                    >
                      arbritrum mainnet
                    </Text>
                  </div>
                  <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                    <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_image400_9.png"
                        alt="image400_One"
                      />
                    </div>
                    <Text
                      className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                      size="txtRalewayRomanSemiBold20WhiteA700"
                    >
                      avalanche mainnet
                    </Text>
                  </div>
                  <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                    <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_image400_10.png"
                        alt="image400_Two"
                      />
                    </div>
                    <Text
                      className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                      size="txtRalewayRomanSemiBold20WhiteA700"
                    >
                      BSC Mainnet
                    </Text>
                  </div>
                  <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                    <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_image400_11.png"
                        alt="image400_Three"
                      />
                    </div>
                    <Text
                      className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                      size="txtRalewayRomanSemiBold20WhiteA700"
                    >
                      cello
                    </Text>
                  </div>
                  <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                    <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_image400_12.png"
                        alt="image400_Four"
                      />
                    </div>
                    <Text
                      className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                      size="txtRalewayRomanSemiBold20WhiteA700"
                    >
                      cronos mainnet
                    </Text>
                  </div>
                  <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                    <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_image400_13.png"
                        alt="image400_Five"
                      />
                    </div>
                    <Text
                      className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                      size="txtRalewayRomanSemiBold20WhiteA700"
                    >
                      fuse
                    </Text>
                  </div>
                  <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                    <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_image400_14.png"
                        alt="image400_Six"
                      />
                    </div>
                    <Text
                      className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                      size="txtRalewayRomanSemiBold20WhiteA700"
                    >
                      gnosis
                    </Text>
                  </div>
                  <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                    <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_image400_15.png"
                        alt="image400_Seven"
                      />
                    </div>
                    <Text
                      className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                      size="txtRalewayRomanSemiBold20WhiteA700"
                    >
                      harmony
                    </Text>
                  </div>
                  <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                    <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_image400_16.png"
                        alt="image400_Eight"
                      />
                    </div>
                    <Text
                      className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                      size="txtRalewayRomanSemiBold20WhiteA700"
                    >
                      metis
                    </Text>
                  </div>
                  <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                    <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                      <Img
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        src="images/img_image400_17.png"
                        alt="image400_Nine"
                      />
                    </div>
                    <Text
                      className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                      size="txtRalewayRomanSemiBold20WhiteA700"
                    >
                      telos EVM
                    </Text>
                  </div>
                </div>
              </List>
              <div className="bg-black-900 flex flex-col gap-8 items-start justify-start rounded-lg shadow-bs1 w-auto md:w-full">
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20WhiteA700"
                  >
                    tesnet
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 justify-start w-auto md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-2 items-end justify-start w-auto">
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                      <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <div className="h-12 md:h-[53px] relative rounded-[50%] w-12">
                          <div className="bg-black-900_01 h-[53px] m-auto w-[53px]"></div>
                          <Img
                            className="absolute h-[33px] inset-[0] justify-center m-auto object-cover w-[33px]"
                            src="images/img_codex11.png"
                            alt="codexEleven"
                          />
                        </div>
                      </div>
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        codex testnet
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                      <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image400.png"
                          alt="image400"
                        />
                      </div>
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        tron testnet
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                      <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image400_10.png"
                          alt="image400_One"
                        />
                      </div>
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        BSC testNet
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                      <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image400_3.png"
                          alt="image400_Two"
                        />
                      </div>
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        fantom opera testNet
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                      <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image400_5.png"
                          alt="image400_Three"
                        />
                      </div>
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        moonbin testNet
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                      <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image400_9.png"
                          alt="image400"
                        />
                      </div>
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        avalanche testNet
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                      <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image400_12.png"
                          alt="image400_One"
                        />
                      </div>
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        cronos testNet
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                      <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image400_48x48.png"
                          alt="image400_Two"
                        />
                      </div>
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        etherium testNet
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                      <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image400_1.png"
                          alt="image400_Three"
                        />
                      </div>
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        mumbay testNet
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end max-w-7xl mb-[273px] mx-auto sm:px-5 px-6 w-full">
          <div className="flex flex-row gap-8 items-start justify-start w-auto">
            <Button className="border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[72px] py-[11px] rounded text-base text-center text-light_blue-500 tracking-[0.80px]">
              back
            </Button>
            <Button className="bg-gradient1  capitalize cursor-pointer font-semibold min-w-[70px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
              next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LaunchpadchoosewalletPage;
