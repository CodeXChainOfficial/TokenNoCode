import React from "react";

import { Button, Img, Text } from "components";

type Header1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header1: React.FC<Header1Props> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-col items-center justify-start py-2 w-[10%] md:w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Img
              className="h-16 md:h-auto object-cover w-full"
              src="images/img_image12.png"
              alt="imageTwelve"
            />
          </div>
        </div>
        <div className="bg-black-900 flex md:flex-col flex-row gap-12 items-center justify-start w-auto md:w-full">
          <ul className="flex flex-row gap-8 sm:hidden items-start justify-start w-auto common-row-list">
            <li>
              <Text
                className="capitalize text-base hover:text-white-A700 text-white-A700_99 tracking-[0.80px]"
                size="txtRalewayRomanSemiBold16WhiteA70099"
              >
                token
              </Text>
            </li>
            <li>
              <Text
                className="capitalize text-base text-white-A700 tracking-[0.80px]"
                size="txtRalewayRomanSemiBold16WhiteA700"
              >
                no-code
              </Text>
            </li>
            <li>
              <Text
                className="capitalize text-base hover:text-white-A700 text-white-A700_99 tracking-[0.80px]"
                size="txtRalewayRomanSemiBold16WhiteA70099"
              >
                dAO
              </Text>
            </li>
            <li>
              <Text
                className="capitalize text-base hover:text-white-A700 text-white-A700_99 tracking-[0.80px]"
                size="txtRalewayRomanSemiBold16WhiteA70099"
              >
                doc
              </Text>
            </li>
          </ul>
          <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-auto">
            <Button
              className="bg-light_blue-500_4c cursor-pointer flex items-center justify-center min-w-[204px] px-4 py-[9px] rounded-lg"
              leftIcon={
                <Img
                  className="h-6 mr-2.5"
                  src="images/img_frame_371059.svg"
                  alt="Frame 371059"
                />
              }
            >
              <div className="capitalize font-raleway font-semibold text-base text-left text-white-A700 tracking-[0.80px]">
                polygon mainnet
              </div>
            </Button>
            <div className="bg-light_blue-500_4c flex flex-row gap-2.5 items-center justify-start px-4 py-2 rounded-lg w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_signal.svg"
                alt="signal"
              />
              <Text
                className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                size="txtRalewayRomanSemiBold16WhiteA700"
              >
                hjih....9y7f32
              </Text>
              <Text
                className="capitalize text-white-A700 text-xs tracking-[0.60px] w-auto"
                size="txtInterRegular12"
              >
                0.000 matic
              </Text>
            </div>
            <Button
              className="bg-gradient1  cursor-pointer flex items-center justify-center min-w-[132px] px-4 py-[9px] rounded-lg"
              leftIcon={
                <Img
                  className="h-6 mr-2.5"
                  src="images/img_rewind.svg"
                  alt="rewind"
                />
              }
            >
              <div className="capitalize font-raleway font-semibold text-base text-left text-white-A700 tracking-[0.80px]">
                log out
              </div>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
