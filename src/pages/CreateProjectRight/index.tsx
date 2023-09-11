import React from "react";

import { Button, Img, List, Text } from "components";
import CreateProjectRightRowframe370831 from "components/CreateProjectRightRowframe370831";
import CreateTokenHomepageFooterexplorer from "components/CreateTokenHomepageFooterexplorer";

const CreateProjectRightPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway gap-8 items-start justify-end mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="h-[1002px] md:h-[626px] md:px-5 relative w-full">
            <div className="absolute md:h-[626px] h-[897px] inset-x-[0] mx-auto top-[0] w-full">
              <div className="absolute flex flex-col gap-[22px] inset-x-[0] items-center justify-start mx-auto top-[9%] w-[97%]">
                <div className="flex relative w-full">
                  <div className="flex flex-col items-center justify-start my-auto w-[61%]">
                    <Img
                      className="h-[600px] md:h-auto object-cover w-full"
                      src="images/img_fixdesignanimation.png"
                      alt="fixdesignanimat"
                    />
                  </div>
                  <div className="flex flex-col gap-8 items-center justify-center max-w-[660px] ml-[-115px] mt-[53px] px-4 py-20 w-full z-[1]">
                    <Text
                      className="capitalize leading-[140.00%] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px]"
                      size="txtRalewayRomanSemiBold48"
                    >
                      <>
                        Explore all the
                        <br />
                        No-Code Templates
                      </>
                    </Text>
                    <Text
                      className="leading-[160.00%] max-w-[628px] md:max-w-full text-white-A700 text-xl tracking-[1.00px]"
                      size="txtRalewayRomanSemiBold20WhiteA700"
                    >
                      Create your decentralized application effortlessly,
                      tailored to your preferences and built your way.
                    </Text>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-row h-1 items-center justify-center w-[1%] md:w-full"
                  style={{ backgroundImage: "url('images/img_group11.svg')" }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex flex-row h-1 items-center justify-evenly w-full"
                    style={{ backgroundImage: "url('images/img_group11.svg')" }}
                  >
                    <Img
                      className="h-1"
                      src="images/img_group11.svg"
                      alt="vector"
                    />
                  </div>
                </div>
              </div>
              <Img
                className="absolute bottom-[0] h-[534px] object-cover right-[0] rounded-[16px]"
                src="images/img_polygon2.png"
                alt="polygonTwo"
              />
              <Img
                className="absolute h-[231px] left-[0] object-cover rounded-[16px] top-[0]"
                src="images/img_polygon1.png"
                alt="polygonOne"
              />
            </div>
            <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-16 inset-x-[0] items-center justify-start max-w-[1429px] mx-auto w-full">
              <div className="flex flex-col gap-8 items-center justify-start w-auto md:w-full">
                <div className="flex flex-col items-start justify-center max-w-[1429px] md:px-10 px-20 sm:px-5 w-full">
                  <Text
                    className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[2.00px] w-auto"
                    size="txtRalewayRomanSemiBold40"
                  >
                    Explore the no-code templates
                  </Text>
                </div>
                <Text
                  className="leading-[160.00%] max-w-[800px] md:max-w-full text-center text-white-A700 text-xl tracking-[1.00px]"
                  size="txtRalewayRomanSemiBold20WhiteA700"
                >
                  Discover the perfect fit from our verified collection of
                  no-code templates below. CodeX provides four programming
                  levels to suit your needs:
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-4 items-start justify-end w-auto sm:w-full">
                <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[55px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                  all
                </Button>
                <Button className="bg-black-900_01 capitalize cursor-pointer font-semibold min-w-[92px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                  level 0
                </Button>
                <Button className="bg-black-900_01 capitalize cursor-pointer font-semibold min-w-[90px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                  level 1
                </Button>
                <Button className="bg-black-900_01 capitalize cursor-pointer font-semibold min-w-[91px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                  level 2
                </Button>
                <Button className="bg-black-900_01 capitalize cursor-pointer font-semibold min-w-[91px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                  level 3
                </Button>
              </div>
            </div>
            <CreateProjectRightRowframe370831 className="absolute bg-black-900_cc flex md:flex-col flex-row md:gap-10 inset-x-[0] items-center justify-between max-w-[1440px] mx-auto md:px-10 px-20 sm:px-5 top-[0] w-full" />
          </div>
        </div>
        <div className="flex flex-col items-end md:px-10 sm:px-5 px-[63px] w-full">
          <div className="flex flex-col items-center justify-end py-[3px]">
            <a
              href="javascript:"
              className="capitalize text-base text-light_blue-500 tracking-[0.80px]"
            >
              <Text size="txtRalewayRomanSemiBold16Lightblue500">see all</Text>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="flex h-[1602px] sm:h-[1640px] md:h-[3012px] justify-end max-w-[1424px] mx-auto md:px-5 relative w-full">
            <Img
              className="h-[639px] mb-[326px] mt-auto object-cover rounded-[16px]"
              src="images/img_polygon2.png"
              alt="polygonThree"
            />
            <div className="absolute flex flex-col gap-8 h-full inset-[0] items-center justify-start m-auto max-w-[1424px] md:px-10 px-20 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="gap-16 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="bg-black-900_01 flex flex-1 flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-full">
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <Text
                        className="bg-gradient  capitalize flex h-12 items-center justify-center rounded-[50%] text-base text-center text-white-A700 tracking-[0.80px] w-12"
                        size="txtRalewayRomanSemiBold16WhiteA700"
                      >
                        TG0
                      </Text>
                      <div className="flex flex-col gap-[9px] items-start justify-start w-auto">
                        <Text
                          className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                          size="txtRalewayRomanSemiBold24"
                        >
                          Token Generator
                        </Text>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanMedium16WhiteA700e5"
                        >
                          Level 0 (No-Code)
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
                    >
                      <>
                        CodeX&#39;s no-code platform enables effortless creation
                        of custom tokens and cryptocurrencies without coding,
                        allowing users to tokenize assets and launch digital
                        currencies easily.
                      </>
                    </Text>
                  </div>
                  <div className="bg-black-900_01 flex flex-1 flex-col gap-4 h-[222px] md:h-auto items-start justify-start p-8 sm:px-5 rounded-lg w-full">
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <Text
                        className="bg-gradient  capitalize flex h-12 items-center justify-center rounded-[50%] text-base text-center text-white-A700 tracking-[0.80px] w-12"
                        size="txtRalewayRomanSemiBold16WhiteA700"
                      >
                        DAO0
                      </Text>
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <Text
                          className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                          size="txtRalewayRomanSemiBold24"
                        >
                          DAO
                        </Text>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanMedium16WhiteA700e5"
                        >
                          Level 0 (No-Code)
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
                    >
                      CodeX: No-code DAO creation. Empower self-governed
                      communities effortlessly.
                    </Text>
                  </div>
                  <div className="bg-black-900_01 flex flex-1 flex-col h-[222px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-row gap-4 items-center justify-start w-auto">
                        <Text
                          className="bg-gradient  capitalize flex h-12 items-center justify-center rounded-[50%] text-base text-center text-white-A700 tracking-[0.80px] w-12"
                          size="txtRalewayRomanSemiBold16WhiteA700"
                        >
                          M0
                        </Text>
                        <div className="flex flex-col gap-[9px] items-start justify-start w-auto">
                          <Text
                            className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                            size="txtRalewayRomanSemiBold24"
                          >
                            Mint NFT
                          </Text>
                          <Text
                            className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                            size="txtRalewayRomanMedium16WhiteA700e5"
                          >
                            Level 0 (No-Code)
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                        size="txtRalewayRomanRegular16"
                      >
                        CodeX: No-code NFT minting. Create unique digital assets
                        effortlessly.
                      </Text>
                    </div>
                  </div>
                  <div className="bg-black-900_01 flex flex-1 flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-full">
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <Text
                        className="bg-gradient  capitalize flex h-12 items-center justify-center rounded-[50%] text-base text-center text-white-A700 tracking-[0.80px] w-12"
                        size="txtRalewayRomanSemiBold16WhiteA700"
                      >
                        SW0
                      </Text>
                      <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                        <Text
                          className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                          size="txtRalewayRomanSemiBold24"
                        >
                          Launchpad
                        </Text>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanMedium16WhiteA700e5"
                        >
                          Level 0 (No-Code)
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
                    >
                      CodeX enables the creation of decentralized applications
                      (DApps) without coding, offering a no-code platform for
                      effortless development.
                    </Text>
                  </div>
                </div>
              </div>
              <List
                className="flex flex-col gap-8 items-center max-w-[1424px] md:px-10 px-20 sm:px-5 w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="gap-16 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="bg-black-900_01 flex flex-1 flex-col h-[222px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-row gap-4 items-center justify-start w-auto">
                          <Text
                            className="bg-gradient  capitalize flex h-12 items-center justify-center rounded-[50%] text-base text-center text-white-A700 tracking-[0.80px] w-12"
                            size="txtRalewayRomanSemiBold16WhiteA700"
                          >
                            CNS
                          </Text>
                          <div className="flex flex-col gap-[9px] items-start justify-start w-auto">
                            <Text
                              className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                              size="txtRalewayRomanSemiBold24"
                            >
                              CodeX Name Service
                            </Text>
                            <Text
                              className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanMedium16WhiteA700e5"
                            >
                              Level 0 (No-Code)
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                          size="txtRalewayRomanMedium16WhiteA700e5"
                        >
                          Effortlessly create no-code name services for B2B and
                          B2C needs. Just fill a form and deploy, whether as an
                          individual or franchise. Unveil the future with CodeX!
                        </Text>
                      </div>
                    </div>
                    <div className="bg-black-900_01 flex flex-1 flex-col gap-4 h-[222px] md:h-auto items-start justify-start p-8 sm:px-5 rounded-lg w-full">
                      <div className="flex flex-row gap-4 items-center justify-start w-auto">
                        <Text
                          className="bg-gradient  capitalize flex h-12 items-center justify-center rounded-[50%] text-base text-center text-white-A700 tracking-[0.80px] w-12"
                          size="txtRalewayRomanSemiBold16WhiteA700"
                        >
                          DAO1
                        </Text>
                        <div className="flex flex-col gap-2 items-start justify-start w-auto">
                          <Text
                            className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                            size="txtRalewayRomanSemiBold24"
                          >
                            DAO
                          </Text>
                          <Text
                            className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                            size="txtRalewayRomanMedium16WhiteA700e5"
                          >
                            Level 1 (Flow)
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                        size="txtRalewayRomanRegular16"
                      >
                        CodeX enables effortless no-code development of DAO.
                        Expand functionality without coding using Flow.
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-1 flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-full">
                      <div className="flex flex-row gap-4 items-center justify-start w-auto">
                        <Text
                          className="bg-gradient  capitalize flex h-12 items-center justify-center rounded-[50%] text-base text-center text-white-A700 tracking-[0.80px] w-12"
                          size="txtRalewayRomanSemiBold16WhiteA700"
                        >
                          L1
                        </Text>
                        <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                          <Text
                            className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                            size="txtRalewayRomanSemiBold24"
                          >
                            Launchpad
                          </Text>
                          <Text
                            className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                            size="txtRalewayRomanMedium16WhiteA700e5"
                          >
                            Level 1 (flow)
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                        size="txtRalewayRomanRegular16"
                      >
                        CodeX enables effortless no-code development of
                        decentralized applications (DApps). Expand functionality
                        without coding using Flow.
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-1 flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-full">
                      <div className="flex flex-row gap-4 items-center justify-start w-auto">
                        <Text
                          className="bg-gradient  capitalize flex h-12 items-center justify-center rounded-[50%] text-base text-center text-white-A700 tracking-[0.80px] w-12"
                          size="txtRalewayRomanSemiBold16WhiteA700"
                        >
                          SW1
                        </Text>
                        <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                          <Text
                            className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                            size="txtRalewayRomanSemiBold24"
                          >
                            Swap
                          </Text>
                          <Text
                            className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                            size="txtRalewayRomanMedium16WhiteA700e5"
                          >
                            Level 1 (Flow)
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                        size="txtRalewayRomanRegular16"
                      >
                        <>
                          Create your swap DApp effortlessly using CodeX&#39;s
                          intuitive no-code platform. If the provided template
                          doesn&#39;t meet your requirements, seamlessly enhance
                          its functionality by utilizing Flow&#39;s
                          plug-and-drop capabilities.
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start max-w-[1424px] my-0 md:px-10 px-20 sm:px-5 w-full">
                  <div className="gap-16 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="bg-black-900_01 flex flex-1 flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-full">
                      <div className="flex flex-row gap-4 items-center justify-start w-auto">
                        <Text
                          className="bg-gradient  capitalize flex h-12 items-center justify-center rounded-[50%] text-base text-center text-white-A700 tracking-[0.80px] w-12"
                          size="txtRalewayRomanSemiBold16WhiteA700"
                        >
                          DEX1
                        </Text>
                        <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                          <Text
                            className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                            size="txtRalewayRomanSemiBold24"
                          >
                            DEX
                          </Text>
                          <Text
                            className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                            size="txtRalewayRomanMedium16WhiteA700e5"
                          >
                            Level 2 (Compiler Translation)
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                        size="txtRalewayRomanRegular16"
                      >
                        <>
                          Don&#39;t worry if you can&#39;t find your preferred
                          programming language on CodeX for building your DEX.
                          Submit a pull request to our veteran developers, and
                          they will help translate the language according to
                          your needs.
                        </>
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-1 flex-col gap-4 h-[274px] md:h-auto items-start justify-start p-8 sm:px-5 rounded-lg w-full">
                      <div className="flex flex-row gap-4 items-center justify-start w-auto">
                        <Text
                          className="bg-gradient  capitalize flex h-12 items-center justify-center rounded-[50%] text-base text-center text-white-A700 tracking-[0.80px] w-12"
                          size="txtRalewayRomanSemiBold16WhiteA700"
                        >
                          DEX3
                        </Text>
                        <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                          <Text
                            className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                            size="txtRalewayRomanSemiBold24"
                          >
                            DEX
                          </Text>
                          <Text
                            className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                            size="txtRalewayRomanMedium16WhiteA700e5"
                          >
                            Level 3 (Library)
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                        size="txtRalewayRomanRegular16"
                      >
                        CodeX offers a collaborative environment where you can
                        submit pull requests to experienced veteran programmers
                        who will assist you in building a decentralized exchange
                        (DEX) effortlessly. Benefit from their expertise to
                        create a powerful DEX tailored to your specific needs.
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-1 flex-col h-[222px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-row gap-4 items-center justify-start w-auto">
                          <Text
                            className="bg-gradient  capitalize flex h-12 items-center justify-center rounded-[50%] text-base text-center text-white-A700 tracking-[0.80px] w-12"
                            size="txtRalewayRomanSemiBold16WhiteA700"
                          >
                            M2
                          </Text>
                          <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                            <Text
                              className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                              size="txtRalewayRomanSemiBold24"
                            >
                              Marketplace
                            </Text>
                            <Text
                              className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanMedium16WhiteA700e5"
                            >
                              Level2 (Compiler Translation)
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                          size="txtRalewayRomanRegular16"
                        >
                          Request language translation for your marketplace on
                          CodeX by submitting a pull request to our veteran
                          programmers
                        </Text>
                      </div>
                    </div>
                    <div className="bg-black-900_01 flex flex-1 flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-full">
                      <div className="flex flex-row gap-4 items-center justify-start w-auto">
                        <Text
                          className="bg-gradient  capitalize flex h-12 items-center justify-center rounded-[50%] text-base text-center text-white-A700 tracking-[0.80px] w-12"
                          size="txtRalewayRomanSemiBold16WhiteA700"
                        >
                          M3
                        </Text>
                        <div className="flex flex-col gap-2 items-start justify-start w-auto">
                          <Text
                            className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                            size="txtRalewayRomanSemiBold24"
                          >
                            Marketplace
                          </Text>
                          <Text
                            className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                            size="txtRalewayRomanMedium16WhiteA700e5"
                          >
                            Level 3 (library)
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                        size="txtRalewayRomanRegular16"
                      >
                        Build your marketplace on CodeX with the expertise of
                        our veteran programmers. Simply submit a pull request to
                        collaborate with them and bring your vision to life.
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row font-inter sm:gap-5 items-start justify-start mt-[38px] md:px-5 px-[3px] w-2/5 md:w-full">
            <Button className="border border-solid border-white-A700_37 flex h-8 items-center justify-center p-2.5 rounded-[12px] w-8">
              <Img
                className="h-2.5"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            </Button>
            <Button className="border border-solid border-white-A700_37 flex h-8 items-center justify-center ml-1.5 sm:ml-[0] p-[11px] rounded-[12px] w-8">
              <Img src="images/img_arrowleft.svg" alt="arrowleft" />
            </Button>
            <Button className="bg-white-A700_28 border border-solid border-white-A700_3a cursor-pointer h-8 ml-1.5 sm:ml-[0] py-[7px] rounded-[12px] text-center text-gray-50 text-sm w-8">
              1
            </Button>
            <Button className="border border-solid border-white-A700_3a cursor-pointer h-8 ml-1.5 sm:ml-[0] py-[7px] rounded-[12px] text-center text-gray-50 text-sm w-8">
              2
            </Button>
            <Button className="border border-solid border-white-A700_3a cursor-pointer h-8 ml-1.5 sm:ml-[0] py-[7px] rounded-[12px] text-center text-gray-50 text-sm w-8">
              3
            </Button>
            <Button className="border border-solid border-white-A700_3a cursor-pointer h-8 ml-1.5 sm:ml-[0] py-[7px] rounded-[12px] text-center text-gray-50 text-sm w-8">
              4
            </Button>
            <Button className="border border-solid border-white-A700_3a cursor-pointer h-8 ml-1.5 sm:ml-[0] py-[7px] rounded-[12px] text-center text-gray-50 text-sm w-8">
              5
            </Button>
            <Button className="border border-solid border-white-A700_3a cursor-pointer h-8 ml-1.5 sm:ml-[0] py-[7px] rounded-[12px] text-center text-gray-50 text-sm w-8">
              6
            </Button>
            <Button className="border border-solid border-white-A700_3a cursor-pointer h-8 ml-1.5 sm:ml-[0] py-[7px] rounded-[12px] text-center text-gray-50 text-sm w-8">
              7
            </Button>
            <Button className="border border-solid border-white-A700_3a cursor-pointer h-8 ml-1.5 sm:ml-[0] py-[7px] rounded-[12px] text-center text-gray-50 text-sm w-8">
              8
            </Button>
            <Button className="border border-solid border-white-A700_3a cursor-pointer h-8 ml-1.5 sm:ml-[0] py-[7px] rounded-[12px] text-center text-gray-50 text-sm w-8">
              9
            </Button>
            <Button className="border border-solid border-white-A700_3a cursor-pointer h-8 ml-1.5 sm:ml-[0] py-[7px] rounded-[12px] text-center text-gray-50 text-sm w-8">
              10
            </Button>
            <Text
              className="ml-4 sm:ml-[0] sm:mt-0 mt-2.5 text-center text-gray-50 text-xs"
              size="txtInterRegular12Gray50"
            >
              …
            </Text>
            <Button className="border border-solid border-white-A700_3a flex h-8 items-center justify-center sm:ml-[0] ml-[17px] p-[11px] rounded-[12px] w-8">
              <Img src="images/img_arrowleft.svg" alt="arrowright_One" />
            </Button>
            <Button className="border border-solid border-white-A700_3a flex h-8 items-center justify-center ml-1.5 sm:ml-[0] p-2.5 rounded-[12px] w-8">
              <Img
                className="h-2.5"
                src="images/img_arrowright.svg"
                alt="arrowright_Two"
              />
            </Button>
          </div>
          <List
            className="flex flex-col font-inter gap-[1390px] items-center mt-[185px] w-full"
            orientation="vertical"
          >
            <CreateTokenHomepageFooterexplorer className="bg-gray-900 flex flex-1 flex-col gap-8 items-center justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 py-4 w-full" />
            <CreateTokenHomepageFooterexplorer className="bg-gray-900 flex flex-1 flex-col gap-8 items-center justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 py-4 w-full" />
          </List>
        </div>
      </div>
    </>
  );
};

export default CreateProjectRightPage;
