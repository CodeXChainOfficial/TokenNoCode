import React from "react";

import { Button, Img, List, Text } from "components";

type DAODefineAProcesdaoProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "selectedblockchain"
  | "daodescription"
  | "membershipdefinition"
  | "governancesettings"
> &
  Partial<{
    selectedblockchain: string;
    daodescription: string;
    membershipdefinition: string;
    governancesettings: string;
  }>;

const DAODefineAProcesdao: React.FC<DAODefineAProcesdaoProps> = (props) => {
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
              {props?.selectedblockchain}
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
                    {props?.daodescription}
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
                    {props?.membershipdefinition}
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
                    {props?.governancesettings}
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

DAODefineAProcesdao.defaultProps = {
  selectedblockchain: "Select blockchain",
  daodescription: "Describe your DAO",
  membershipdefinition: "Define membership",
  governancesettings: "Select governance settings",
};

export default DAODefineAProcesdao;
