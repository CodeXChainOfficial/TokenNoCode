import React from "react";

import { Button, Img, List, Text } from "components";

type DAODefineTokenHolderProcesdaoProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "selectblockchain"
  | "describeyourdao"
  | "definemembership"
  | "selectgovernancesettings"
> &
  Partial<{
    selectblockchain: string;
    describeyourdao: string;
    definemembership: string;
    selectgovernancesettings: string;
  }>;

const DAODefineTokenHolderProcesdao: React.FC<
  DAODefineTokenHolderProcesdaoProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-16 w-[892px]"
          src="images/img_frame371143.svg"
          alt="frame371143"
        />
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start w-auto md:w-full">
          <div className="flex flex-col items-center justify-start w-auto">
            <Button className="bg-black-900 capitalize cursor-pointer font-raleway font-semibold py-[35px] rounded-lg text-center text-white-A700_e5 text-xl tracking-[1.00px] w-[200px]">
              {props?.selectblockchain}
            </Button>
          </div>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-20 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[74%] md:w-full"
            orientation="horizontal"
          >
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="bg-black-900 flex flex-col items-center justify-start px-4 py-8 rounded-lg w-[200px]">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="capitalize leading-[160.00%] max-w-[168px] md:max-w-full text-center text-white-A700_e5 text-xl tracking-[1.00px]"
                    size="txtRalewayRomanSemiBold20WhiteA700e5"
                  >
                    {props?.describeyourdao}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="bg-black-900 flex flex-col items-center justify-start px-4 py-8 rounded-lg w-[200px]">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="capitalize leading-[160.00%] max-w-[168px] md:max-w-full text-center text-white-A700_e5 text-xl tracking-[1.00px]"
                    size="txtRalewayRomanSemiBold20WhiteA700e5"
                  >
                    {props?.definemembership}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="bg-black-900 flex flex-col items-center justify-start px-4 py-8 rounded-lg w-[200px]">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="capitalize leading-[160.00%] max-w-[168px] md:max-w-full text-center text-white-A700_e5 text-xl tracking-[1.00px]"
                    size="txtRalewayRomanSemiBold20WhiteA700e5"
                  >
                    {props?.selectgovernancesettings}
                  </Text>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

DAODefineTokenHolderProcesdao.defaultProps = {
  selectblockchain: "Select blockchain",
  describeyourdao: "Describe your DAO",
  definemembership: "Define membership",
  selectgovernancesettings: "Select governance settings",
};

export default DAODefineTokenHolderProcesdao;
