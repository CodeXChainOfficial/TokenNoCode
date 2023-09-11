import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const CreatetokensuccescreatetokenPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 font-raleway h-[1044px] mx-auto p-20 md:px-10 sm:px-5 relative w-full">
        <div className="absolute backdrop-opacity-[0.5] bg-black-900_01 blur-[10.00px] flex flex-col gap-4 inset-x-[0] items-start justify-end max-w-7xl mx-auto p-8 md:px-5 rounded-lg top-[14%] w-full">
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
                    wrapClassName="border border-light_blue-500 border-solid flex px-4 py-[9px] rounded-lg w-full"
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
                  <div className="border border-light_blue-500 border-solid flex flex-col items-start justify-start px-4 py-2 rounded-lg w-full">
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
                  <Input
                    name="frame370928"
                    placeholder="token suply"
                    className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                    wrapClassName="border border-light_blue-500 border-solid pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-full"
                  ></Input>
                </div>
                <Button className="bg-gradient1  capitalize cursor-pointer font-semibold py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px] w-[305px]">
                  connect wallet
                </Button>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA70099"
                  >
                    Name*
                  </Text>
                  <div className="border border-light_blue-500 border-solid flex flex-col items-start justify-start px-4 py-2 rounded-lg w-full">
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
                    name="frame370928_One"
                    placeholder="6"
                    className="capitalize font-semibold p-0 placeholder:text-white-A700 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                    wrapClassName="border border-light_blue-500 border-solid flex px-4 py-[9px] rounded-lg w-full"
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
        <div className="absolute bg-black-900_01 flex flex-col gap-4 inset-x-[0] items-center justify-start mx-auto p-8 md:px-5 rounded-lg top-[11%] w-auto">
          <div className="flex flex-row gap-4 items-center justify-between w-full">
            <Text
              className="capitalize text-green-400 text-xl tracking-[1.00px] w-auto"
              size="txtRalewayRomanSemiBold20Green400"
            >
              token created succesfully
            </Text>
            <Img
              className="h-[21px] w-[21px]"
              src="images/img_close.svg"
              alt="close"
            />
          </div>
          <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-auto md:w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <Text
                  className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                  size="txtRalewayRomanSemiBold16WhiteA700e5"
                >
                  name
                </Text>
                <Input
                  name="financeCounter"
                  placeholder="finance 1"
                  className="capitalize font-semibold p-0 placeholder:text-white-A700_e5 sm:pr-5 text-base text-left text-white-A700_e5 tracking-[0.80px] w-full"
                  wrapClassName="border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
                ></Input>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <Text
                  className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                  size="txtRalewayRomanSemiBold16WhiteA700e5"
                >
                  symbol
                </Text>
                <Input
                  name="frame370928_Two"
                  placeholder="CDXF1"
                  className="capitalize font-semibold p-0 placeholder:text-white-A700_e5 sm:pr-5 text-base text-left text-white-A700_e5 tracking-[0.80px] w-full"
                  wrapClassName="border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
                ></Input>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <Text
                  className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                  size="txtRalewayRomanSemiBold16WhiteA700e5"
                >
                  total supply
                </Text>
                <Input
                  name="frame370927_One"
                  placeholder="1.000.000"
                  className="capitalize font-inter font-semibold p-0 placeholder:text-white-A700_e5 sm:pr-5 text-base text-left text-white-A700_e5 tracking-[0.80px] w-full"
                  wrapClassName="border border-solid border-white-A700_19 pl-4 pr-[35px] py-2.5 rounded-lg w-full"
                ></Input>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <Text
                  className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                  size="txtRalewayRomanSemiBold16WhiteA700e5"
                >
                  addres
                </Text>
                <Input
                  name="frame370927_Two"
                  placeholder="hfyg686hhhhhk..."
                  className="capitalize font-inter font-semibold p-0 placeholder:text-white-A700_e5 text-base text-left text-white-A700_e5 tracking-[0.80px] w-full"
                  wrapClassName="border border-solid border-white-A700_19 flex px-4 py-2 rounded-lg w-[305px]"
                  suffix={
                    <Img
                      className="mt-auto mb-px h-6 ml-[35px]"
                      src="images/img_volume.svg"
                      alt="volume"
                    />
                  }
                ></Input>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-auto md:w-full">
            <Button className="bg-gradient1  capitalize cursor-pointer font-semibold py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px] w-[305px]">
              view transaction
            </Button>
            <Button
              className="common-pointer border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px] w-[305px]"
              onClick={() => navigate("/createprojectright")}
            >
              create DApp
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatetokensuccescreatetokenPage;
