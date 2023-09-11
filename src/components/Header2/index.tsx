import React from "react";

import { Button, Img, Text } from "components";

type Header2Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header2: React.FC<Header2Props> = (props) => {
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
          <Button
            className="bg-black-900_01 border border-gray-900 border-solid cursor-pointer flex items-center justify-center px-[15px] py-2 rounded-lg w-[200px]"
            rightIcon={
              <Img
                className="h-6 mb-px ml-3"
                src="images/img_search.svg"
                alt="search"
              />
            }
          >
            <div className="capitalize font-raleway font-semibold text-base text-left text-white-A700_87 tracking-[0.80px]">
              search explorer
            </div>
          </Button>
          <ul className="flex sm:flex-col flex-row gap-8 sm:hidden items-start justify-start w-auto sm:w-full common-row-list">
            <li>
              <Text
                className="capitalize text-base text-white-A700_87 tracking-[0.80px]"
                size="txtRalewayRomanSemiBold16WhiteA70087"
              >
                everything{" "}
              </Text>
            </li>
            <li>
              <Text
                className="capitalize text-base text-white-A700_87 tracking-[0.80px]"
                size="txtRalewayRomanSemiBold16WhiteA70087"
              >
                about
              </Text>
            </li>
            <li>
              <Text
                className="capitalize text-base text-white-A700_87 tracking-[0.80px]"
                size="txtRalewayRomanSemiBold16WhiteA70087"
              >
                groups
              </Text>
            </li>
            <li>
              <Text
                className="capitalize text-base text-white-A700_87 tracking-[0.80px]"
                size="txtRalewayRomanSemiBold16WhiteA70087"
              >
                docs
              </Text>
            </li>
            <li>
              <Text
                className="capitalize text-base text-white-A700_87 tracking-[0.80px]"
                size="txtRalewayRomanSemiBold16WhiteA70087"
              >
                more
              </Text>
            </li>
          </ul>
          <div className="flex flex-row gap-4 items-start justify-start w-auto">
            <Button className="bg-white-A700_19 flex h-8 items-center justify-center p-[5px] rounded-lg w-8">
              <Img src="images/img_user_light_blue_500.svg" alt="user" />
            </Button>
            <div className="bg-white-A700_19 md:h-6 h-8 p-1 relative rounded-lg w-8">
              <Img
                className="h-6 m-auto w-6"
                src="images/img_map.svg"
                alt="map"
              />
              <Text
                className="absolute inset-x-[0] mx-auto text-base text-white-A700 top-[13%] tracking-[0.80px] w-max"
                size="txtRalewayRomanMedium16WhiteA700"
              >
                7
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-8">
              <div className="flex flex-col items-start justify-start w-8">
                <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-8 items-center justify-start rounded-[50%] w-8">
                  <Img
                    className="h-8 md:h-auto rounded-[50%] w-8"
                    src="images/img_image382.png"
                    alt="image382"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header2.defaultProps = {};

export default Header2;
