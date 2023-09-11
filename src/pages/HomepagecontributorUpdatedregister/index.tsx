import React from "react";

import { Button, Img, Text } from "components";
import CreateTokenHomepageFooterexplorer from "components/CreateTokenHomepageFooterexplorer";
import Header from "components/Header";
import HomePageCodexAppColumnonboard from "components/HomePageCodexAppColumnonboard";

const HomepagecontributorUpdatedregisterPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-start justify-end mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="bg-black-900_cc flex md:flex-col md:gap-10 items-center justify-between px-20 md:px-5 w-full" />
        </div>
        <div className="backdrop-opacity-[0.5] blur-[10.00px] h-[600px] sm:h-[655px] md:px-5 relative w-[95%] md:w-full">
          <div className="flex m-auto w-full">
            <div className="flex flex-col items-center justify-start my-auto w-[62%]">
              <Img
                className="h-[600px] md:h-auto object-cover w-full"
                src="images/img_fixdesignanimation.png"
                alt="fixdesignanimat"
              />
            </div>
            <div className="flex flex-col gap-8 justify-center max-w-[660px] mb-[21px] ml-[-140px] mt-auto px-4 py-20 w-full z-[1]">
              <div
                className="bg-cover bg-no-repeat flex flex-row h-px items-center justify-start w-px"
                style={{ backgroundImage: "url('images/img_vector.svg')" }}
              >
                <div
                  className="bg-cover bg-no-repeat flex flex-row h-px items-center justify-evenly w-px"
                  style={{ backgroundImage: "url('images/img_vector.svg')" }}
                >
                  <Img
                    className="h-px w-px"
                    src="images/img_vector.svg"
                    alt="vector"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-8 items-start justify-start w-full">
                <Text
                  className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px] w-full"
                  size="txtRalewayRomanSemiBold48"
                >
                  Be a part of our journey
                </Text>
                <Text
                  className="leading-[160.00%] text-white-A700 text-xl tracking-[1.00px] w-full"
                  size="txtRalewayRomanSemiBold20WhiteA700"
                >
                  As a veteran programmer contributor, use your skills to
                  support the community by building infrastructure,
                  collaborating, guiding others, and sharing knowledge. Earn
                  recognition and rewards based on your valuable contributions.
                </Text>
                <div className="flex sm:flex-col flex-row gap-8 items-start justify-start w-auto sm:w-full">
                  <Button className="bg-gradient1  capitalize cursor-pointer font-semibold min-w-[240px] py-5 rounded-lg text-center text-white-A700 text-xl tracking-[1.00px]">
                    Current Bounties
                  </Button>
                  <Button className="border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[197px] py-5 rounded-lg text-center text-white-A700 text-xl tracking-[1.00px]">
                    Leaderboard
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-black-900_01 flex flex-col items-center justify-start max-w-[680px] p-8 sm:px-5 right-[22%] rounded-[16px] top-[7%] w-full">
            <div className="flex flex-col items-start justify-center pb-8 pt-2 w-full">
              <div className="flex flex-row gap-2.5 items-start justify-between w-full">
                <a
                  href="javascript:"
                  className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                >
                  <Text size="txtRalewayRomanSemiBold24">register</Text>
                </a>
                <Img
                  className="h-6 w-6"
                  src="images/img_carbonclosefilled.svg"
                  alt="carbonclosefill"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <Text
                className="text-base text-center text-white-A700 tracking-[0.80px] w-full"
                size="txtRalewayRomanRegular16WhiteA700"
              >
                You can choose to register as a Developer or a General User
              </Text>
              <div className="flex flex-row gap-8 items-start justify-center w-auto">
                <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[118px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                  developer
                </Button>
                <Button className="bg-green-400 capitalize cursor-pointer font-semibold min-w-[140px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                  general user
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-inter items-center mt-[145px] w-full">
          <div className="sm:h-[1323px] h-[580px] md:h-[869px] md:px-5 relative w-full">
            <div className="absolute bottom-[0] gap-[39px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 h-[533px] md:h-auto inset-x-[0] items-center justify-start mx-auto md:px-10 px-20 sm:px-5 w-auto">
              <HomePageCodexAppColumnonboard
                className="bg-black-900_01 flex flex-col gap-8 h-[533px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-full"
                editimage="images/img_edit.svg"
                one="1"
              />
              <div className="bg-black-900_01 flex flex-col gap-8 h-[533px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-row gap-4 items-start justify-between w-full">
                    <div className="bg-gradient  h-24 rounded-[16px] w-24"></div>
                    <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold h-12 py-[9px] rounded-bl-[50%] rounded-br-lg rounded-tl-lg rounded-tr-lg text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.20px] w-12">
                      2
                    </Button>
                  </div>
                  <div className="flex flex-col font-raleway gap-4 items-start justify-start w-auto">
                    <Text
                      className="capitalize leading-[140.00%] max-w-[332px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-white-A700_e5 tracking-[1.60px]"
                      size="txtRalewayRomanSemiBold32WhiteA700e5"
                    >
                      Find the Opportunity
                    </Text>
                    <Text
                      className="leading-[160.00%] max-w-[332px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
                    >
                      After registration, explore CodeX GitHub repository for
                      project opportunities, contribute to projects, engage in
                      forum discussions, help others with pull requests, and
                      review tasks for successful completion.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row font-raleway gap-8 items-start justify-start w-auto">
                  <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[87px] py-2 rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    github
                  </Button>
                  <Button className="bg-black-900_01 border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[85px] py-2 rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    forum
                  </Button>
                </div>
              </div>
              <HomePageCodexAppColumnonboard
                className="bg-black-900_01 flex flex-col gap-8 h-[533px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-full"
                editimage="images/img_edit.svg"
                one="3"
                registertext="Get reward"
              />
            </div>
            <CreateTokenHomepageFooterexplorer className="absolute bg-gray-900 flex flex-col gap-8 inset-x-[0] items-center justify-start max-w-[1440px] mx-auto md:px-10 px-20 sm:px-5 py-4 top-[0] w-full" />
          </div>
        </div>
        <Text
          className="capitalize md:ml-[0] ml-[475px] mt-24 md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.60px]"
          size="txtRalewayRomanSemiBold32WhiteA700"
        >
          the 4 level Programming{" "}
        </Text>
        <div className="flex flex-col font-raleway md:gap-10 gap-[174px] items-center mt-16 w-full">
          <div className="md:h-[1052px] sm:h-[560px] h-[586px] md:px-5 relative w-full">
            <Img
              className="absolute h-px left-[0] object-cover top-[20%]"
              src="images/img_polygon2.png"
              alt="polygonThree"
            />
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-start m-auto max-w-[1440px] md:px-10 px-20 sm:px-5 w-full">
              <div className="gap-16 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="bg-black-900_01 flex flex-1 flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Text
                      className="bg-light_blue-500 capitalize flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.20px] w-12"
                      size="txtRalewayRomanSemiBold24"
                    >
                      0
                    </Text>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                        size="txtRalewayRomanSemiBold24"
                      >
                        Level 0
                      </Text>
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanMedium16WhiteA700e5"
                      >
                        No Code based
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                    size="txtRalewayRomanRegular16"
                  >
                    The no-code level is perfect for non-technical users who
                    desire to build basic applications without coding. With
                    CodeX, you can create applications effortlessly by simply
                    filling out a form, choosing from a variety of pre-built
                    functionalities provided in the templates.
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-1 flex-col gap-4 h-[274px] md:h-auto items-start justify-start p-8 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Text
                      className="bg-light_blue-500 capitalize flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.20px] w-12"
                      size="txtRalewayRomanSemiBold24"
                    >
                      1
                    </Text>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                        size="txtRalewayRomanSemiBold24"
                      >
                        Level 1
                      </Text>
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanMedium16WhiteA700e5"
                      >
                        Flow
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                    size="txtRalewayRomanRegular16"
                  >
                    <>
                      The flow level is for creating complex applications with
                      multiple steps, decision-making, and integration with
                      external services. Use flowcharts to define the logical
                      structure, with each block representing a task or
                      decision. Customize your application&#39;s appearance, add
                      content, and define workflows easily.
                    </>
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-1 flex-col h-[248px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <Text
                        className="bg-light_blue-500 capitalize flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.20px] w-12"
                        size="txtRalewayRomanSemiBold24"
                      >
                        2
                      </Text>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                          size="txtRalewayRomanSemiBold24"
                        >
                          Level 2
                        </Text>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanMedium16WhiteA700e5"
                        >
                          Code Translator
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
                    >
                      Code translation converts source code from one programming
                      language to another seamlessly. Easily translate Solidity,
                      Rush, C, and more languages without starting from scratch.
                      The translated code can be converted to a flowchart in
                      Level 1.
                    </Text>
                  </div>
                </div>
                <div className="bg-black-900_01 flex flex-1 flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Text
                      className="bg-light_blue-500 capitalize flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.20px] w-12"
                      size="txtRalewayRomanSemiBold24"
                    >
                      3
                    </Text>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                        size="txtRalewayRomanSemiBold24"
                      >
                        Level 3
                      </Text>
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanMedium16WhiteA700e5"
                      >
                        Library
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                    size="txtRalewayRomanRegular16"
                  >
                    The library level is for developers creating reusable
                    components and modules. Write code for specific
                    functionality, package it as libraries to share with others,
                    and promote code reusability and collaboration.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <CreateTokenHomepageFooterexplorer className="bg-gray-900 flex flex-col font-inter gap-8 items-center justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 py-4 w-full" />
        </div>
      </div>
    </>
  );
};

export default HomepagecontributorUpdatedregisterPage;
