import React from "react";

import { Img, Text } from "components";

type WalletsWalletProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "logintext"
  | "verificationtext"
  | "maiarlogintext"
  | "qrcodetext"
  | "legacytext"
> &
  Partial<{
    logintext: string;
    verificationtext: JSX.Element | string;
    maiarlogintext: string;
    qrcodetext: string;
    legacytext: string;
  }>;

const WalletsWallet: React.FC<WalletsWalletProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row h-[73px] md:h-auto items-center justify-between w-[486px] sm:w-full">
          <div className="flex flex-row gap-3 items-center justify-center w-auto">
            <Text
              className="text-lg text-white-A700 w-auto"
              size="txtRalewayRomanSemiBold18"
            >
              {props?.logintext}
            </Text>
            <Img className="h-6 w-6" src="images/img_icon.svg" alt="icon" />
          </div>
          <div className="bg-gray-900_02 flex flex-col items-center justify-center sm:px-5 px-[23px] py-1.5 rounded-[5px] w-auto">
            <Img
              className="h-6 w-6"
              src="images/img_closeremove.svg"
              alt="closeremove"
            />
          </div>
        </div>
        <div className="bg-blue_gray-900 flex flex-col items-center justify-start p-2.5 rounded-[12px] w-[89%] md:w-full">
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mb-3 w-[93%] md:w-full">
            <Img
              className="h-4 sm:mt-0 mt-1"
              src="images/img_lock.svg"
              alt="lock"
            />
            {props?.verificationtext}
          </div>
        </div>
        <div className="h-[252px] relative w-[251px]">
          <div className="absolute bg-white-A700 h-[252px] inset-[0] justify-center m-auto w-[99%]"></div>
          <Img
            className="absolute h-[252px] inset-[0] justify-center m-auto object-cover w-[251px]"
            src="images/img_image85.png"
            alt="imageEightyFive"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-auto">
          <div className="flex flex-col gap-3 items-center justify-start w-auto">
            <Text
              className="text-lg text-white-A700 w-auto"
              size="txtRalewayRomanSemiBold18"
            >
              {props?.maiarlogintext}
            </Text>
            <Text
              className="text-base text-white-A700 w-auto"
              size="txtInterMedium16"
            >
              {props?.qrcodetext}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-auto">
          <Text
            className="text-base text-light_blue-A700 w-auto"
            size="txtInterMedium16LightblueA700"
          >
            {props?.legacytext}
          </Text>
        </div>
      </div>
    </>
  );
};

WalletsWallet.defaultProps = {
  logintext: "Login with Maiar",
  verificationtext: (
    <Text
      className="leading-[25.00px] ml-0.5 sm:ml-[0] text-base text-center text-white-A700 w-[96%] sm:w-full"
      size="txtInterRegular16WhiteA700"
    >
      <span className="text-white-A700 tracking-[0.60px] font-inter capitalize text-xs font-semibold">
        Scam/Phishing verification:{" "}
      </span>
      <span className="text-light_blue-600_01 tracking-[0.60px] font-inter capitalize text-xs font-semibold">
        https://
      </span>
      <span className="text-white-A700 tracking-[0.60px] font-inter capitalize text-xs font-semibold">
        Codexchain.xyz check the website link carefully!
      </span>
    </Text>
  ),
  maiarlogintext: "Maiar Login",
  qrcodetext: "Scan the QR code using Maiar",
  legacytext: "Unable to login? Use the legacy version",
};

export default WalletsWallet;
