import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

import "react-circular-progressbar/dist/styles.css";

const LaunchpadloadingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 font-raleway h-[1592px] mx-auto p-[76px] md:px-10 sm:px-5 relative w-full">
        <div className="absolute backdrop-opacity-[0.5] blur-[10.00px] flex flex-col gap-8 inset-x-[0] items-start justify-start max-w-[1284px] mx-auto top-[8%] w-full">
          <Text
            className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px]"
            size="txtRalewayRomanSemiBold48"
          >
            launchpad
          </Text>
          <div className="flex flex-col gap-4 items-start justify-start py-2 w-auto md:w-full">
            <Text
              className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.60px] w-auto"
              size="txtRalewayRomanSemiBold32WhiteA700"
            >
              autodeploy your launchpad
            </Text>
            <div className="flex flex-col items-start justify-start max-w-[1256px] py-2 w-full">
              <Text
                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                size="txtRalewayRomanMedium16WhiteA700e5"
              >
                Double-check that everything is correct{" "}
              </Text>
            </div>
          </div>
          <div className="font-inter md:h-[1360px] sm:h-[860px] h-[874px] relative w-full">
            <List
              className="absolute bg-black-900_01 flex flex-col gap-20 inset-[0] items-start m-auto p-8 sm:px-5 rounded-lg w-auto"
              orientation="vertical"
            >
              <div className="flex flex-col items-start justify-start max-w-[1216px] w-full">
                <div className="flex flex-col items-end justify-end w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-full">
                      <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-col font-raleway gap-4 items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="text-white-A700 text-xl tracking-[1.00px] w-auto"
                              size="txtRalewayRomanSemiBold20WhiteA700"
                            >
                              launchpad configuration
                            </Text>
                          </div>
                          <div className="flex md:flex-col flex-row md:gap-10 gap-40 items-start justify-between w-full">
                            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                              <Text
                                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                name{" "}
                              </Text>
                              <Text
                                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                logo
                              </Text>
                              <Text
                                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                description
                              </Text>
                              <Text
                                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                wallet
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                              <Text
                                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                name of launchpad
                              </Text>
                              <div className="bg-white-A700_19 border border-dashed border-white-A700_e5 flex flex-col items-start justify-start px-4 py-1 rounded-lg w-auto">
                                <Text
                                  className="capitalize text-sm text-white-A700 tracking-[0.70px] w-auto"
                                  size="txtRalewayRomanSemiBold14"
                                >
                                  logo.png
                                </Text>
                              </div>
                              <Text
                                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                description.........
                              </Text>
                              <Text
                                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                walletlink
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Button className="bg-green-400_7f capitalize cursor-pointer font-inter min-w-[175px] py-2.5 rounded-lg text-center text-white-A700_e5 text-xs tracking-[0.60px]">
                          These values are correct
                        </Button>
                      </div>
                      <Button className="bg-light_blue-500 capitalize cursor-pointer min-w-[56px] py-2.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                        edit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start max-w-[1216px] w-full">
                <div className="flex flex-col items-end justify-end w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-full">
                      <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-col font-raleway gap-4 items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="text-white-A700 text-xl tracking-[1.00px] w-auto"
                              size="txtRalewayRomanSemiBold20WhiteA700"
                            >
                              launchpad setting
                            </Text>
                          </div>
                          <div className="flex md:flex-col flex-row md:gap-10 gap-40 items-start justify-between w-full">
                            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                              <Text
                                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                launchpad setting
                              </Text>
                              <Text
                                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                wallet voting power
                              </Text>
                              <Text
                                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                incubation needed
                              </Text>
                              <Text
                                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                generate dashboard
                              </Text>
                              <Text
                                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                milestone needed
                              </Text>
                              <Text
                                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                currency
                              </Text>
                              <Text
                                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                selected deploy
                              </Text>
                              <Text
                                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                deploy option
                              </Text>
                              <Text
                                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                chain selection
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                              <Text
                                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                centralied
                              </Text>
                              <Text
                                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                1
                              </Text>
                              <Text
                                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                yes
                              </Text>
                              <Text
                                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                selected
                              </Text>
                              <Text
                                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                yes
                              </Text>
                              <Text
                                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                USDT
                              </Text>
                              <Text
                                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                network
                              </Text>
                              <Text
                                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                single chain
                              </Text>
                              <Text
                                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-full"
                                size="txtRalewayRomanMedium16WhiteA700e5"
                              >
                                codex mainnet
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Button className="bg-green-400_7f capitalize cursor-pointer font-inter min-w-[175px] py-2.5 rounded-lg text-center text-white-A700_e5 text-xs tracking-[0.60px]">
                          These values are correct
                        </Button>
                      </div>
                      <Button className="bg-light_blue-500 capitalize cursor-pointer min-w-[56px] py-2.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                        edit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </List>
            <div className="absolute bottom-[0] flex flex-col font-raleway items-center justify-start right-[0] w-auto">
              <Button
                className="common-pointer bg-gradient1  capitalize cursor-pointer font-semibold min-w-[128px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]"
                onClick={() => navigate("/daoapprovetransactiona")}
              >
                autodeploy
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bg-black-900_01 flex flex-col inset-x-[0] items-center justify-start max-w-[680px] mx-auto p-8 md:px-5 rounded-[16px] top-[8%] w-full">
          <div className="flex flex-col items-start justify-center pb-8 pt-2 w-full">
            <div className="flex flex-row gap-2.5 items-start justify-between w-full">
              <Text
                className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                size="txtRalewayRomanSemiBold24"
              >
                loading
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_carbonclosefilled.svg"
                alt="carbonclosefill"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <Text
              className="capitalize leading-[160.00%] text-2xl md:text-[22px] text-center text-white-A700_e5 sm:text-xl tracking-[1.20px]"
              size="txtRalewayRomanSemiBold24WhiteA700e5"
            >
              <>
                wait for automated
                <br /> deployment on Vercel Server
              </>
            </Text>
            <div className="!w-60 h-60 overflow-visible rounded-[50%] shadow-bs2">
              <svg style={{ height: 0, width: 0 }}>
                <defs>
                  <linearGradient id="linear-gradient-542:11112">
                    <stop key="0" offset="0" stopColor="#31b5ffb2" />
                    <stop key="1" offset="0.58" stopColor="#0019ffb2" />
                    <stop key="2" offset="0.96" stopColor="#31b5ffb2" />
                  </linearGradient>
                </defs>
              </svg>
              <CircularProgressbar
                className="!w-60 h-60 overflow-visible rounded-[50%] shadow-bs2"
                value={2}
                strokeWidth={0}
                styles={{
                  trail: { strokeWidth: 0, stroke: "#ffffff63" },
                  path: {
                    strokeLinecap: "square",
                    height: "100%",
                    transformOrigin: "center",
                    transform: "rotate(90deg)",
                    stroke: "url(#linear-gradient-542:11112)",
                  },
                }}
              ></CircularProgressbar>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LaunchpadloadingPage;
