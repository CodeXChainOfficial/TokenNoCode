import React from "react";

import { Button, Img, Input, List, Text } from "components";
import NOCODENFTGeneralInfoColumnframe371101 from "components/NOCODENFTGeneralInfoColumnframe371101";

const NOCODENFTCONTRACTPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway gap-9 items-start justify-start mx-auto py-[116px] w-full">
        <Text
          className="capitalize ml-20 md:ml-[0] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[2.00px]"
          size="txtRalewayRomanSemiBold40"
        >
          no-code
        </Text>
        <div className="flex flex-col items-center mb-[213px] w-full">
          <div className="flex sm:h-[1016px] h-[270px] md:h-[392px] justify-end md:px-5 relative w-full">
            <Text
              className="capitalize mb-[23px] ml-20 mt-auto md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.60px]"
              size="txtRalewayRomanSemiBold32WhiteA700"
            >
              Pick blockchain
            </Text>
            <NOCODENFTGeneralInfoColumnframe371101 className="absolute bg-black-900 flex flex-col h-full inset-[0] items-center justify-start m-auto md:px-10 px-20 sm:px-5 py-4 w-auto md:w-full" />
          </div>
          <div className="flex flex-col items-start justify-start max-w-7xl mt-[3px] mx-auto md:px-5 w-full">
            <Text
              className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.60px]"
              size="txtRalewayRomanSemiBold32WhiteA700"
            >
              general info
            </Text>
            <div className="flex md:h-[1297px] h-[821px] sm:h-[848px] justify-end mt-[35px] relative w-full">
              <Button className="bg-gradient1  capitalize cursor-pointer font-semibold mb-[166px] min-w-[70px] ml-auto mr-2.5 mt-auto py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
                next
              </Button>
              <div className="absolute bg-black-900_01 flex flex-col gap-4 h-full inset-[0] items-start justify-center m-auto max-w-7xl p-8 sm:px-5 rounded-lg w-full">
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
                          name="frame370927"
                          placeholder="bored apes"
                          className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                          wrapClassName="border border-solid border-white-A700_4c pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-full"
                        ></Input>
                        <Text
                          className="capitalize text-red-A200 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12"
                        >
                          <>Please correct &quot;Name&quot;</>
                        </Text>
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
                          name="frame370927_One"
                          placeholder="bayc"
                          className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                          wrapClassName="border border-solid border-white-A700_33 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-full"
                        ></Input>
                        <Text
                          className="capitalize text-red-A200 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12"
                        >
                          <>Please corrent &quot;Token Symbol&quot;</>
                        </Text>
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
                          className="capitalize text-red-A200 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12"
                        >
                          <>Please correct &quot;Mint Price&quot;</>
                        </Text>
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
                          name="frame370928_One"
                          placeholder="token suply"
                          className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                          wrapClassName="border border-solid border-white-A700_33 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-full"
                        ></Input>
                        <Text
                          className="capitalize leading-[160.00%] max-w-[568px] md:max-w-full text-base text-white-A700_4c tracking-[0.80px]"
                          size="txtRalewayRomanMedium16WhiteA7004c"
                        >
                          Maximum number of NFTs someone can mint in one go.
                          Helps prevent botting and give everyone a fair chance
                          to mint.
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
                          name="frame370927_Two"
                          placeholder="ex. shibainu"
                          className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                          wrapClassName="border border-solid border-white-A700_33 pl-4 pr-[35px] py-[11px] rounded-lg w-[99%]"
                        ></Input>
                        <Text
                          className="capitalize text-red-A200 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12"
                        >
                          <>Please correct &quot;Collection Size&quot;</>
                        </Text>
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
                          className="capitalize text-red-A200 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12"
                        >
                          <>Please correct &quot;Collection Size&quot;</>
                        </Text>
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
                          name="frame370928_Three"
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
                          Total number of NFTs someone can mint during public
                          sale
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-8 items-start justify-start md:ml-[0] ml-[1097px] mt-16 w-auto">
              <Button className="border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[72px] py-[11px] rounded text-base text-center text-light_blue-500 tracking-[0.80px]">
                back
              </Button>
              <Button className="bg-gradient1  capitalize cursor-pointer font-semibold min-w-[79px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
                reset
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NOCODENFTCONTRACTPage;
