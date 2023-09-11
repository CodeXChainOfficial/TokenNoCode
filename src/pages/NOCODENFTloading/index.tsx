import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import { Button, Img, List, Text } from "components";
import Header1 from "components/Header1";
import NOCODENFTDEPLOYColumnframe371101 from "components/NOCODENFTDEPLOYColumnframe371101";

import "react-circular-progressbar/dist/styles.css";

const NOCODENFTloadingPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway gap-8 items-center justify-end mx-auto w-full">
        <Header1 className="bg-black-900 flex md:flex-col md:gap-10 items-center justify-between px-20 md:px-5 w-full" />
        <div className="backdrop-opacity-[0.5] blur-[10.00px] flex flex-col md:gap-10 gap-16 justify-end w-full">
          <div className="flex flex-col gap-[22px] items-center justify-start w-full">
            <div className="md:h-[1015px] sm:h-[1553px] h-[808px] md:px-5 relative w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                  <NOCODENFTDEPLOYColumnframe371101 className="bg-black-900 flex flex-col items-center justify-start md:px-10 px-20 sm:px-5 py-4 w-auto md:w-full" />
                  <div className="flex flex-col gap-[31px] items-start justify-start w-[89%] md:w-full">
                    <Text
                      className="capitalize text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px]"
                      size="txtRalewayRomanSemiBold36"
                    >
                      <>Verify Your Contract&#39;s Information</>
                    </Text>
                    <div className="bg-black-900_01 flex md:flex-col flex-row gap-5 items-start justify-start max-w-7xl p-8 sm:px-5 rounded-lg w-full">
                      <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[382px] sm:w-full">
                        <Text
                          className="capitalize text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px] w-auto"
                          size="txtRalewayRomanSemiBold36"
                        >
                          xxx
                        </Text>
                        <Text
                          className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanSemiBold16WhiteA700"
                        >
                          xxx
                        </Text>
                      </div>
                      <div className="bg-black-900_01 flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <div className="border-b border-solid border-white-A700_19 flex flex-row sm:gap-10 items-start justify-between px-4 py-2 rounded-lg w-full">
                          <Text
                            className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                            size="txtRalewayRomanSemiBold16WhiteA70099"
                          >
                            collection size
                          </Text>
                          <Text
                            className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                            size="txtInterRegular16"
                          >
                            1
                          </Text>
                        </div>
                        <div className="border-b border-solid border-white-A700_19 flex flex-row sm:gap-10 items-start justify-between px-4 py-2 rounded-lg w-full">
                          <Text
                            className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                            size="txtRalewayRomanSemiBold16WhiteA70099"
                          >
                            delayed reveal
                          </Text>
                          <Text
                            className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                            size="txtRalewayRomanSemiBold16WhiteA70099"
                          >
                            yes
                          </Text>
                        </div>
                        <div className="border-b border-solid border-white-A700_19 flex flex-row sm:gap-10 items-start justify-between px-4 py-2 rounded-lg w-full">
                          <Text
                            className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                            size="txtRalewayRomanSemiBold16WhiteA70099"
                          >
                            first x free
                          </Text>
                          <Text
                            className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                            size="txtInterRegular16"
                          >
                            1
                          </Text>
                        </div>
                        <div className="border-b border-solid border-white-A700_19 flex flex-row sm:gap-10 items-start justify-between px-4 py-2 rounded-lg w-full">
                          <Text
                            className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                            size="txtRalewayRomanSemiBold16WhiteA70099"
                          >
                            marketplace
                          </Text>
                          <Text
                            className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                            size="txtRalewayRomanSemiBold16WhiteA70099"
                          >
                            openSea
                          </Text>
                        </div>
                        <div className="border-b border-solid border-white-A700_19 flex flex-row sm:gap-10 items-start justify-between px-4 py-2 rounded-lg w-full">
                          <Text
                            className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                            size="txtRalewayRomanSemiBold16WhiteA70099"
                          >
                            max tokens per person
                          </Text>
                          <Text
                            className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                            size="txtInterRegular16"
                          >
                            1
                          </Text>
                        </div>
                        <div className="border-b border-solid border-white-A700_19 flex flex-row sm:gap-10 items-start justify-between px-4 py-2 rounded-lg w-full">
                          <Text
                            className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                            size="txtRalewayRomanSemiBold16WhiteA70099"
                          >
                            max tokens per transaction
                          </Text>
                          <Text
                            className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                            size="txtInterRegular16"
                          >
                            1
                          </Text>
                        </div>
                        <div className="border-b border-solid border-white-A700_19 flex flex-row sm:gap-10 items-start justify-between px-4 py-2 rounded-lg w-full">
                          <Text
                            className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                            size="txtRalewayRomanSemiBold16WhiteA70099"
                          >
                            min price
                          </Text>
                          <div className="flex flex-row gap-4 items-start justify-start w-auto">
                            <Text
                              className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                              size="txtInterRegular16"
                            >
                              1
                            </Text>
                            <Text
                              className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA70099"
                            >
                              matic
                            </Text>
                          </div>
                        </div>
                        <div className="border-b border-solid border-white-A700_19 flex flex-row sm:gap-10 items-start justify-between px-4 py-2 rounded-lg w-full">
                          <Text
                            className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                            size="txtRalewayRomanSemiBold16WhiteA70099"
                          >
                            symbol
                          </Text>
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA70099"
                            >
                              xxx
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-black-900_01 flex flex-col inset-x-[0] items-center justify-start max-w-[680px] mx-auto p-8 sm:px-5 rounded-[16px] top-[1%] w-full">
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
                    className="capitalize text-2xl md:text-[22px] text-center text-white-A700_e5 sm:text-xl tracking-[1.20px] w-full"
                    size="txtRalewayRomanSemiBold24WhiteA700e5"
                  >
                    wait for the Wallet popup to deploy
                  </Text>
                  <div className="!w-60 h-60 overflow-visible rounded-[50%] shadow-bs2">
                    <svg style={{ height: 0, width: 0 }}>
                      <defs>
                        <linearGradient id="linear-gradient-536:11124">
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
                          stroke: "url(#linear-gradient-536:11124)",
                        },
                      }}
                    ></CircularProgressbar>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black-900_01 flex flex-col gap-8 items-center justify-start max-w-7xl mx-auto p-8 md:px-5 w-full">
              <Text
                className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700_e5 tracking-[1.60px] w-auto"
                size="txtRalewayRomanSemiBold32WhiteA700e5"
              >
                Attention!
              </Text>
              <Text
                className="leading-[160.00%] max-w-[1216px] md:max-w-full text-base text-center text-white-A700_99 tracking-[0.80px]"
                size="txtRalewayRomanMedium16"
              >
                <>
                  You will be using your own metamask wallet to pay the
                  deployment fees and this wallet will thus be the owner of the
                  smart contract. This is only a testnet deployment meaning you
                  won&#39;t be spending real currency but you should still have
                  test tokens to cover the deployment fees. You will still be
                  able to deploy this contract to the mainnet at a later
                  stage.Based on your selections the projected fee is 0.28 ETH.
                  Pay now: 0 ETH
                </>
              </Text>
              <div className="flex flex-col gap-8 items-center justify-start w-[37%] md:w-full">
                <Text
                  className="capitalize text-base text-center text-light_blue-500 tracking-[0.80px] w-auto"
                  size="txtRalewayRomanSemiBold16Lightblue500"
                >
                  Faucet list to get FREE test tokens (click to expand)
                </Text>
                <div className="flex flex-col gap-2 items-center justify-start w-auto sm:w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    Your wallet address
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-auto sm:w-full">
                    <Text
                      className="text-base text-light_blue-500 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanMedium16Lightblue500"
                    >
                      0x2057237aaF18F6f72552BED5733C68433BBA100e
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_file.svg"
                      alt="file"
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-8 items-start justify-start w-auto">
                  <Button className="border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[118px] py-2 rounded text-base text-center text-light_blue-500 tracking-[0.80px]">
                    Save Draft
                  </Button>
                  <Button className="bg-gradient1  capitalize cursor-pointer font-semibold min-w-[180px] py-2 rounded text-base text-center text-white-A700_e5 tracking-[0.80px]">
                    Deploy to Testnet
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Button className="bg-gradient1  capitalize cursor-pointer font-semibold min-w-[80px] md:ml-[0] ml-[1277px] mr-[83px] py-2 rounded text-base text-center text-white-A700 tracking-[0.80px]">
            finish
          </Button>
        </div>
      </div>
    </>
  );
};

export default NOCODENFTloadingPage;
