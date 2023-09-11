import React from "react";

import { Button, Img, Text } from "components";

type CreateTokenPageSelectBlockchainRowframe370829Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "codexmainnet"
> &
  Partial<{ codexmainnet: string }>;

const CreateTokenPageSelectBlockchainRowframe370829: React.FC<
  CreateTokenPageSelectBlockchainRowframe370829Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
          <Button className="bg-black-900_01 flex h-12 items-center justify-center p-1.5 rounded-[50%] w-12">
            <Img
              className="h-[33px]"
              src="images/img_codex11.png"
              alt="frame370829"
            />
          </Button>
        </div>
        <Text
          className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
          size="txtRalewayRomanSemiBold20WhiteA700"
        >
          {props?.codexmainnet}
        </Text>
      </div>
    </>
  );
};

CreateTokenPageSelectBlockchainRowframe370829.defaultProps = {
  codexmainnet: "codex mainnet",
};

export default CreateTokenPageSelectBlockchainRowframe370829;
