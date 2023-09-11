import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import DAODescribeProcesdao from "components/DAODescribeProcesdao";

const DAOdescribePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway gap-[37px] items-start justify-start mx-auto py-[116px] w-full">
        <Text
          className="capitalize ml-20 md:ml-[0] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px]"
          size="txtRalewayRomanSemiBold48"
        >
          dAO
        </Text>
        <div className="flex flex-col md:gap-10 gap-16 items-center mb-[199px] w-full">
          <DAODescribeProcesdao className="bg-black-900 flex flex-col items-center justify-start max-w-[1440px] pt-8 md:px-10 px-20 sm:px-5 w-full" />
          <div className="flex flex-col items-start justify-start max-w-[1288px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-4 items-center justify-start px-4 py-2 w-auto md:w-full">
              <Text
                className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.60px] w-auto"
                size="txtRalewayRomanSemiBold32WhiteA700"
              >
                Describe your DAO
              </Text>
              <div className="flex flex-col items-start justify-start max-w-[1256px] py-2 w-full">
                <Text
                  className="leading-[160.00%] max-w-[1256px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                  size="txtRalewayRomanMedium16WhiteA700e5"
                >
                  <span className="text-white-A700_e5 font-raleway text-left font-medium">
                    <>
                      Name and define your DAO so new contributors know
                      they&#39;ve come to the right place. This information is
                      displayed on the DAO Explore page and can be changed with
                      a vote. For ideas on DAO branding,
                    </>
                  </span>
                  <span className="text-light_blue-500 font-raleway text-left font-medium">
                    {" "}
                    read our guide.
                  </span>
                </Text>
              </div>
            </div>
            <div className="bg-black-900_01 flex flex-col gap-12 items-start justify-start max-w-7xl mt-8 p-8 sm:px-5 rounded-lg w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-end justify-end w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        DAO name
                      </Text>
                      <Input
                        name="inputfieldtext"
                        placeholder="Type your DAO&#39;s name..."
                        className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                        wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-full"
                        type="text"
                      ></Input>
                      <Text
                        className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-full"
                        size="txtRalewayRomanMedium16"
                      >
                        Maximum of 128 characters
                      </Text>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        ENS Subdomain
                      </Text>
                      <div className="border border-solid border-white-A700_33 flex flex-col items-center justify-end pl-4 rounded-lg w-full">
                        <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[88px] py-[11px] rounded-br-lg rounded-tr-lg text-base text-center text-light_blue-500 tracking-[0.80px]">
                          .dao.eth
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-12 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start max-w-[1216px] w-full">
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Logo{" "}
                      </Text>
                      <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[85px] py-2.5 rounded-lg text-center text-white-A700_e5 text-xs tracking-[0.60px]">
                        Optional
                      </Button>
                    </div>
                    <Text
                      className="text-base text-white-A700_99 tracking-[0.80px] w-full"
                      size="txtRalewayRomanMedium16"
                    >
                      JPG, PNG, GIF, or SVG of no more than 3MB. We recommend
                      1024x1024px.
                    </Text>
                  </div>
                  <div className="bg-white-A700_19 border border-dashed border-white-A700_e5 flex flex-col h-24 items-center justify-start p-10 sm:px-5 rounded-lg w-24">
                    <Img
                      className="h-4 w-[15px]"
                      src="images/img_minimize.svg"
                      alt="minimize"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    Description
                  </Text>
                  <div className="border border-solid border-white-A700_33 flex flex-col h-[200px] md:h-auto items-start justify-start px-4 py-2 rounded-lg w-full">
                    <Text
                      className="capitalize text-base text-white-A700_4c tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA7004c"
                    >
                      description
                    </Text>
                  </div>
                  <Text
                    className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanMedium16"
                  >
                    <>
                      Describe your DAO&#39;s purpose in a few sentences. This
                      is listed on the Explore page so new contributors can find
                      you.
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start max-w-[1216px] w-full">
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Links
                      </Text>
                      <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[85px] py-2.5 rounded-lg text-center text-white-A700_e5 text-xs tracking-[0.60px]">
                        Optional
                      </Button>
                    </div>
                    <Text
                      className="text-base text-white-A700_99 tracking-[0.80px] w-full"
                      size="txtRalewayRomanMedium16"
                    >
                      <>
                        Links to your DAO&#39;s website, social media profiles,
                        Discord, or other places your community gathers.
                      </>
                    </Text>
                  </div>
                  <div className="bg-black-900_01 border border-solid border-white-A700_19 flex flex-col gap-4 items-start justify-start p-4 rounded-lg w-full">
                    <div className="flex flex-row sm:gap-10 items-start justify-between max-w-[658px] w-full">
                      <Text
                        className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700"
                      >
                        nmae/ description
                      </Text>
                      <Text
                        className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700"
                      >
                        link
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-8 items-start justify-start w-full">
                      <Input
                        name="inputfieldtext_One"
                        placeholder="Lens, Discord, etc."
                        className="capitalize font-semibold p-0 placeholder:text-white-A700_99 sm:pr-5 text-base text-left text-white-A700_99 tracking-[0.80px] w-full"
                        wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 flex-1 sm:flex-1 pl-4 pr-[35px] py-[11px] rounded-lg w-[48%] sm:w-full"
                      ></Input>
                      <Input
                        name="inputfieldtext_Two"
                        placeholder="https://"
                        className="capitalize font-semibold p-0 placeholder:text-white-A700_99 sm:pr-5 text-base text-left text-white-A700_99 tracking-[0.80px] w-full"
                        wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 flex-1 sm:flex-1 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-[48%] sm:w-full"
                      ></Input>
                    </div>
                    <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[105px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                      Add link
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-8 items-start justify-start md:ml-[0] ml-[1098px] mt-24 w-auto">
              <Button
                className="common-pointer border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[72px] py-[11px] rounded text-base text-center text-light_blue-500 tracking-[0.80px]"
                onClick={() => navigate("/daohomegenerator")}
              >
                back
              </Button>
              <Button
                className="common-pointer bg-gradient1  capitalize cursor-pointer font-semibold min-w-[70px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]"
                onClick={() => navigate("/daodefinetokenholder")}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DAOdescribePage;
