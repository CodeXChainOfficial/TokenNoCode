import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header2 from "components/Header2";

const ForumcodexaddnewtopicPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-center justify-start mx-auto w-full">
        <Header2 className="bg-black-900 flex md:flex-col md:gap-10 items-center justify-between px-20 md:px-5 w-full" />
        <div className="backdrop-opacity-[0.5] blur-[10.00px] flex flex-col gap-12 justify-start mt-8 w-full">
          <div className="h-[1775px] md:h-[3629px] md:px-5 relative w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
              <div className="flex flex-col gap-8 items-center justify-start w-full">
                <div className="bg-black-900 flex flex-col h-20 md:h-auto items-start justify-between max-w-[1438px] md:px-10 px-20 sm:px-5 py-4 w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex sm:flex-1 sm:flex-col flex-row gap-8 items-center justify-start w-auto sm:w-full">
                      <Button
                        className="bg-black-900 border border-solid border-white-A700_19 cursor-pointer flex items-center justify-center min-w-[231px] px-[31px] py-[11px] rounded-lg"
                        rightIcon={
                          <Img
                            className="h-6 mb-px ml-1"
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                      >
                        <div className="capitalize font-semibold sm:px-5 text-left text-white-A700_e5 text-xl tracking-[1.00px]">
                          all acategory
                        </div>
                      </Button>
                      <div className="bg-black-900 border border-solid border-white-A700_19 flex flex-row gap-1 items-center justify-start sm:px-5 px-8 py-2 rounded-lg w-auto">
                        <Text
                          className="capitalize text-white-A700_e5 text-xl tracking-[1.00px] w-auto"
                          size="txtRalewayRomanSemiBold20WhiteA700e5"
                        >
                          all tags
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-8 items-center justify-start w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <div className="bg-black-900 border border-solid border-white-A700_19 flex flex-row gap-1 items-center justify-start sm:px-5 px-8 py-2 rounded-lg w-auto">
                          <Text
                            className="capitalize text-white-A700_e5 text-xl tracking-[1.00px] w-auto"
                            size="txtRalewayRomanSemiBold20WhiteA700e5"
                          >
                            sort{" "}
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_sort.svg"
                            alt="sort"
                          />
                        </div>
                      </div>
                      <Button
                        className="bg-light_blue-500 cursor-pointer flex items-center justify-center min-w-[181px] px-4 py-[11px] rounded-lg"
                        rightIcon={
                          <Img
                            className="h-4 mb-[3px] ml-2.5"
                            src="images/img_frame_371439.svg"
                            alt="Frame 371439"
                          />
                        }
                      >
                        <div className="capitalize font-semibold text-base text-left text-white-A700 tracking-[0.80px]">
                          add new topic
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-8 items-start justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 w-full">
                  <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-[401px] sm:w-full">
                    <div className="flex flex-col items-center justify-start py-2 w-full">
                      <div className="border-b border-solid border-white-A700_4c flex flex-col items-start justify-start py-2 w-[401px] sm:w-full">
                        <Text
                          className="capitalize text-white-A700_e5 text-xl tracking-[1.00px] w-auto"
                          size="txtRalewayRomanSemiBold20WhiteA700e5"
                        >
                          category
                        </Text>
                      </div>
                    </div>
                    <div className="bg-black-900_01 border-blue-400 border-l-[10px] border-solid flex flex-col gap-4 items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Button className="capitalize cursor-pointer font-semibold min-w-[124px] py-3.5 rounded-lg text-center text-white-A700 text-xl tracking-[1.00px]">
                          Education
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
                      <Text
                        className="leading-[160.00%] max-w-[337px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                        size="txtRalewayRomanRegular16"
                      >
                        This category is for learning together. We invite
                        academics, researchers, and teachers to develop
                        educational opportunities for students of Aptos.
                      </Text>
                      <div className="flex flex-row gap-4 items-center justify-between w-full">
                        <div className="flex flex-row gap-4 items-start justify-start w-auto">
                          <Text
                            className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-700 text-xs tracking-[0.60px] w-auto"
                            size="txtRalewayRomanSemiBold12Blue700"
                          >
                            question
                          </Text>
                          <Text
                            className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-900 text-xs tracking-[0.60px] w-auto"
                            size="txtRalewayRomanSemiBold12Blue900"
                          >
                            resource
                          </Text>
                        </div>
                        <Button className="bg-black-900_01 flex h-6 items-center justify-center p-[7px] w-6">
                          <Img src="images/img_arrowup.svg" alt="arrowup" />
                        </Button>
                      </div>
                    </div>
                    <List
                      className="flex flex-col gap-4 items-center w-full"
                      orientation="vertical"
                    >
                      <div className="bg-black-900_01 border-l-[10px] border-orange-300 border-solid flex flex-1 flex-col gap-4 items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Button className="capitalize cursor-pointer font-semibold min-w-[94px] py-3.5 rounded-lg text-center text-white-A700 text-xl tracking-[1.00px]">
                            project
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
                        <Text
                          className="leading-[160.00%] max-w-[337px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                          size="txtRalewayRomanRegular16"
                        >
                          Discover the Aptos ecosystem! Use this category to
                          introduce projects, connect with our community, share
                          updates, ask questions, and openly discuss feedback.
                        </Text>
                        <Img
                          className="h-6 w-full"
                          src="images/img_arrowup_black_900_01.svg"
                          alt="arrowup"
                        />
                      </div>
                      <div className="bg-black-900_01 border-l-[10px] border-pink-300 border-solid flex flex-1 flex-col gap-4 items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Button className="capitalize cursor-pointer font-semibold min-w-[137px] py-3.5 rounded-lg text-center text-white-A700 text-xl tracking-[1.00px]">
                            suggestion
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
                        <Text
                          className="leading-[160.00%] max-w-[337px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                          size="txtRalewayRomanRegular16"
                        >
                          This category is about coordination. Community
                          feedback is crucial for ecosystem success, and we
                          strive to always be improving our communication
                          systems.
                        </Text>
                        <Img
                          className="h-6 w-full"
                          src="images/img_arrowup_black_900_01.svg"
                          alt="arrowup"
                        />
                      </div>
                      <div className="bg-black-900_01 border-deep_purple-A200 border-l-[10px] border-solid flex flex-1 flex-col gap-4 items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full">
                        <div className="flex flex-row gap-4 items-center justify-between w-full">
                          <Button className="capitalize cursor-pointer font-semibold min-w-[195px] py-3.5 rounded-lg text-center text-white-A700 text-xl tracking-[1.00px]">
                            node operations
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
                        <Text
                          className="leading-[160.00%] max-w-[337px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                          size="txtRalewayRomanRegular16"
                        >
                          This category is about infrastructure. Here is a list
                          of Aptos Incentivized Testnet 2 (AIT-2) validator
                          profiles, where you may review details, ask questions,
                          and further discuss relevant issues.
                        </Text>
                        <div className="flex flex-row gap-4 items-center justify-between w-full">
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-deep_purple-900 text-xs tracking-[0.60px] w-auto"
                              size="txtRalewayRomanSemiBold12Deeppurple900"
                            >
                              AIT-2 Community Voting
                            </Text>
                          </div>
                          <Button className="bg-black-900_01 flex h-6 items-center justify-center p-[7px] w-6">
                            <Img src="images/img_arrowup.svg" alt="arrowup" />
                          </Button>
                        </div>
                      </div>
                      <div className="bg-black-900_01 border-green-400 border-l-[10px] border-solid flex flex-1 flex-col gap-4 items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Button className="capitalize cursor-pointer font-semibold min-w-[159px] py-3.5 rounded-lg text-center text-white-A700 text-xl tracking-[1.00px]">
                            development
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
                        <Text
                          className="leading-[160.00%] max-w-[337px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                          size="txtRalewayRomanRegular16"
                        >
                          This category is about building. Discuss the Move
                          language, ask technical questions, explore the Aptos
                          framework, and find resources.
                        </Text>
                        <div className="flex flex-row gap-4 items-center justify-between w-full">
                          <div className="flex flex-row gap-4 items-start justify-start w-auto">
                            <Text
                              className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-green-300 text-xs tracking-[0.60px] w-auto"
                              size="txtRalewayRomanSemiBold12Green300"
                            >
                              wallet
                            </Text>
                            <Text
                              className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-gray-500_02 text-xs tracking-[0.60px] w-auto"
                              size="txtRalewayRomanSemiBold12Gray50002"
                            >
                              move
                            </Text>
                          </div>
                          <Button className="bg-black-900_01 flex h-6 items-center justify-center p-[7px] w-6">
                            <Img src="images/img_arrowup.svg" alt="arrowup" />
                          </Button>
                        </div>
                      </div>
                    </List>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                    <div className="bg-black-900 border-b border-solid border-white-A700_4c flex flex-row sm:gap-10 items-start justify-between py-2 w-full">
                      <Text
                        className="capitalize text-white-A700_e5 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700e5"
                      >
                        Topic
                      </Text>
                      <div className="flex flex-row gap-12 items-start justify-start w-[270px]">
                        <div className="flex flex-col items-start justify-start px-4 w-auto">
                          <Text
                            className="capitalize text-white-A700_e5 text-xl tracking-[1.00px] w-auto"
                            size="txtRalewayRomanSemiBold20WhiteA700e5"
                          >
                            replies
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start px-4 w-auto">
                          <Text
                            className="capitalize text-white-A700_e5 text-xl tracking-[1.00px] w-auto"
                            size="txtRalewayRomanSemiBold20WhiteA700e5"
                          >
                            activity
                          </Text>
                        </div>
                      </div>
                    </div>
                    <List
                      className="flex flex-col gap-4 items-center pt-[85px] w-full"
                      orientation="vertical"
                    >
                      <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                        <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start w-12">
                            <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                              <Img
                                className="h-12 md:h-auto rounded-[50%] w-12"
                                src="images/img_image382_48x48.png"
                                alt="image382"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA700e5"
                            >
                              Curve’s New crvUSD Stablecoin Deployed To Ethereum
                              With $22 Million Minted
                            </Text>
                            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                              <div className="bg-black-900_01 flex flex-col items-start justify-start p-1 rounded w-auto">
                                <Text
                                  className="capitalize text-blue-400 text-xs tracking-[0.60px] w-auto"
                                  size="txtRalewayRomanSemiBold12Blue400"
                                >
                                  Education
                                </Text>
                              </div>
                              <div className="bg-black-900_01 flex flex-col items-start justify-start p-1 rounded w-auto">
                                <Text
                                  className="capitalize text-blue-900 text-xs tracking-[0.60px] w-auto"
                                  size="txtRalewayRomanSemiBold12Blue900"
                                >
                                  resource
                                </Text>
                              </div>
                              <div className="bg-black-900_01 flex flex-col items-start justify-start p-1 rounded w-auto">
                                <Text
                                  className="capitalize text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                                  size="txtRalewayRomanSemiBold12WhiteA700e5"
                                >
                                  community
                                </Text>
                              </div>
                              <div className="bg-black-900_01 flex flex-col items-start justify-start p-1 rounded w-auto">
                                <Text
                                  className="capitalize text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                                  size="txtRalewayRomanSemiBold12WhiteA700e5"
                                >
                                  learning
                                </Text>
                              </div>
                              <div className="bg-black-900_01 flex flex-col items-start justify-start p-1 rounded w-auto">
                                <Text
                                  className="capitalize text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                                  size="txtRalewayRomanSemiBold12WhiteA700e5"
                                >
                                  nodes
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16Lightblue500"
                        >
                          34k
                        </Text>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16WhiteA700e5"
                        >
                          8 min
                        </Text>
                      </div>
                      <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                        <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start w-12">
                            <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                              <Img
                                className="h-12 md:h-auto rounded-[50%] w-12"
                                src="images/img_image382_48x48.png"
                                alt="image382"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA700e5"
                            >
                              Curve’s New crvUSD Stablecoin Deployed To Ethereum
                              With $22 Million Minted
                            </Text>
                            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                              <Text
                                className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                                size="txtRalewayRomanSemiBold12Blue400"
                              >
                                Education
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
                        <Text
                          className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16Lightblue500"
                        >
                          34k
                        </Text>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16WhiteA700e5"
                        >
                          8 min
                        </Text>
                      </div>
                      <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                        <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start w-12">
                            <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                              <Img
                                className="h-12 md:h-auto rounded-[50%] w-12"
                                src="images/img_image382_48x48.png"
                                alt="image382"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA700e5"
                            >
                              Curve’s New crvUSD Stablecoin Deployed To Ethereum
                              With $22 Million Minted
                            </Text>
                            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                              <Text
                                className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                                size="txtRalewayRomanSemiBold12Blue400"
                              >
                                Education
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
                        <Text
                          className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16Lightblue500"
                        >
                          34k
                        </Text>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16WhiteA700e5"
                        >
                          8 min
                        </Text>
                      </div>
                      <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                        <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start w-12">
                            <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                              <Img
                                className="h-12 md:h-auto rounded-[50%] w-12"
                                src="images/img_image382_48x48.png"
                                alt="image382"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA700e5"
                            >
                              Curve’s New crvUSD Stablecoin Deployed To Ethereum
                              With $22 Million Minted
                            </Text>
                            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                              <Text
                                className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                                size="txtRalewayRomanSemiBold12Blue400"
                              >
                                Education
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
                        <Text
                          className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16Lightblue500"
                        >
                          34k
                        </Text>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16WhiteA700e5"
                        >
                          8 min
                        </Text>
                      </div>
                      <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                        <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start w-12">
                            <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                              <Img
                                className="h-12 md:h-auto rounded-[50%] w-12"
                                src="images/img_image382_48x48.png"
                                alt="image382"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA700e5"
                            >
                              Curve’s New crvUSD Stablecoin Deployed To Ethereum
                              With $22 Million Minted
                            </Text>
                            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                              <Text
                                className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                                size="txtRalewayRomanSemiBold12Blue400"
                              >
                                Education
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
                        <Text
                          className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16Lightblue500"
                        >
                          34k
                        </Text>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16WhiteA700e5"
                        >
                          8 min
                        </Text>
                      </div>
                      <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                        <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start w-12">
                            <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                              <Img
                                className="h-12 md:h-auto rounded-[50%] w-12"
                                src="images/img_image382_48x48.png"
                                alt="image382"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA700e5"
                            >
                              Curve’s New crvUSD Stablecoin Deployed To Ethereum
                              With $22 Million Minted
                            </Text>
                            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                              <Text
                                className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                                size="txtRalewayRomanSemiBold12Blue400"
                              >
                                Education
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
                        <Text
                          className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16Lightblue500"
                        >
                          34k
                        </Text>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16WhiteA700e5"
                        >
                          8 min
                        </Text>
                      </div>
                      <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                        <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start w-12">
                            <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                              <Img
                                className="h-12 md:h-auto rounded-[50%] w-12"
                                src="images/img_image382_48x48.png"
                                alt="image382"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA700e5"
                            >
                              Curve’s New crvUSD Stablecoin Deployed To Ethereum
                              With $22 Million Minted
                            </Text>
                            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                              <Text
                                className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                                size="txtRalewayRomanSemiBold12Blue400"
                              >
                                Education
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
                        <Text
                          className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16Lightblue500"
                        >
                          34k
                        </Text>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16WhiteA700e5"
                        >
                          8 min
                        </Text>
                      </div>
                      <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                        <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start w-12">
                            <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                              <Img
                                className="h-12 md:h-auto rounded-[50%] w-12"
                                src="images/img_image382_48x48.png"
                                alt="image382"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA700e5"
                            >
                              Curve’s New crvUSD Stablecoin Deployed To Ethereum
                              With $22 Million Minted
                            </Text>
                            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                              <Text
                                className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                                size="txtRalewayRomanSemiBold12Blue400"
                              >
                                Education
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
                        <Text
                          className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16Lightblue500"
                        >
                          34k
                        </Text>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16WhiteA700e5"
                        >
                          8 min
                        </Text>
                      </div>
                      <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                        <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start w-12">
                            <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                              <Img
                                className="h-12 md:h-auto rounded-[50%] w-12"
                                src="images/img_image382_48x48.png"
                                alt="image382"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA700e5"
                            >
                              Curve’s New crvUSD Stablecoin Deployed To Ethereum
                              With $22 Million Minted
                            </Text>
                            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                              <Text
                                className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                                size="txtRalewayRomanSemiBold12Blue400"
                              >
                                Education
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
                        <Text
                          className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16Lightblue500"
                        >
                          34k
                        </Text>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16WhiteA700e5"
                        >
                          8 min
                        </Text>
                      </div>
                      <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                        <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start w-12">
                            <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                              <Img
                                className="h-12 md:h-auto rounded-[50%] w-12"
                                src="images/img_image382_48x48.png"
                                alt="image382"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA700e5"
                            >
                              Curve’s New crvUSD Stablecoin Deployed To Ethereum
                              With $22 Million Minted
                            </Text>
                            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                              <Text
                                className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                                size="txtRalewayRomanSemiBold12Blue400"
                              >
                                Education
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
                        <Text
                          className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16Lightblue500"
                        >
                          34k
                        </Text>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16WhiteA700e5"
                        >
                          8 min
                        </Text>
                      </div>
                      <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                        <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start w-12">
                            <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                              <Img
                                className="h-12 md:h-auto rounded-[50%] w-12"
                                src="images/img_image382_48x48.png"
                                alt="image382"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA700e5"
                            >
                              Curve’s New crvUSD Stablecoin Deployed To Ethereum
                              With $22 Million Minted
                            </Text>
                            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                              <Text
                                className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                                size="txtRalewayRomanSemiBold12Blue400"
                              >
                                Education
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
                        <Text
                          className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16Lightblue500"
                        >
                          34k
                        </Text>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16WhiteA700e5"
                        >
                          8 min
                        </Text>
                      </div>
                      <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                        <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start w-12">
                            <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                              <Img
                                className="h-12 md:h-auto rounded-[50%] w-12"
                                src="images/img_image382_48x48.png"
                                alt="image382"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA700e5"
                            >
                              Curve’s New crvUSD Stablecoin Deployed To Ethereum
                              With $22 Million Minted
                            </Text>
                            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                              <Text
                                className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                                size="txtRalewayRomanSemiBold12Blue400"
                              >
                                Education
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
                        <Text
                          className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16Lightblue500"
                        >
                          34k
                        </Text>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16WhiteA700e5"
                        >
                          8 min
                        </Text>
                      </div>
                      <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                        <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start w-12">
                            <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                              <Img
                                className="h-12 md:h-auto rounded-[50%] w-12"
                                src="images/img_image382_48x48.png"
                                alt="image382"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA700e5"
                            >
                              Curve’s New crvUSD Stablecoin Deployed To Ethereum
                              With $22 Million Minted
                            </Text>
                            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                              <Text
                                className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                                size="txtRalewayRomanSemiBold12Blue400"
                              >
                                Education
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
                        <Text
                          className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16Lightblue500"
                        >
                          34k
                        </Text>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16WhiteA700e5"
                        >
                          8 min
                        </Text>
                      </div>
                      <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                        <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start w-12">
                            <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                              <Img
                                className="h-12 md:h-auto rounded-[50%] w-12"
                                src="images/img_image382_48x48.png"
                                alt="image382"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA700e5"
                            >
                              Curve’s New crvUSD Stablecoin Deployed To Ethereum
                              With $22 Million Minted
                            </Text>
                            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                              <Text
                                className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                                size="txtRalewayRomanSemiBold12Blue400"
                              >
                                Education
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
                        <Text
                          className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16Lightblue500"
                        >
                          34k
                        </Text>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16WhiteA700e5"
                        >
                          8 min
                        </Text>
                      </div>
                      <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                        <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start w-12">
                            <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                              <Img
                                className="h-12 md:h-auto rounded-[50%] w-12"
                                src="images/img_image382_48x48.png"
                                alt="image382"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA700e5"
                            >
                              Curve’s New crvUSD Stablecoin Deployed To Ethereum
                              With $22 Million Minted
                            </Text>
                            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                              <Text
                                className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                                size="txtRalewayRomanSemiBold12Blue400"
                              >
                                Education
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
                        <Text
                          className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16Lightblue500"
                        >
                          34k
                        </Text>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16WhiteA700e5"
                        >
                          8 min
                        </Text>
                      </div>
                      <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                        <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start w-12">
                            <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                              <Img
                                className="h-12 md:h-auto rounded-[50%] w-12"
                                src="images/img_image382_48x48.png"
                                alt="image382"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA700e5"
                            >
                              Curve’s New crvUSD Stablecoin Deployed To Ethereum
                              With $22 Million Minted
                            </Text>
                            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                              <Text
                                className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                                size="txtRalewayRomanSemiBold12Blue400"
                              >
                                Education
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
                        <Text
                          className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16Lightblue500"
                        >
                          34k
                        </Text>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16WhiteA700e5"
                        >
                          8 min
                        </Text>
                      </div>
                      <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                        <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start w-12">
                            <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                              <Img
                                className="h-12 md:h-auto rounded-[50%] w-12"
                                src="images/img_image382_48x48.png"
                                alt="image382"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA700e5"
                            >
                              Curve’s New crvUSD Stablecoin Deployed To Ethereum
                              With $22 Million Minted
                            </Text>
                            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                              <Text
                                className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                                size="txtRalewayRomanSemiBold12Blue400"
                              >
                                Education
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
                        <Text
                          className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16Lightblue500"
                        >
                          34k
                        </Text>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16WhiteA700e5"
                        >
                          8 min
                        </Text>
                      </div>
                      <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                        <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start w-12">
                            <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                              <Img
                                className="h-12 md:h-auto rounded-[50%] w-12"
                                src="images/img_image382_48x48.png"
                                alt="image382"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA700e5"
                            >
                              Curve’s New crvUSD Stablecoin Deployed To Ethereum
                              With $22 Million Minted
                            </Text>
                            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                              <Text
                                className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                                size="txtRalewayRomanSemiBold12Blue400"
                              >
                                Education
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
                        <Text
                          className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16Lightblue500"
                        >
                          34k
                        </Text>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16WhiteA700e5"
                        >
                          8 min
                        </Text>
                      </div>
                      <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                        <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start w-12">
                            <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                              <Img
                                className="h-12 md:h-auto rounded-[50%] w-12"
                                src="images/img_image382_48x48.png"
                                alt="image382"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA700e5"
                            >
                              Curve’s New crvUSD Stablecoin Deployed To Ethereum
                              With $22 Million Minted
                            </Text>
                            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                              <Text
                                className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                                size="txtRalewayRomanSemiBold12Blue400"
                              >
                                Education
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
                        <Text
                          className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16Lightblue500"
                        >
                          34k
                        </Text>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtInterSemiBold16WhiteA700e5"
                        >
                          8 min
                        </Text>
                      </div>
                    </List>
                  </div>
                  <div className="bg-white-A700_33 flex md:flex-1 flex-col items-center justify-start pb-[140px] rounded-sm w-[1%] md:w-full">
                    <Line className="bg-white-A700_33 h-[60px] rounded-sm w-1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-black-900_01 flex flex-col gap-4 inset-x-[0] items-start justify-center max-w-[779px] mx-auto p-4 rounded-[16px] top-[0] w-full">
              <div className="flex flex-col items-start justify-center pb-8 pt-2 px-2.5 w-full">
                <div className="flex flex-row gap-2.5 items-start justify-between w-full">
                  <Text
                    className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                    size="txtRalewayRomanSemiBold24"
                  >
                    add new topic
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_carbonclosefilled.svg"
                    alt="carbonclosefill"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center w-auto">
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <div className="flex flex-col items-center justify-start w-12">
                    <div className="flex flex-col items-start justify-start w-12">
                      <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image382_48x48.png"
                          alt="image382_One"
                        />
                      </div>
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
              <Input
                name="inputfieldtext"
                placeholder="Tittle....."
                className="capitalize font-semibold md:text-[22px] p-0 placeholder:text-white-A700_99 sm:pr-5 sm:text-xl text-2xl text-left text-white-A700_99 tracking-[1.20px] w-full"
                wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[35px] py-3 rounded-[16px] w-full"
              ></Input>
              <div className="flex sm:flex-col flex-row gap-8 items-center justify-start w-auto sm:w-full">
                <Button
                  className="bg-black-900 border border-solid border-white-A700_19 cursor-pointer flex items-center justify-center min-w-[245px] px-[31px] py-[11px] rounded-lg"
                  rightIcon={
                    <Img
                      className="h-6 mb-px ml-1"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                >
                  <div className="capitalize font-semibold sm:px-5 text-left text-white-A700_e5 text-xl tracking-[1.00px]">
                    add acategory
                  </div>
                </Button>
                <Button
                  className="bg-black-900 border border-solid border-white-A700_19 cursor-pointer flex items-center justify-center min-w-[187px] px-[31px] py-[11px] rounded-lg"
                  rightIcon={
                    <Img
                      className="h-6 mb-px ml-1"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                >
                  <div className="capitalize font-semibold sm:px-5 text-left text-white-A700_e5 text-xl tracking-[1.00px]">
                    add tags
                  </div>
                </Button>
              </div>
              <Img
                className="h-14 w-full"
                src="images/img_frame371443.svg"
                alt="frame371443"
              />
              <div className="flex flex-col gap-4 items-end justify-end w-auto md:w-full">
                <div className="bg-black-900_01 border border-solid border-white-A700_19 flex flex-col h-60 md:h-auto items-start justify-start max-w-[747px] px-4 py-2 rounded-[16px] w-full">
                  <Text
                    className="text-base text-white-A700_99 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanMedium16"
                  >
                    description.....
                  </Text>
                </div>
                <Button
                  className="common-pointer bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[68px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]"
                  onClick={() => navigate("/forumcodexalldetail")}
                >
                  post
                </Button>
              </div>
            </div>
          </div>
          <Button className="bg-deep_purple-A200 capitalize cursor-pointer font-semibold min-w-[105px] md:ml-[0] ml-[1245px] mr-[90px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
            see less
          </Button>
        </div>
        <Footer className="bg-gray-900 flex font-inter gap-8 items-center justify-center mt-[51px] px-20 md:px-5 py-4 w-full" />
      </div>
    </>
  );
};

export default ForumcodexaddnewtopicPage;
