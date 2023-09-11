import React from "react";

import { Button, Img, List, Text } from "components";
import CreateTokenHomepageFooterexplorer from "components/CreateTokenHomepageFooterexplorer";
import Header from "components/Header";

const AccountsuccesscontributordeveloperOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-center justify-end mx-auto w-full">
        <Header className="bg-black-900_cc flex md:flex-col md:gap-10 items-center justify-between px-20 md:px-5 w-full" />
        <Img
          className="h-px mt-[156px] w-px"
          src="images/img_vector.svg"
          alt="vector"
        />
        <List
          className="flex flex-col font-inter gap-[1390px] items-center mt-[651px] w-full"
          orientation="vertical"
        >
          <CreateTokenHomepageFooterexplorer className="bg-gray-900 flex flex-1 flex-col gap-8 items-center justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 py-4 w-full" />
          <CreateTokenHomepageFooterexplorer className="bg-gray-900 flex flex-1 flex-col gap-8 items-center justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 py-4 w-full" />
        </List>
      </div>
    </>
  );
};

export default AccountsuccesscontributordeveloperOnePage;
