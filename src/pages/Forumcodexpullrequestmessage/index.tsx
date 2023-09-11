import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header2 from "components/Header2";

const ForumcodexpullrequestmessagePage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-center justify-start mx-auto w-full">
        <Header2 className="bg-black-900 flex md:flex-col md:gap-10 items-center justify-between px-20 md:px-5 w-full" />
        <div className="flex md:flex-col flex-row gap-8 items-start justify-start max-w-[1440px] mt-8 md:px-10 px-20 sm:px-5 w-full">
          <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-[401px] sm:w-full">
            <div className="flex flex-col items-center justify-start py-2 w-full">
              <Text
                className="border-b border-solid border-white-A700_4c capitalize pb-[9px] sm:pr-5 pr-[35px] pt-3.5 text-white-A700_e5 text-xl tracking-[1.00px] w-[401px]"
                size="txtRalewayRomanSemiBold20WhiteA700e5"
              >
                category
              </Text>
            </div>
            <div className="bg-black-900_01 border-gray-700 border-l-[10px] border-solid flex flex-col gap-4 items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <Button className="capitalize cursor-pointer font-semibold min-w-[151px] py-3.5 rounded-lg text-center text-white-A700 text-xl tracking-[1.00px]">
                  pull request
                </Button>
                <Text
                  className="capitalize text-white-A700_e5 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20WhiteA700e5"
                >
                  <span className="text-light_blue-500 font-raleway text-left font-semibold">
                    9.1 k
                  </span>
                  <span className="text-white-A700_e5 font-raleway text-left font-semibold">
                    / week
                  </span>
                </Text>
              </div>
              <Img
                className="h-6 w-full"
                src="images/img_frame371370.svg"
                alt="frame371370"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
            <Text
              className="bg-black-900 border-b border-solid border-white-A700_4c capitalize justify-center pb-2.5 sm:pr-5 pr-[35px] pt-[13px] text-white-A700_e5 text-xl tracking-[1.00px] w-full"
              size="txtRalewayRomanSemiBold20WhiteA700e5"
            >
              Topic
            </Text>
            <div className="h-[1096px] md:h-[732px] p-4 relative w-full">
              <div className="absolute bg-black-900_01 flex flex-1 flex-col gap-2 h-full inset-[0] items-center justify-end m-auto p-4 w-full">
                <List
                  className="flex flex-col gap-2 items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-black-900_01 border-solid border-t border-white-A700_19 flex flex-1 flex-col gap-2 items-start justify-start md:pl-10 pl-12 sm:pl-5 pr-4 py-4 w-full">
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <div className="bg-white-A700_99 border border-solid border-white-A700 flex flex-col h-[42px] items-center justify-start rounded-[50%] w-[42px]">
                        <Img
                          className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                          src="images/img_image382_42x42.png"
                          alt="image382"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center w-auto">
                        <Text
                          className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                          size="txtRalewayRomanSemiBold20"
                        >
                          thomashaye88
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-full"
                      size="txtRalewayRomanMedium16WhiteA700e5"
                    >
                      up
                    </Text>
                    <div className="flex flex-row gap-12 items-center justify-start w-auto">
                      <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                        <Img
                          className="h-4 w-12"
                          src="images/img_bag.svg"
                          alt="bag"
                        />
                        <div className="flex flex-col items-center justify-start w-auto">
                          <Text
                            className="text-light_blue-500 text-xs tracking-[0.60px]"
                            size="txtRalewayRomanSemiBold12Lightblue500"
                          >
                            77
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-start w-auto">
                          <Text
                            className="text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                            size="txtRalewayRomanSemiBold12WhiteA700e5"
                          >
                            8 min
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-5 items-start justify-start w-full">
                      <Button
                        className="bg-black-900_01 cursor-pointer flex items-center justify-center min-w-[84px] px-4 py-[9px] rounded-lg"
                        leftIcon={
                          <Img
                            className="h-4 mr-2.5"
                            src="images/img_fluentthumblike28filled.svg"
                            alt="fluent:thumb-like-28-filled"
                          />
                        }
                      >
                        <div className="capitalize font-semibold text-left text-white-A700_e5 text-xs tracking-[0.60px]">
                          like
                        </div>
                      </Button>
                      <Button
                        className="bg-black-900_01 cursor-pointer flex items-center justify-center min-w-[93px] px-4 py-[9px] rounded-lg"
                        leftIcon={
                          <Img
                            className="h-4 mb-px mr-2.5"
                            src="images/img_fluentcomment16filled.svg"
                            alt="fluent:comment-16-filled"
                          />
                        }
                      >
                        <div className="capitalize font-semibold text-left text-white-A700_e5 text-xs tracking-[0.60px]">
                          reply
                        </div>
                      </Button>
                      <Button
                        className="bg-black-900_01 cursor-pointer flex items-center justify-center min-w-[100px] px-4 py-2 rounded-lg"
                        leftIcon={
                          <Img
                            className="h-4 mb-px mr-2.5"
                            src="images/img_frame_371432.svg"
                            alt="Frame 371432"
                          />
                        }
                      >
                        <div className="capitalize font-semibold text-left text-white-A700_e5 text-xs tracking-[0.60px]">
                          report
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-black-900_01 border-solid border-t border-white-A700_19 flex flex-1 flex-col gap-2 items-start justify-start md:pl-10 pl-12 sm:pl-5 pr-4 py-4 w-full">
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <div className="bg-white-A700_99 border border-solid border-white-A700 flex flex-col h-[42px] items-center justify-start rounded-[50%] w-[42px]">
                        <Img
                          className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                          src="images/img_image382_42x42.png"
                          alt="image382"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center w-auto">
                        <Text
                          className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                          size="txtRalewayRomanSemiBold20"
                        >
                          thomashaye88
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-full"
                      size="txtRalewayRomanMedium16WhiteA700e5"
                    >
                      up
                    </Text>
                    <div className="flex flex-row gap-12 items-center justify-start w-auto">
                      <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                        <Img
                          className="h-4 w-12"
                          src="images/img_bag.svg"
                          alt="bag"
                        />
                        <div className="flex flex-col items-center justify-start w-auto">
                          <Text
                            className="text-light_blue-500 text-xs tracking-[0.60px]"
                            size="txtRalewayRomanSemiBold12Lightblue500"
                          >
                            77
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-start w-auto">
                          <Text
                            className="text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                            size="txtRalewayRomanSemiBold12WhiteA700e5"
                          >
                            8 min
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-5 items-start justify-start w-full">
                      <Button
                        className="bg-black-900_01 cursor-pointer flex items-center justify-center min-w-[84px] px-4 py-[9px] rounded-lg"
                        leftIcon={
                          <Img
                            className="h-4 mr-2.5"
                            src="images/img_fluentthumblike28filled.svg"
                            alt="fluent:thumb-like-28-filled"
                          />
                        }
                      >
                        <div className="capitalize font-semibold text-left text-white-A700_e5 text-xs tracking-[0.60px]">
                          like
                        </div>
                      </Button>
                      <Button
                        className="bg-black-900_01 cursor-pointer flex items-center justify-center min-w-[93px] px-4 py-[9px] rounded-lg"
                        leftIcon={
                          <Img
                            className="h-4 mb-px mr-2.5"
                            src="images/img_fluentcomment16filled.svg"
                            alt="fluent:comment-16-filled"
                          />
                        }
                      >
                        <div className="capitalize font-semibold text-left text-white-A700_e5 text-xs tracking-[0.60px]">
                          reply
                        </div>
                      </Button>
                      <Button
                        className="bg-black-900_01 cursor-pointer flex items-center justify-center min-w-[100px] px-4 py-2 rounded-lg"
                        leftIcon={
                          <Img
                            className="h-4 mb-px mr-2.5"
                            src="images/img_frame_371432.svg"
                            alt="Frame 371432"
                          />
                        }
                      >
                        <div className="capitalize font-semibold text-left text-white-A700_e5 text-xs tracking-[0.60px]">
                          report
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-black-900_01 border-solid border-t border-white-A700_19 flex flex-1 flex-col gap-2 items-start justify-start md:pl-10 sm:pl-5 pl-[120px] pr-4 py-4 w-full">
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <div className="flex flex-col items-center justify-start w-12">
                        <div className="flex flex-col items-start justify-start w-12">
                          <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                            <Img
                              className="h-12 md:h-auto rounded-[50%] w-12"
                              src="images/img_image382_48x48.png"
                              alt="image382"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-center w-auto">
                        <Text
                          className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                          size="txtRalewayRomanSemiBold20"
                        >
                          jilly77
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-full"
                      size="txtRalewayRomanMedium16WhiteA700e5"
                    >
                      THANKS
                    </Text>
                    <div className="flex flex-row gap-12 items-center justify-start w-auto">
                      <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                        <Img
                          className="h-4 w-12"
                          src="images/img_bag.svg"
                          alt="bag"
                        />
                        <div className="flex flex-col items-center justify-start w-auto">
                          <Text
                            className="text-light_blue-500 text-xs tracking-[0.60px]"
                            size="txtRalewayRomanSemiBold12Lightblue500"
                          >
                            77
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-start w-auto">
                          <Text
                            className="text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                            size="txtRalewayRomanSemiBold12WhiteA700e5"
                          >
                            8 min
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-5 items-center justify-start w-full">
                      <Button
                        className="bg-black-900_01 cursor-pointer flex items-center justify-center min-w-[84px] px-4 py-[9px] rounded-lg"
                        leftIcon={
                          <Img
                            className="h-4 mr-2.5"
                            src="images/img_fluentthumblike28filled.svg"
                            alt="fluent:thumb-like-28-filled"
                          />
                        }
                      >
                        <div className="capitalize font-semibold text-left text-white-A700_e5 text-xs tracking-[0.60px]">
                          like
                        </div>
                      </Button>
                      <Button
                        className="bg-black-900_01 cursor-pointer flex items-center justify-center min-w-[93px] px-4 py-[9px] rounded-lg"
                        leftIcon={
                          <Img
                            className="h-4 mb-px mr-2.5"
                            src="images/img_fluentcomment16filled.svg"
                            alt="fluent:comment-16-filled"
                          />
                        }
                      >
                        <div className="capitalize font-semibold text-left text-white-A700_e5 text-xs tracking-[0.60px]">
                          reply
                        </div>
                      </Button>
                      <Img
                        className="h-6 w-6"
                        src="images/img_burgericon.svg"
                        alt="burgericon"
                      />
                    </div>
                  </div>
                </List>
                <div className="border border-light_blue-500 border-solid flex flex-col gap-4 items-start justify-start p-4 rounded-[16px] w-full">
                  <div className="flex flex-col items-start justify-center w-auto">
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <div className="flex flex-col h-[42px] items-center justify-start w-[42px]">
                        <div className="bg-white-A700_99 border border-solid border-white-A700 flex flex-col h-[42px] items-center justify-start rounded-[50%] w-[42px]">
                          <Img
                            className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                            src="images/img_image382_42x42.png"
                            alt="image382_One"
                          />
                        </div>
                      </div>
                      <Text
                        className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20"
                      >
                        me
                      </Text>
                    </div>
                  </div>
                  <div className="bg-black-900_01 border border-solid border-white-A700_19 flex flex-col items-center justify-start px-4 py-2 rounded-[16px] w-full">
                    <div className="flex flex-col items-start justify-center w-full">
                      <Text
                        className="text-base text-white-A700_99 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanMedium16"
                      >
                        Your reply......
                      </Text>
                      <Img
                        className="h-8 w-full"
                        src="images/img_frame371474.svg"
                        alt="frame371474"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-1 flex-col gap-2 inset-x-[0] items-start justify-start mx-auto top-[1%] w-full">
                <div className="flex flex-row gap-4 items-start justify-between w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <div className="flex flex-col items-center justify-start w-12">
                      <div className="flex flex-col items-start justify-start w-12">
                        <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                          <Img
                            className="h-12 md:h-auto rounded-[50%] w-12"
                            src="images/img_image382_48x48.png"
                            alt="image382_Two"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[5px] items-start justify-center w-auto">
                      <Text
                        className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20"
                      >
                        jilly77
                      </Text>
                      <Text
                        className="text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                        size="txtRalewayRomanRegular12"
                      >
                        created 22 may 2023
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-12 w-12"
                    src="images/img_burgericon.svg"
                    alt="burgericon"
                  />
                </div>
                <Text
                  className="capitalize text-white-A700 text-xl tracking-[1.00px] w-full"
                  size="txtRalewayRomanSemiBold20WhiteA700"
                >
                  {" "}
                  translate Vue to solidity
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-gray-700 text-xs tracking-[0.60px] w-auto"
                        size="txtRalewayRomanSemiBold12Gray700"
                      >
                        pull request
                      </Text>
                      <Text
                        className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-900 text-xs tracking-[0.60px] w-auto"
                        size="txtRalewayRomanSemiBold12Blue900"
                      >
                        resource
                      </Text>
                      <Text
                        className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                        size="txtRalewayRomanSemiBold12WhiteA700e5"
                      >
                        community
                      </Text>
                      <Text
                        className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                        size="txtRalewayRomanSemiBold12WhiteA700e5"
                      >
                        learning
                      </Text>
                      <Text
                        className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                        size="txtRalewayRomanSemiBold12WhiteA700e5"
                      >
                        nodes
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="border border-deep_purple-A200_7f border-solid flex flex-col items-start justify-start p-4 rounded-[16px] w-full">
                  <div className="flex sm:flex-col flex-row gap-1.5 items-center justify-start w-full">
                    <Img
                      className="h-4 w-4"
                      src="images/img_phlinkbold.svg"
                      alt="phlinkbold"
                    />
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanMedium16WhiteA700e5"
                      >
                        How to easily get the 10 badges. Goodluck!
                      </Text>
                    </div>
                    <Text
                      className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanMedium16Lightblue500"
                    >
                      and 7 others
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                    <Img
                      className="h-4 w-12"
                      src="images/img_bag.svg"
                      alt="bag"
                    />
                    <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                      <Text
                        className="capitalize text-white-A700_99 text-xs tracking-[0.60px] underline w-auto"
                        size="txtRalewayRomanSemiBold12WhiteA70099"
                      >
                        mark havert, john heughs, damien{" "}
                      </Text>
                      <Text
                        className="text-light_blue-500 text-xs tracking-[0.60px] w-auto"
                        size="txtRalewayRomanSemiBold12Lightblue500"
                      >
                        and 77 others
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-8 items-start justify-between sm:px-5 px-8 py-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-center w-auto">
                      <Text
                        className="capitalize text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                        size="txtRalewayRomanSemiBold12WhiteA700e5"
                      >
                        replies
                      </Text>
                      <Text
                        className="capitalize text-light_blue-500 text-xs tracking-[0.60px] w-auto"
                        size="txtRalewayRomanSemiBold12Lightblue500"
                      >
                        34k
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-center w-auto">
                      <Text
                        className="capitalize text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                        size="txtRalewayRomanSemiBold12WhiteA700e5"
                      >
                        views
                      </Text>
                      <Text
                        className="capitalize text-orange-300 text-xs tracking-[0.60px] w-auto"
                        size="txtRalewayRomanSemiBold12Orange300"
                      >
                        34k
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-center w-auto">
                      <Text
                        className="capitalize text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                        size="txtRalewayRomanSemiBold12WhiteA700e5"
                      >
                        activity
                      </Text>
                      <Text
                        className="capitalize text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                        size="txtRalewayRomanSemiBold12WhiteA700e5"
                      >
                        8 min
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-center w-auto">
                      <Text
                        className="capitalize text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                        size="txtRalewayRomanSemiBold12WhiteA700e5"
                      >
                        links
                      </Text>
                      <Text
                        className="capitalize text-green-400 text-xs tracking-[0.60px] w-auto"
                        size="txtRalewayRomanSemiBold12Green400"
                      >
                        8{" "}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-black-900_01 border-solid border-white-A700_19 border-y flex flex-row flex-wrap gap-5 items-start justify-between max-w-[799px] sm:px-5 px-8 py-2 w-full">
                  <Button
                    className="bg-black-900_01 cursor-pointer flex items-center justify-center min-w-[100px] px-4 py-[9px] rounded-lg"
                    leftIcon={
                      <Img
                        className="h-6 mr-2.5"
                        src="images/img_fluentthumblike28filled.svg"
                        alt="fluent:thumb-like-28-filled"
                      />
                    }
                  >
                    <div className="capitalize font-semibold text-base text-left text-white-A700_e5 tracking-[0.80px]">
                      like
                    </div>
                  </Button>
                  <Button
                    className="bg-black-900_01 cursor-pointer flex items-center justify-center min-w-[113px] px-4 py-2 rounded-lg"
                    leftIcon={
                      <Img
                        className="h-6 mb-px mr-2.5"
                        src="images/img_fluentcomment16filled.svg"
                        alt="fluent:comment-16-filled"
                      />
                    }
                  >
                    <div className="capitalize font-semibold text-base text-left text-white-A700_e5 tracking-[0.80px]">
                      reply
                    </div>
                  </Button>
                  <Button
                    className="bg-black-900_01 cursor-pointer flex items-center justify-center min-w-[113px] px-4 py-[9px] rounded-lg"
                    leftIcon={
                      <Img
                        className="h-6 mr-2.5"
                        src="images/img_search_white_a700.svg"
                        alt="search"
                      />
                    }
                  >
                    <div className="capitalize font-semibold text-base text-left text-white-A700_e5 tracking-[0.80px]">
                      share
                    </div>
                  </Button>
                  <Button
                    className="bg-black-900_01 cursor-pointer flex items-center justify-center min-w-[150px] px-4 py-[9px] rounded-lg"
                    leftIcon={
                      <Img
                        className="h-6 mr-2.5"
                        src="images/img_fluentthumblike28filled_white_a700.svg"
                        alt="fluent:thumb-like-28-filled"
                      />
                    }
                  >
                    <div className="capitalize font-semibold text-base text-left text-white-A700_e5 tracking-[0.80px]">
                      bookmark
                    </div>
                  </Button>
                  <Button
                    className="bg-black-900_01 cursor-pointer flex items-center justify-center min-w-[122px] px-4 py-2 rounded-lg"
                    leftIcon={
                      <Img
                        className="h-6 mb-px mr-2.5"
                        src="images/img_frame_371432.svg"
                        alt="Frame 371432"
                      />
                    }
                  >
                    <div className="capitalize font-semibold text-base text-left text-white-A700_e5 tracking-[0.80px]">
                      report
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700_33 flex md:flex-1 flex-col items-center justify-start pb-[140px] md:px-5 rounded-sm w-[1%] md:w-full">
            <Line className="bg-white-A700_33 h-[60px] rounded-sm w-1" />
          </div>
        </div>
        <Footer className="bg-gray-900 flex font-inter gap-8 items-center justify-center mt-[869px] px-20 md:px-5 py-4 w-full" />
      </div>
    </>
  );
};

export default ForumcodexpullrequestmessagePage;
