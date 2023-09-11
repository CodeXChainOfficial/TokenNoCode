import React from "react";

import { Img, List, Text } from "components";

type NOCODENFTFeaturesColumnframe371101Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "contracttype"
  | "erc721erc721a"
  | "blockchain"
  | "blockchaintodeploy"
  | "generalinfo"
  | "smartcontractname"
  | "features"
  | "delayedreveal"
  | "marketplace"
  | "collectionname"
  | "deploy"
  | "verifyandpublish"
> &
  Partial<{
    contracttype: string;
    erc721erc721a: string;
    blockchain: string;
    blockchaintodeploy: string;
    generalinfo: string;
    smartcontractname: string;
    features: string;
    delayedreveal: string;
    marketplace: string;
    collectionname: string;
    deploy: string;
    verifyandpublish: string;
  }>;

const NOCODENFTFeaturesColumnframe371101: React.FC<
  NOCODENFTFeaturesColumnframe371101Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-16 w-[1164px]"
          src="images/img_frame371101_white_a700_64x1164.svg"
          alt="frame371101"
        />
        <List
          className="bg-black-900 sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-start w-auto md:w-full"
          orientation="horizontal"
        >
          <div className="bg-black-900 flex flex-col items-center justify-start px-4 py-8 rounded-lg w-[200px]">
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="capitalize text-white-A700_e5 text-xl tracking-[1.00px] w-auto"
                size="txtRalewayRomanSemiBold20WhiteA700e5"
              >
                {props?.contracttype}
              </Text>
              <Text
                className="capitalize leading-[160.00%] max-w-[145px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                size="txtRalewayRomanMedium16WhiteA700e5"
              >
                {props?.erc721erc721a}
              </Text>
            </div>
          </div>
          <div className="bg-black-900 flex flex-col items-center justify-start px-4 py-8 rounded-lg w-[200px]">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="capitalize text-white-A700_e5 text-xl tracking-[1.00px] w-auto"
                size="txtRalewayRomanSemiBold20WhiteA700e5"
              >
                {props?.blockchain}
              </Text>
              <Text
                className="capitalize leading-[160.00%] max-w-[168px] md:max-w-full text-base text-center text-white-A700_e5 tracking-[0.80px]"
                size="txtRalewayRomanMedium16WhiteA700e5"
              >
                {props?.blockchaintodeploy}
              </Text>
            </div>
          </div>
          <div className="bg-black-900 flex flex-col items-center justify-start px-4 py-8 rounded-lg w-[200px]">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="capitalize text-white-A700_e5 text-xl tracking-[1.00px] w-auto"
                size="txtRalewayRomanSemiBold20WhiteA700e5"
              >
                {props?.generalinfo}
              </Text>
              <Text
                className="capitalize leading-[160.00%] max-w-[168px] md:max-w-full text-base text-center text-white-A700_e5 tracking-[0.80px]"
                size="txtRalewayRomanMedium16WhiteA700e5"
              >
                {props?.smartcontractname}
              </Text>
            </div>
          </div>
          <div className="bg-black-900 flex flex-col items-center justify-start px-4 py-8 rounded-lg w-[200px]">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="capitalize text-white-A700_e5 text-xl tracking-[1.00px] w-auto"
                size="txtRalewayRomanSemiBold20WhiteA700e5"
              >
                {props?.features}
              </Text>
              <Text
                className="capitalize leading-[160.00%] max-w-[168px] md:max-w-full text-base text-center text-white-A700_e5 tracking-[0.80px]"
                size="txtRalewayRomanMedium16WhiteA700e5"
              >
                {props?.delayedreveal}
              </Text>
            </div>
          </div>
          <div className="bg-black-900 flex flex-col items-center justify-start px-4 py-8 rounded-lg w-[200px]">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="capitalize text-white-A700_e5 text-xl tracking-[1.00px] w-auto"
                size="txtRalewayRomanSemiBold20WhiteA700e5"
              >
                {props?.marketplace}
              </Text>
              <Text
                className="capitalize leading-[160.00%] max-w-[168px] md:max-w-full text-base text-center text-white-A700_e5 tracking-[0.80px]"
                size="txtRalewayRomanMedium16WhiteA700e5"
              >
                {props?.collectionname}
              </Text>
            </div>
          </div>
          <div className="bg-black-900 flex flex-col items-center justify-start px-4 py-8 rounded-lg w-[200px]">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="capitalize text-white-A700_e5 text-xl tracking-[1.00px] w-auto"
                size="txtRalewayRomanSemiBold20WhiteA700e5"
              >
                {props?.deploy}
              </Text>
              <Text
                className="capitalize leading-[160.00%] max-w-[168px] md:max-w-full text-base text-center text-white-A700_e5 tracking-[0.80px]"
                size="txtRalewayRomanMedium16WhiteA700e5"
              >
                {props?.verifyandpublish}
              </Text>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

NOCODENFTFeaturesColumnframe371101.defaultProps = {
  contracttype: "Contract Type",
  erc721erc721a: "ERC721, ERC721A, etc",
  blockchain: "Blockchain",
  blockchaintodeploy: "Blockchain to deploy smart contract to",
  generalinfo: "General Info",
  smartcontractname: "Smart contract name, symbol, etc.",
  features: "Features",
  delayedreveal: "Delayed reveal, whitelist, etc.",
  marketplace: "Marketplace",
  collectionname: "Collection name, royalties, etc.",
  deploy: "Deploy",
  verifyandpublish: "Verify and publish the smart contract",
};

export default NOCODENFTFeaturesColumnframe371101;
