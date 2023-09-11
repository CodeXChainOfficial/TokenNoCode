import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Switch, Text } from "components";
import NOCODENFTFeaturesColumnframe371101 from "components/NOCODENFTFeaturesColumnframe371101";

const NOCODENFTfeaturesPage: React.FC = () => {
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
        <div className="flex flex-col gap-[35px] items-center mt-[37px] w-full">
          <NOCODENFTFeaturesColumnframe371101 className="bg-black-900 flex flex-col items-center justify-start md:px-10 px-20 sm:px-5 py-4 w-auto md:w-full" />
          <Text
            className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.60px]"
            size="txtRalewayRomanSemiBold32WhiteA700"
          >
            features
          </Text>
          <List
            className="bg-black-900_01 flex flex-col gap-6 items-start max-w-[1270px] mx-auto p-8 md:px-5 rounded-lg w-full"
            orientation="vertical"
          >
            <div className="flex md:flex-1 flex-col gap-4 items-start justify-start my-0 w-[620px] md:w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <Switch
                  onColor="#009dff"
                  offColor="#ffffff19"
                  onHandleColor="#fafafa"
                  offHandleColor="#fafafa"
                  value={true}
                  className="w-[26%]"
                />
                <Text
                  className="capitalize text-white-A700_e5 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20WhiteA700e5"
                >
                  delayed reveal
                </Text>
              </div>
              <Text
                className="capitalize leading-[160.00%] max-w-[620px] md:max-w-full text-base text-white-A700_99 tracking-[0.80px]"
                size="txtRalewayRomanMedium16"
              >
                your costumers will see a placeholder image on all NFTs until
                the reveal date
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col gap-4 items-start justify-start my-0 w-[620px] md:w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <Switch
                  onColor="#009dff"
                  offColor="#ffffff19"
                  onHandleColor="#fafafa"
                  offHandleColor="#fafafa"
                  value={false}
                  className="w-[36%]"
                />
                <Text
                  className="capitalize text-white-A700_e5 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20WhiteA700e5"
                >
                  whistlist
                </Text>
              </div>
              <Text
                className="capitalize leading-[160.00%] max-w-[620px] md:max-w-full text-base text-white-A700_99 tracking-[0.80px]"
                size="txtRalewayRomanMedium16"
              >
                Give specific group of people (team, early supporters, etc.)
                access to mint before others
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col gap-4 items-start justify-start my-0 w-[620px] md:w-full">
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-auto sm:w-full">
                <Switch
                  onColor="#009dff"
                  offColor="#ffffff19"
                  onHandleColor="#fafafa"
                  offHandleColor="#fafafa"
                  value={false}
                  className="w-[16%]"
                />
                <Text
                  className="capitalize text-white-A700_e5 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20WhiteA700e5"
                >
                  primary sales revenue splits
                </Text>
              </div>
              <Text
                className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-full"
                size="txtRalewayRomanMedium16"
              >
                Skip when you (the collection owner) are the 100% shareholder
              </Text>
            </div>
          </List>
        </div>
        <div className="flex flex-col items-end mb-[206px] mt-8 md:px-10 sm:px-5 px-[85px] w-full">
          <div className="flex flex-row gap-8 items-start justify-start w-auto">
            <Button
              className="common-pointer border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[72px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]"
              onClick={() => navigate("/nocodenftgeneralinfo")}
            >
              back
            </Button>
            <Button
              className="common-pointer bg-gradient1  capitalize cursor-pointer font-semibold min-w-[70px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]"
              onClick={() => navigate("/nocodenftmarket")}
            >
              next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NOCODENFTfeaturesPage;
