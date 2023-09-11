import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Input, List, Text } from "components";
import NOCODENFTMARKETColumnframe371101 from "components/NOCODENFTMARKETColumnframe371101";

const NOCODENFTMARKETPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway justify-start mx-auto py-[116px] w-full">
        <Text
          className="capitalize ml-20 md:ml-[0] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px]"
          size="txtRalewayRomanSemiBold48"
        >
          no-code
        </Text>
        <div className="flex flex-col items-center mt-[37px] w-full">
          <NOCODENFTMARKETColumnframe371101 className="bg-black-900 flex flex-col items-center justify-start md:px-10 px-20 sm:px-5 py-4 w-auto md:w-full" />
        </div>
        <Text
          className="capitalize ml-20 md:ml-[0] mt-1.5 md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.60px]"
          size="txtRalewayRomanSemiBold32WhiteA700"
        >
          marketplace
        </Text>
        <div className="flex flex-col items-center mt-8 md:px-10 sm:px-5 px-[74px] w-full">
          <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start max-w-[1292px] mx-auto p-8 md:px-5 rounded-lg w-full">
            <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start max-w-[1228px] w-full">
              <CheckBox
                className="capitalize font-medium text-base text-left text-white-A700_e5 tracking-[0.80px]"
                inputClassName="bg-black-900_01 border border-light_blue-500 border-solid h-6 mr-[5px] rounded w-6"
                name="ivecreatedthe"
                id="ivecreatedthe"
                label="I&#39;ve created the marketplace collection already"
              ></CheckBox>
              <Text
                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                size="txtRalewayRomanSemiBold16WhiteA700e5"
              >
                Marketplace *
              </Text>
              <Input
                name="frame370928"
                placeholder="opensea"
                className="capitalize font-semibold p-0 placeholder:text-white-A700 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                wrapClassName="border border-solid border-white-A700_19 flex px-4 py-2 rounded-lg w-[574px] sm:w-full"
                suffix={
                  <Img
                    className="mt-auto mb-px h-6 ml-[35px]"
                    src="images/img_bxsuparrow.svg"
                    alt="bxs:up-arrow"
                  />
                }
              ></Input>
              <Text
                className="capitalize text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                size="txtRalewayRomanSemiBold12WhiteA700e5"
              >
                OpenSea or other
              </Text>
              <Button className="bg-orange-300_7f capitalize cursor-pointer font-semibold min-w-[466px] sm:min-w-full py-2.5 rounded-lg text-center text-white-A700 text-xs tracking-[0.60px]">
                Maximum number of NFTs that can be ever minted in this
                collection
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    Collection Name*
                  </Text>
                  <Input
                    name="inputfieldtext"
                    placeholder="xxx777"
                    className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                    wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
                  ></Input>
                  <Text
                    className="capitalize text-white-A700_4c text-xs tracking-[0.60px] w-auto"
                    size="txtRalewayRomanSemiBold12WhiteA7004c"
                  >
                    your link
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    Royalties (1-10%)
                  </Text>
                  <Input
                    name="inputfieldtext_One"
                    placeholder="xxx777"
                    className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                    wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
                  ></Input>
                  <Text
                    className="capitalize text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                    size="txtRalewayRomanSemiBold12WhiteA700e5"
                  >
                    How much you will get from each secondary sale. Max 10%.
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[26px] items-start justify-start w-full">
                <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    Project URL
                  </Text>
                  <Input
                    name="inputfieldtext_Two"
                    placeholder="Your website, twitter, etc."
                    className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                    wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
                  ></Input>
                  <Text
                    className="capitalize text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                    size="txtRalewayRomanSemiBold12WhiteA700e5"
                  >
                    Your website, twitter, etc.
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    Royalties recipient*
                  </Text>
                  <Input
                    name="inputfieldtext_Three"
                    placeholder="0x2057237aaF18F6f72552BED5733C68433BBA100e"
                    className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                    wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
                  ></Input>
                  <Text
                    className="capitalize text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                    size="txtRalewayRomanSemiBold12WhiteA700e5"
                  >
                    Wallet address to send royalty payments to
                  </Text>
                </div>
              </div>
            </div>
            <Button className="bg-blue-400_7f capitalize cursor-pointer font-semibold min-w-[1054px] md:min-w-full py-2.5 rounded-lg text-center text-white-A700 text-xs tracking-[0.60px]">
              Please double check royalty settings on OpenSea before minting.
              You can also split royalties between multiple recipients on Open
              Sea collection settings page.
            </Button>
            <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start w-[574px] sm:w-full">
              <Text
                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                size="txtRalewayRomanSemiBold16WhiteA700e5"
              >
                Description
              </Text>
              <div className="bg-black-900_01 border border-solid border-white-A700_19 flex flex-col items-start justify-start px-4 py-2 rounded-lg w-full">
                <Text
                  className="capitalize text-base text-white-A700_4c tracking-[0.80px] w-auto"
                  size="txtRalewayRomanSemiBold16WhiteA7004c"
                >
                  Doodles are characters that came from...
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end mb-[338px] mt-16 md:px-10 sm:px-5 px-[83px] w-full">
          <div className="flex flex-row gap-8 items-start justify-start w-auto">
            <Button
              className="common-pointer border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[72px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]"
              onClick={() => navigate("/nocodenftfeatures")}
            >
              back
            </Button>
            <Button
              className="common-pointer bg-gradient1  capitalize cursor-pointer font-semibold min-w-[70px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]"
              onClick={() => navigate("/nocodenftdeploy")}
            >
              next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NOCODENFTMARKETPage;
