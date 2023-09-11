import React from "react";

import { Button, Img, Input, List, Text } from "components";
import CreateTokenPageSelectBlockchainRowframe370829 from "components/CreateTokenPageSelectBlockchainRowframe370829";

const CreatetokenpageselectblockchainPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway mx-auto py-[83px] relative w-full">
        <div className="backdrop-opacity-[0.5] blur-[10.00px] flex flex-col items-center justify-end max-w-[1440px] mt-[29px] mx-auto w-full">
          <div className="bg-black-900 flex flex-col items-start justify-start w-auto md:w-full">
            <div className="flex flex-col items-start justify-start px-20 md:px-5 w-auto">
              <Text
                className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px] w-auto"
                size="txtRalewayRomanSemiBold48"
              >
                token
              </Text>
            </div>
            <div className="bg-black-900 flex flex-col items-center justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 py-2 w-full">
              <div className="flex flex-col items-center justify-start max-w-7xl mx-auto py-2 w-full">
                <div className="flex flex-row gap-8 items-start justify-start w-auto">
                  <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[128px] py-[13px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    create token
                  </Button>
                  <div className="flex flex-col items-start justify-start p-2.5 w-auto">
                    <Text
                      className="capitalize text-base text-gray-500 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16"
                    >
                      my token
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start max-w-7xl mx-auto p-8 md:px-5 rounded-lg w-full">
            <Text
              className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
              size="txtRalewayRomanSemiBold20"
            >
              Create Your Token
            </Text>
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="flex md:flex-col flex-row gap-4 items-start justify-start max-w-[1216px] w-full">
                <div className="flex flex-1 flex-col gap-4 items-end justify-end w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA70099"
                    >
                      Token Type*
                    </Text>
                    <Input
                      name="frame370927"
                      placeholder="standard token"
                      className="capitalize font-semibold p-0 placeholder:text-white-A700 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                      wrapClassName="border border-solid border-white-A700_33 flex px-4 py-[9px] rounded-lg w-full"
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
                      className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA70099"
                    >
                      Symbol*
                    </Text>
                    <div className="border border-solid border-white-A700_33 flex flex-col items-start justify-start px-4 py-2 rounded-lg w-full">
                      <Text
                        className="capitalize text-base text-white-A700_4c tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA7004c"
                      >
                        ex. shiba
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA70099"
                    >
                      Token Supply*
                    </Text>
                    <div className="border border-solid border-white-A700_33 flex flex-col items-start justify-start px-4 py-2 rounded-lg w-full">
                      <Text
                        className="capitalize text-base text-white-A700_4c tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA7004c"
                      >
                        token suply
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient1  flex flex-col items-center justify-center px-4 py-2 rounded w-[305px]">
                    <Text
                      className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA700"
                    >
                      connect wallet
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA70099"
                    >
                      Name*
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
                      className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA70099"
                    >
                      Decimal*
                    </Text>
                    <Input
                      name="frame370928"
                      placeholder="6"
                      className="capitalize font-semibold p-0 placeholder:text-white-A700 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                      wrapClassName="border border-solid border-white-A700_33 flex px-4 py-[9px] rounded-lg w-full"
                      suffix={
                        <Img
                          className="h-6 ml-[35px] my-auto"
                          src="images/img_bxsuparrow.svg"
                          alt="bxs:up-arrow"
                        />
                      }
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black-900 flex flex-col gap-8 items-center justify-start mb-auto mt-[-591px] mx-auto p-8 md:px-5 rounded-lg shadow-bs1 w-auto z-[1]">
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
              src="images/img_carbonclosefilled.svg"
              alt="carbonclosefill"
            />
          </div>
          <List
            className="sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 justify-start w-auto md:w-full"
            orientation="horizontal"
          >
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <CreateTokenPageSelectBlockchainRowframe370829 className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]" />
              <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_frame371062.png"
                  alt="frame371062"
                />
                <Text
                  className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20WhiteA700"
                >
                  tron mainnet
                </Text>
              </div>
              <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_frame371062_48x48.png"
                  alt="frame371062_One"
                />
                <Text
                  className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20WhiteA700"
                >
                  etherium mainnet
                </Text>
              </div>
              <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_frame371062_1.png"
                  alt="frame371062_Two"
                />
                <Text
                  className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20WhiteA700"
                >
                  polygon mainnet
                </Text>
              </div>
              <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_frame371062_2.png"
                  alt="frame371062_Three"
                />
                <Text
                  className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20WhiteA700"
                >
                  arbritrum nova
                </Text>
              </div>
              <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_frame371062_3.png"
                  alt="frame371062_Four"
                />
                <Text
                  className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20WhiteA700"
                >
                  fantom opera mainnet
                </Text>
              </div>
              <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_frame371062_4.png"
                  alt="frame371062_Five"
                />
                <Text
                  className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20WhiteA700"
                >
                  kava
                </Text>
              </div>
              <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_frame371062_5.png"
                  alt="frame371062_Six"
                />
                <Text
                  className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20WhiteA700"
                >
                  moonbin mainnet
                </Text>
              </div>
              <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_frame371062_6.png"
                  alt="frame371062_Seven"
                />
                <Text
                  className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20WhiteA700"
                >
                  moonriver{" "}
                </Text>
              </div>
              <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_frame371062_7.png"
                  alt="frame371062_Eight"
                />
                <Text
                  className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20WhiteA700"
                >
                  optimism
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_frame371062_8.png"
                  alt="frame371062"
                />
                <Text
                  className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20WhiteA700"
                >
                  arbritrum mainnet
                </Text>
              </div>
              <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_frame371062_9.png"
                  alt="frame371062_One"
                />
                <Text
                  className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20WhiteA700"
                >
                  avalanche mainnet
                </Text>
              </div>
              <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_frame371062_10.png"
                  alt="frame371062_Two"
                />
                <Text
                  className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20WhiteA700"
                >
                  BSC Mainnet
                </Text>
              </div>
              <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_frame371062_11.png"
                  alt="frame371062_Three"
                />
                <Text
                  className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20WhiteA700"
                >
                  cello
                </Text>
              </div>
              <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_frame371062_12.png"
                  alt="frame371062_Four"
                />
                <Text
                  className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20WhiteA700"
                >
                  cronos mainnet
                </Text>
              </div>
              <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_frame371062_13.png"
                  alt="frame371062_Five"
                />
                <Text
                  className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20WhiteA700"
                >
                  fuse
                </Text>
              </div>
              <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_frame371062_14.png"
                  alt="frame371062_Six"
                />
                <Text
                  className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20WhiteA700"
                >
                  gnosis
                </Text>
              </div>
              <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_frame371062_15.png"
                  alt="frame371062_Seven"
                />
                <Text
                  className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20WhiteA700"
                >
                  harmony
                </Text>
              </div>
              <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_frame371062_16.png"
                  alt="frame371062_Eight"
                />
                <Text
                  className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20WhiteA700"
                >
                  metis
                </Text>
              </div>
              <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_frame371062_17.png"
                  alt="frame371062_Nine"
                />
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
              <div className="flex flex-col gap-4 items-end justify-start w-auto">
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                  <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                    <Button className="bg-black-900_01 flex h-12 items-center justify-center p-1.5 rounded-[50%] w-12">
                      <Img
                        className="h-[33px]"
                        src="images/img_codex11.png"
                        alt="frame370829"
                      />
                    </Button>
                  </div>
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20WhiteA700"
                  >
                    codex testnet
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_frame371062.png"
                    alt="frame371062"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20WhiteA700"
                  >
                    tron testnet
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_frame371062_10.png"
                    alt="frame371062_One"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20WhiteA700"
                  >
                    BSC testNet
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_frame371062_3.png"
                    alt="frame371062_Two"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20WhiteA700"
                  >
                    fantom opera testNet
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_frame371062_5.png"
                    alt="frame371062_Three"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20WhiteA700"
                  >
                    moonbin testNet
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_frame371062_9.png"
                    alt="frame371062"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20WhiteA700"
                  >
                    avalanche testNet
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_frame371062_12.png"
                    alt="frame371062_One"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20WhiteA700"
                  >
                    cronos testNet
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_frame371062_48x48.png"
                    alt="frame371062_Two"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20WhiteA700"
                  >
                    etherium testNet
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-[324px]">
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_frame371062_1.png"
                    alt="frame371062_Three"
                  />
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
    </>
  );
};

export default CreatetokenpageselectblockchainPage;
