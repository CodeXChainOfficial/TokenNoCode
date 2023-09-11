import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import CreateTokenHomepageFooterexplorer from "components/CreateTokenHomepageFooterexplorer";
import Header from "components/Header";
import HomePageCodexAppColumnonboard from "components/HomePageCodexAppColumnonboard";

const HomepagecodexappPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway sm:gap-10 md:gap-10 gap-[1367px] items-center justify-end mx-auto w-full">
        <div className="md:h-[2285px] h-[2308px] md:px-5 relative w-full">
          <div className="flex flex-col h-full items-center justify-start mt-20 w-[59%]">
            <Img
              className="h-[600px] md:h-auto object-cover w-full"
              src="images/img_fixdesignanimation.png"
              alt="fixdesignanimat"
            />
          </div>
          <div className="absolute md:h-[2285px] h-[2308px] inset-[0] justify-center m-auto pb-[23px] w-full">
            <Img
              className="absolute h-[2285px] inset-[0] justify-center m-auto object-cover md:w-full"
              src="images/img_group370839.png"
              alt="group370839"
            />
            <Img
              className="absolute h-[3px] inset-x-[0] mx-auto top-[22%]"
              src="images/img_vector_deep_purple_300.svg"
              alt="vector"
            />
            <div className="absolute flex flex-col gap-8 justify-center max-w-[660px] px-4 py-20 right-[6%] top-[7%] w-full">
              <div className="flex flex-col gap-8 items-center justify-start">
                <Text
                  className="capitalize leading-[140.00%] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px] w-full"
                  size="txtRalewayRomanSemiBold48"
                >
                  Explore the No-Code World
                </Text>
                <Text
                  className="leading-[160.00%] text-white-A700 text-xl tracking-[1.00px] w-full"
                  size="txtRalewayRomanSemiBold20WhiteA700"
                >
                  Build your DApp, be part of Contributor and Veterans ,explore
                  communities, and find inspiration for your project all in one
                  place.
                </Text>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-row h-[3px] items-center justify-start w-[1%] md:w-full"
                style={{
                  backgroundImage:
                    "url('images/img_vector_deep_purple_300.svg')",
                }}
              >
                <Img
                  className="h-[3px]"
                  src="images/img_vector_deep_purple_300.svg"
                  alt="vector_One"
                />
              </div>
            </div>
            <div className="absolute flex flex-col md:gap-10 gap-[102px] inset-x-[0] items-end justify-start mx-auto top-[29%] w-[89%]">
              <List
                className="sm:flex-col flex-row gap-[39px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <HomePageCodexAppColumnonboard
                    className="common-pointer bg-black-900_01 flex flex-col gap-8 h-[459px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-[396px] sm:w-full"
                    onClick={() => navigate("/CreateProjectRight")}
                    registertext="Create your Project"
                    registerdescription="Mint tokens, NFTs or DApp, set parameters, and deploy your project on-chain in minutes with our no- code setup process."
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-black-900_01 flex flex-col gap-8 h-[459px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-[396px] sm:w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-24 items-start justify-start p-3.5 w-full"
                        style={{
                          backgroundImage: "url('images/img_group3.png')",
                        }}
                      >
                        <Img
                          className="h-[63px]"
                          src="images/img_ticket.svg"
                          alt="ticket"
                        />
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-auto">
                        <Text
                          className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700_e5 tracking-[1.60px] w-auto"
                          size="txtRalewayRomanSemiBold32WhiteA700e5"
                        >
                          Learn about CodeX
                        </Text>
                        <Text
                          className="leading-[160.00%] max-w-[332px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                          size="txtRalewayRomanRegular16"
                        >
                          Find inspiration and learn about Codex in our
                          education portal designed for builders at every stage
                          of the journey.
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-8 items-start justify-start w-auto">
                      <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[87px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                        github
                      </Button>
                      <Button className="bg-black-900_01 border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[85px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                        forum
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <HomePageCodexAppColumnonboard
                    className="common-pointer bg-black-900_01 flex flex-col gap-8 h-[459px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-[396px] sm:w-full"
                    onClick={() => navigate("/myaccountdeveloper")}
                    registertext="Be A Part"
                    
                  />
                </div>
              </List>
              <div className="flex flex-row sm:gap-10 items-end justify-between w-3/5 md:w-full">
                <Text
                  className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.60px]"
                  size="txtRalewayRomanSemiBold32WhiteA700"
                >
                  explore project
                </Text>
                <a
                  href="javascript:"
                  className="capitalize mb-0.5 mt-4 text-base text-light_blue-500 tracking-[0.80px]"
                >
                  <Text size="txtRalewayRomanSemiBold16Lightblue500">
                    see all
                  </Text>
                </a>
              </div>
            </div>
            <CreateTokenHomepageFooterexplorer className="absolute bg-gray-900 bottom-[1%] flex flex-col font-inter gap-8 inset-x-[0] items-center justify-start max-w-[1436px] mx-auto md:px-10 px-20 sm:px-5 py-4 w-full" />
            <div className="absolute bottom-[20%] flex flex-col font-raleway inset-x-[0] items-center justify-start max-w-[1440px] mx-auto md:px-10 px-20 sm:px-5 w-full">
              <div className="gap-16 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="bg-black-900_01 flex flex-1 flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-full"
              onClick={() => (window.location.href = " http://localhost:3003/daohomegenerator")}>

              
                
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
                    size="txtRalewayRomanRegular16"
                  >
                    Effortlessly create no-code name services for B2B and B2C
                    needs. Just fill a form and deploy, whether as an individual
                    or franchise. Unveil the future with CodeX!
                  </Text>
                </div>
                <div
                  className="common-pointer bg-black-900_01 flex flex-1 flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-full"
                  onClick={() => (window.location.href = " http://localhost:3000")}
                >
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
                <div
                  className="common-pointer bg-black-900_01 flex flex-1 flex-col h-[222px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-full"
                  onClick={() => navigate("/nocodenfthomepage")}
                >
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
                <div
                  className="common-pointer bg-black-900_01 flex flex-1 flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-full"
                  onClick={() => navigate("/launchpad")}
                >
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
            <div
              className="common-pointer absolute bg-black-900_01 bottom-[9%] flex flex-col font-raleway gap-4 items-start justify-start left-[26%] p-8 sm:px-5 rounded-lg w-[620px] md:w-full"
              onClick={() => navigate("/")}
            >
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
                  CodeX&#39;s no-code platform enables effortless creation of
                  custom tokens and cryptocurrencies without coding, allowing
                  users to tokenize assets and launch digital currencies easily.
                </>
              </Text>
            </div>
            <Header className="absolute bg-black-900_cc flex md:flex-col font-raleway md:gap-10 inset-x-[0] items-center justify-between mx-auto md:px-10 px-20 sm:px-5 top-[0] w-full" />
          </div>
        </div>
        <CreateTokenHomepageFooterexplorer className="bg-gray-900 flex flex-col font-inter gap-8 items-center justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 py-4 w-full" />
      </div>
    </>
  );
};

export default HomepagecodexappPage;
