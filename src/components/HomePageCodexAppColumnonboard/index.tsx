import React from "react";

import { Button, Img, Text } from "components";

type HomePageCodexAppColumnonboardProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "editimage" | "one" | "registertext" | "registerdescription" | "onboard"
> &
  Partial<{
    editimage: string;
    one: string;
    registertext: string;
    registerdescription: string;
    onboard: string;
  }>;

const HomePageCodexAppColumnonboard: React.FC<
  HomePageCodexAppColumnonboardProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-start justify-start w-auto">
          <div className="flex flex-row gap-4 items-start justify-between w-full">
            <div className="bg-gradient  flex flex-col h-24 items-center justify-start p-[5px] rounded-[16px] w-24">
              {!!props?.editimage ? (
                <Img
                  className="h-20 mb-1.5 w-20"
                  alt="edit"
                  src="props?.editimage"
                />
              ) : null}
            </div>
            <div className="bg-white-A700_19 flex flex-col h-12 items-center justify-end p-2 rounded-bl-[50%] rounded-br-lg rounded-tl-lg rounded-tr-lg w-12">
              {!!props?.one ? (
                <Text
                  className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px]"
                  size="txtInterSemiBold24"
                >
                  {props?.one}
                </Text>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <Text
              className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700_e5 tracking-[1.60px] w-auto"
              size="txtRalewayRomanSemiBold32WhiteA700e5"
            >
              {props?.registertext}
            </Text>
            <Text
              className="leading-[160.00%] max-w-[332px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
              size="txtRalewayRomanRegular16"
            >
              {props?.registerdescription}
            </Text>
          </div>
        </div>
        <Button className="bg-light_blue-500 capitalize cursor-pointer font-raleway font-semibold min-w-[104px] py-2 rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
          {props?.onboard}
        </Button>
      </div>
    </>
  );
};

HomePageCodexAppColumnonboard.defaultProps = {
  registertext: "Register",
  registerdescription:
    "To start, register as a contributor and choose your preferred level of contribution in the CodeX programming layer.",
};

export default HomePageCodexAppColumnonboard;
