import React from "react";

import { Button, Text } from "components";

type MyTokenReadContractDetailAllAllowenceProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "allowancetext" | "checkdetailbutton"
> &
  Partial<{ allowancetext: string; checkdetailbutton: string }>;

const MyTokenReadContractDetailAllAllowence: React.FC<
  MyTokenReadContractDetailAllAllowenceProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row md:gap-10 items-center justify-between w-full">
          <Text
            className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
            size="txtRalewayRomanSemiBold20"
          >
            {props?.allowancetext}
          </Text>
          {!!props?.checkdetailbutton ? (
            <Button className="bg-green-400 capitalize cursor-pointer font-raleway font-semibold min-w-[95px] py-1.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
              {props?.checkdetailbutton}
            </Button>
          ) : null}
        </div>
      </div>
    </>
  );
};

MyTokenReadContractDetailAllAllowence.defaultProps = {
  allowancetext: "Allowance",
};

export default MyTokenReadContractDetailAllAllowence;
