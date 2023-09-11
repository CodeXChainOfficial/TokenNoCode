import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import NOCODENFTGeneralInfoColumnframe371101 from "components/NOCODENFTGeneralInfoColumnframe371101";

const NOCODENFTgeneralinfoPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway gap-[37px] items-start justify-start mx-auto py-[116px] w-full">
        <Text
          className="capitalize ml-20 md:ml-[0] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px]"
          size="txtRalewayRomanSemiBold48"
        >
          no-code
        </Text>
        <div className="flex flex-col md:gap-10 gap-[99px] items-center mb-[91px] w-full">
          <NOCODENFTGeneralInfoColumnframe371101 className="bg-black-900 flex flex-col items-center justify-start md:px-10 px-20 sm:px-5 py-4 w-auto md:w-full" />
          <div className="flex flex-col items-start justify-start max-w-7xl mx-auto md:px-5 w-full">
            <Text
              className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.60px]"
              size="txtRalewayRomanSemiBold32WhiteA700"
            >
              general info
            </Text>
            <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start max-w-7xl mt-[35px] p-8 sm:px-5 rounded-lg w-full">
              <Text
                className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                size="txtRalewayRomanSemiBold20"
              >
                Create Your Token
              </Text>
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start max-w-[1222px] w-full">
                  <div className="flex flex-1 flex-col gap-4 items-end justify-end w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Name*
                      </Text>
                      <Input
                        name="inputfieldtext"
                        placeholder="bored apes"
                        className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                        wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-full"
                      ></Input>
                      <Text
                        className="capitalize leading-[160.00%] max-w-[568px] md:max-w-full text-base text-white-A700_4c tracking-[0.80px]"
                        size="txtRalewayRomanMedium16WhiteA7004c"
                      >
                        Purely presentational, no special characters, max 50,
                        start with a letter
                      </Text>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Token Symbol*
                      </Text>
                      <Input
                        name="inputfieldtext_One"
                        placeholder="bayc"
                        className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                        wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-full"
                      ></Input>
                      <Text
                        className="capitalize text-base text-white-A700_4c tracking-[0.80px] w-auto"
                        size="txtRalewayRomanMedium16WhiteA7004c"
                      >
                        Purely presentational, no spaces, max 10 characters
                      </Text>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Price per NFT in ETH*
                      </Text>
                      <Input
                        name="frame370928"
                        placeholder="1"
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
                      <Text
                        className="capitalize text-base text-white-A700_4c tracking-[0.80px] w-auto"
                        size="txtRalewayRomanMedium16WhiteA7004c"
                      >
                        Mint price during public sale
                      </Text>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Max NFTs Per Transaction
                      </Text>
                      <Input
                        name="inputfieldtext_Two"
                        placeholder="token suply"
                        className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                        wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-full"
                      ></Input>
                      <Text
                        className="capitalize leading-[160.00%] max-w-[568px] md:max-w-full text-base text-white-A700_4c tracking-[0.80px]"
                        size="txtRalewayRomanMedium16WhiteA7004c"
                      >
                        Maximum number of NFTs someone can mint in one go. Helps
                        prevent botting and give everyone a fair chance to mint.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        standard token
                      </Text>
                      <Input
                        name="inputfieldtext_Three"
                        placeholder="ex. shibainu"
                        className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                        wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-[99%]"
                      ></Input>
                      <Text
                        className="capitalize text-base text-white-A700_4c tracking-[0.80px] w-auto"
                        size="txtRalewayRomanMedium16WhiteA7004c"
                      >
                        Maximum number of NFTs that can be ever minted in this
                        collection
                      </Text>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        First X Free Per Person
                      </Text>
                      <Input
                        name="frame370928_One"
                        placeholder="1"
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
                      <Text
                        className="capitalize leading-[160.00%] max-w-[568px] md:max-w-full text-base text-white-A700_4c tracking-[0.80px]"
                        size="txtRalewayRomanMedium16WhiteA7004c"
                      >
                        Maximum number of NFTs someone can mint for free.
                        Subject to Max NFTs Per Person and Max NFTs Per
                        Transaction limits.
                      </Text>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Max NFTs Per Person
                      </Text>
                      <Input
                        name="frame370928_Two"
                        placeholder="1"
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
                      <Text
                        className="capitalize text-base text-white-A700_4c tracking-[0.80px] w-full"
                        size="txtRalewayRomanMedium16WhiteA7004c"
                      >
                        Total number of NFTs someone can mint during public sale
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-8 items-start justify-start md:ml-[0] ml-[1092px] mt-24 w-auto">
              <Button className="border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[72px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
                back
              </Button>
              <Button
                className="common-pointer bg-gradient1  capitalize cursor-pointer font-semibold min-w-[70px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]"
                onClick={() => navigate("/nocodenftfeatures")}
              >
                next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NOCODENFTgeneralinfoPage;
