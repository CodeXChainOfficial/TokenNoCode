import React from "react";

import { Button, Img, Text } from "components";

type CreateProjectRightRowframe370831Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "productstext"
  | "projecttext"
  | "ecosystemtext"
  | "aboutustext"
  | "doctext"
  | "connectwallettext"
> &
  Partial<{
    productstext: string;
    projecttext: string;
    ecosystemtext: string;
    aboutustext: string;
    doctext: string;
    connectwallettext: string;
  }>;

const CreateProjectRightRowframe370831: React.FC<
  CreateProjectRightRowframe370831Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-20 w-44"
          src="images/img_frame370831.svg"
          alt="frame370831"
        />
        <div className="flex md:flex-col flex-row gap-12 items-center justify-start w-auto md:w-full">
          <div className="flex sm:flex-col flex-row gap-8 items-start justify-start w-auto sm:w-full">
            <Text
              className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
              size="txtRalewayRomanSemiBold16WhiteA700"
            >
              {props?.productstext}
            </Text>
            <Text
              className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
              size="txtRalewayRomanSemiBold16WhiteA70099"
            >
              {props?.projecttext}
            </Text>
            <Text
              className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
              size="txtRalewayRomanSemiBold16WhiteA70099"
            >
              {props?.ecosystemtext}
            </Text>
            <Text
              className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
              size="txtRalewayRomanSemiBold16WhiteA70099"
            >
              {props?.aboutustext}
            </Text>
            <Text
              className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
              size="txtRalewayRomanSemiBold16WhiteA70099"
            >
              {props?.doctext}
            </Text>
          </div>
          <Button className="bg-gradient1  capitalize cursor-pointer font-raleway font-semibold min-w-[160px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
            {props?.connectwallettext}
          </Button>
        </div>
      </div>
    </>
  );
};

CreateProjectRightRowframe370831.defaultProps = {
  productstext: "Products",
  projecttext: "Project",
  ecosystemtext: "Ecosystem",
  aboutustext: "About us",
  doctext: "doc",
  connectwallettext: "connect wallet",
};

export default CreateProjectRightRowframe370831;
