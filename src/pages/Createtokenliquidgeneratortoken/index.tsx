import React from "react";

import { Button, Img, Input, Text } from "components";

const CreatetokenliquidgeneratortokenPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-center justify-start mx-auto py-28 w-full">
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
                <div className="flex flex-col items-start justify-start p-2.5 rounded-lg w-auto">
                  <Text
                    className="capitalize text-base text-gray-500 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16"
                  >
                    my tokens
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black-900_01 flex flex-col gap-8 items-end justify-start max-w-7xl mb-[244px] mx-auto p-8 md:px-5 rounded-lg w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <Text
              className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
              size="txtRalewayRomanSemiBold20"
            >
              Create Your Token
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    Token Type*
                  </Text>
                  <Input
                    name="frame370927"
                    placeholder="liquid generator token"
                    className="capitalize font-semibold p-0 placeholder:text-white-A700 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                    wrapClassName="border border-solid border-white-A700_19 flex px-4 py-2 rounded-lg w-full"
                    suffix={
                      <Img
                        className="mt-auto mb-px h-6 ml-[35px]"
                        src="images/img_bxsuparrow.svg"
                        alt="bxs:up-arrow"
                      />
                    }
                  ></Input>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    Symbol*
                  </Text>
                  <Input
                    name="inputfieldtext"
                    placeholder="ex. shiba"
                    className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                    wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
                  ></Input>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    Token Supply*
                  </Text>
                  <Input
                    name="inputfieldtext_One"
                    placeholder="token suply"
                    className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                    wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-full"
                  ></Input>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    Transaction Fee to Generate Yield (%)*
                  </Text>
                  <Input
                    name="inputfieldtext_Two"
                    placeholder="Transaction Fee to Generate Yield (%)*"
                    className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                    wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
                  ></Input>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    Charity Address*
                  </Text>
                  <Input
                    name="inputfieldtext_Three"
                    placeholder="Charity Address*"
                    className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                    wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-full"
                  ></Input>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    Marketing Address*
                  </Text>
                  <Input
                    name="inputfieldtext_Four"
                    placeholder="Marketing Address*"
                    className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                    wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-full"
                  ></Input>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    Liquidity Fee to Sell*
                  </Text>
                  <Input
                    name="inputfieldtext_Five"
                    placeholder="Liquidity Fee to Sell*"
                    className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                    wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-full"
                  ></Input>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    Charity Fee to Sell*
                  </Text>
                  <Input
                    name="inputfieldtext_Six"
                    placeholder="Charity Fee to Sell*"
                    className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                    wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-full"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    Name*
                  </Text>
                  <Input
                    name="inputfieldtext_Seven"
                    placeholder="ex. shibainu"
                    className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                    wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
                  ></Input>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    Decimal*
                  </Text>
                  <Input
                    name="frame370928"
                    placeholder="6"
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
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    Router*
                  </Text>
                  <Input
                    name="frame370928_One"
                    placeholder="select Router"
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
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    Transaction Fee to Generate Liquidity (%)*
                  </Text>
                  <Input
                    name="inputfieldtext_Eight"
                    placeholder="Transaction Fee to Generate Liquidity (%)*"
                    className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                    wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-full"
                  ></Input>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    Charity Percent (%)*
                  </Text>
                  <Input
                    name="inputfieldtext_Nine"
                    placeholder="Charity Percent (%)*"
                    className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                    wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-full"
                  ></Input>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    Marketing Percent (%)*
                  </Text>
                  <Input
                    name="inputfieldtext_Ten"
                    placeholder="Marketing Percent (%)*"
                    className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                    wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-full"
                  ></Input>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    Marketing Fee to Sell*
                  </Text>
                  <Input
                    name="inputfieldtext_Eleven"
                    placeholder="Marketing Fee to Sell*"
                    className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                    wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-full"
                  ></Input>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    Transaction Limit(%)*
                  </Text>
                  <Input
                    name="inputfieldtext_Twelve"
                    placeholder="Transaction Limit(%)*"
                    className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                    wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
                  ></Input>
                </div>
              </div>
            </div>
            <Button className="bg-orange-300_7f capitalize cursor-pointer font-semibold min-w-[752px] md:min-w-full py-2.5 rounded-lg text-center text-white-A700 text-xs tracking-[0.60px]">
              Note: Fee given as 0 will be considered as no fee. Transaction
              limit given as 100% will be considered as no limit
            </Button>
          </div>
          <Button className="bg-gradient1  capitalize cursor-pointer font-semibold min-w-[80px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
            Apply
          </Button>
        </div>
      </div>
    </>
  );
};

export default CreatetokenliquidgeneratortokenPage;
