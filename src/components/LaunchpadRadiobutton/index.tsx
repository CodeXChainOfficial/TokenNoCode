import React from "react";

import { Img, Text } from "components";

type LaunchpadRadiobuttonProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "tokenholders" | "votingtext"
> &
  Partial<{ tokenholders: string; votingtext: string }>;

const LaunchpadRadiobutton: React.FC<LaunchpadRadiobuttonProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2 items-center justify-between w-full">
          <Text
            className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
            size="txtRalewayRomanSemiBold16WhiteA700"
          >
            {props?.tokenholders}
          </Text>
          <Img
            className="h-4 w-4"
            src="images/img_contrast.svg"
            alt="contrast"
          />
        </div>
        {!!props?.votingtext ? (
          <Text
            className="leading-[160.00%] max-w-[528px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
            size="txtRalewayRomanRegular16"
          >
            {props?.votingtext}
          </Text>
        ) : null}
      </div>
    </>
  );
};

LaunchpadRadiobutton.defaultProps = { tokenholders: "Token holders" };

export default LaunchpadRadiobutton;
