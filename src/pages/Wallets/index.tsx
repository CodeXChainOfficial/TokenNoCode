import React from "react";

import { Img, Text } from "components";
import WalletsWallet from "components/WalletsWallet";

const WalletsPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900_33 flex flex-col font-raleway items-center justify-end mx-auto p-[174px] md:px-10 sm:px-5 w-full">
        <WalletsWallet
          className="bg-gray-900_01 flex flex-col gap-8 items-center justify-center p-8 md:px-5 w-auto sm:w-full"
          verificationtext={
            <Text className="leading-[25.00px] ml-0.5 sm:ml-[0] text-base text-center text-white-A700 w-[96%] sm:w-full">
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
          }
        />
      </div>
    </>
  );
};

export default WalletsPage;
