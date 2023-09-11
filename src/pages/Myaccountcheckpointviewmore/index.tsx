import React from "react";

import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, List, ReactTable, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import MyTokenReadContractDetailAllAllowence from "components/MyTokenReadContractDetailAllAllowence";

type Table2RowType = {
  numberofpoints: string;
  pointsearned: string;
  latestpoints: string;
  date: string;
  time: string;
  status: string;
};

const MyaccountcheckpointviewmorePage: React.FC = () => {
  const table2Data = React.useRef<Table2RowType[]>([
    {
      numberofpoints: "78",
      pointsearned: "20",
      latestpoints: "58",
      date: "25/05/2023",
      time: "04.32",
      status: "contributed",
    },
    {
      numberofpoints: "58",
      pointsearned: "-",
      latestpoints: "25",
      date: "25/05/2023",
      time: "04.32",
      status: "violance",
    },
    {
      numberofpoints: "48",
      pointsearned: "-",
      latestpoints: "44",
      date: "25/05/2023",
      time: "04.32",
      status: "violance",
    },
  ]);
  const navigate = useNavigate();
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper<Table2RowType>();
    return [
      table2ColumnHelper.accessor("numberofpoints", {
        cell: (info) => (
          <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-medium py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px]">
            <div className="bg-black-900_01 border border-black-900_01 border-solid text-white-A700_e5">
              {info?.getValue()}
            </div>
          </Button>
        ),
        header: (info) => (
          <Button className="border border-black-900_01 border-solid capitalize cursor-pointer font-medium min-w-[202px] py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px]">
            <div className="min-w-[202px]">number of points</div>
          </Button>
        ),
      }),
      table2ColumnHelper.accessor("pointsearned", {
        cell: (info) => (
          <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-medium py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px]">
            <div className="bg-black-900_01 border border-black-900_01 border-solid text-white-A700_e5">
              {info?.getValue()}
            </div>
          </Button>
        ),
        header: (info) => (
          <Button className="border border-black-900_01 border-solid capitalize cursor-pointer font-medium min-w-[202px] py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px]">
            <div className="min-w-[202px]">points earned </div>
          </Button>
        ),
      }),
      table2ColumnHelper.accessor("latestpoints", {
        cell: (info) => (
          <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-medium py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px]">
            <div className="bg-black-900_01 border border-black-900_01 border-solid text-white-A700_e5">
              {info?.getValue()}
            </div>
          </Button>
        ),
        header: (info) => (
          <Button className="border border-black-900_01 border-solid capitalize cursor-pointer font-medium min-w-[202px] py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px]">
            <div className="min-w-[202px]">latest points</div>
          </Button>
        ),
      }),
      table2ColumnHelper.accessor("date", {
        cell: (info) => (
          <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-medium py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px]">
            <div className="bg-black-900_01 border border-black-900_01 border-solid text-white-A700_e5">
              {info?.getValue()}
            </div>
          </Button>
        ),
        header: (info) => (
          <Button className="border border-black-900_01 border-solid capitalize cursor-pointer font-medium min-w-[202px] py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px]">
            <div className="min-w-[202px]">date</div>
          </Button>
        ),
      }),
      table2ColumnHelper.accessor("time", {
        cell: (info) => (
          <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-medium py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px]">
            <div className="bg-black-900_01 border border-black-900_01 border-solid text-white-A700_e5">
              {info?.getValue()}
            </div>
          </Button>
        ),
        header: (info) => (
          <Button className="border border-black-900_01 border-solid capitalize cursor-pointer font-medium min-w-[202px] py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px]">
            <div className="min-w-[202px]">time</div>
          </Button>
        ),
      }),
      table2ColumnHelper.accessor("status", {
        cell: (info) => (
          <Button className="bg-black-900_01 border border-black-900_01 border-solid capitalize cursor-pointer font-medium py-[11px] text-base text-center text-green-400 tracking-[0.80px]">
            <div className="bg-black-900_01 border border-black-900_01 border-solid text-green-400">
              {info?.getValue()}
            </div>
          </Button>
        ),
        header: (info) => (
          <Button className="border border-black-900_01 border-solid capitalize cursor-pointer font-medium min-w-[202px] py-[11px] text-base text-center text-white-A700_e5 tracking-[0.80px]">
            <div className="min-w-[202px]">status</div>
          </Button>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-center justify-start mx-auto w-full">
        <Header className="bg-black-900_cc flex md:flex-col md:gap-10 items-center justify-between px-20 md:px-5 w-full" />
        <div className="bg-black-900 flex flex-col items-start justify-start mt-8 w-auto md:w-full">
          <div className="bg-black-900 flex sm:flex-col flex-row gap-2.5 items-start justify-start px-20 md:px-5 w-auto md:w-full">
            <Text
              className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px] w-auto"
              size="txtRalewayRomanSemiBold48"
            >
              my account
            </Text>
            <Input
              name="frame371293"
              placeholder="general users"
              className="capitalize font-semibold p-0 placeholder:text-white-A700 sm:px-5 text-base text-left text-white-A700 tracking-[0.80px] w-full"
              wrapClassName="bg-green-400 px-8 py-[7px] rounded-br-[32px] rounded-tl-[32px] w-[38%] sm:w-full"
            ></Input>
          </div>
          <Img
            className="h-[78px] w-[1440px]"
            src="images/img_frame371143.svg"
            alt="group370743"
          />
        </div>
        <div className="flex md:flex-col flex-row gap-6 items-center justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 w-full">
          <div className="bg-black-900_01 flex sm:flex-1 flex-col gap-4 items-start justify-start p-8 md:px-5 rounded-lg w-[412px] sm:w-full">
            <Text
              className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
              size="txtRalewayRomanSemiBold20"
            >
              Username
            </Text>
            <div className="flex flex-col gap-4 items-end justify-end w-auto">
              <div className="bg-black-900_01 flex flex-col items-start justify-start w-[348px]">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA700e5"
                    >
                      Edit username
                    </Text>
                    <Input
                      name="frame370927"
                      placeholder="enter token address"
                      className="capitalize font-semibold p-0 placeholder:text-white-A700_99 text-base text-left text-white-A700_99 tracking-[0.80px] w-full"
                      wrapClassName="border border-solid border-white-A700_19 pl-4 pr-3 py-[11px] rounded-lg w-full"
                    ></Input>
                  </div>
                </div>
              </div>
              <Button className="bg-gradient1  capitalize cursor-pointer font-semibold min-w-[85px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
                Edited
              </Button>
            </div>
          </div>
          <div className="bg-black-900_01 flex flex-1 flex-col gap-4 items-start justify-start p-8 md:px-5 rounded-lg w-full">
            <Text
              className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
              size="txtRalewayRomanSemiBold20"
            >
              Account info
            </Text>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <div className="bg-black-900_01 flex flex-1 flex-col gap-2 items-start justify-start px-4 py-2 w-full">
                <Text
                  className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                  size="txtRalewayRomanSemiBold16WhiteA700e5"
                >
                  Github
                </Text>
                <Text
                  className="capitalize text-green-400 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20Green400"
                >
                  jilly77
                </Text>
              </div>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 grid-cols-3 w-3/4 md:w-full"
                orientation="horizontal"
              >
                <div className="bg-black-900_01 flex flex-col gap-2 items-start justify-start px-4 py-2 w-full">
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA700e5"
                    >
                      Total points
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_materialsymbol.svg"
                      alt="materialsymbol"
                    />
                  </div>
                  <Text
                    className="capitalize text-green-400 text-xl tracking-[1.00px]"
                    size="txtRalewayRomanSemiBold20Green400"
                  >
                    78
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-col gap-2 items-start justify-start px-4 py-2 w-full">
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA700e5"
                    >
                      Total Projects
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_materialsymbol.svg"
                      alt="materialsymbol"
                    />
                  </div>
                  <Text
                    className="capitalize text-green-400 text-xl tracking-[1.00px]"
                    size="txtRalewayRomanSemiBold20Green400"
                  >
                    77
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-col gap-2 items-start justify-start px-4 py-2 w-full">
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA700e5"
                    >
                      {" "}
                      Total reward
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_materialsymbol.svg"
                      alt="materialsymbol"
                    />
                  </div>
                  <Text
                    className="capitalize text-green-400 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20Green400"
                  >
                    1.000.000
                  </Text>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="bg-black-900 flex flex-col gap-2 items-start justify-start max-w-7xl mt-8 mx-auto md:px-5 w-full">
          <div className="flex flex-col items-start justify-start w-auto">
            <div className="flex flex-col items-start justify-start px-4 py-2 w-auto">
              <Text
                className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                size="txtRalewayRomanSemiBold20WhiteA700"
              >
                Account Detail
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-start justify-start w-full">
            <div className="flex flex-col gap-4 items-start justify-start py-4 w-auto md:w-full">
              <MyTokenReadContractDetailAllAllowence
                className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between max-w-7xl sm:px-5 px-8 py-4 rounded-lg w-full"
                allowancetext="Check Points"
              />
              <div className="overflow-auto bg-black-900 gap-4 sm:px-5 px-8 py-4 w-full">
                <ReactTable
                  columns={table2Columns}
                  data={table2Data.current}
                  rowClass={"bg-black-900_01"}
                  headerClass="bg-black-900_01"
                />
              </div>
              <div className="flex flex-col items-end justify-start sm:px-5 px-8 w-full">
                <Button
                  className="common-pointer bg-deep_purple-A200 capitalize cursor-pointer font-semibold min-w-[81px] py-1.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]"
                  onClick={() => navigate("/myaccountcheckpointsviewmore")}
                >
                  view more
                </Button>
              </div>
            </div>
            <MyTokenReadContractDetailAllAllowence
              className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between sm:px-5 px-8 py-4 rounded-lg w-full"
              allowancetext="Contributed Projects"
            />
            <MyTokenReadContractDetailAllAllowence
              className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between sm:px-5 px-8 py-4 rounded-lg w-full"
              allowancetext="Reward transaction"
            />
            <MyTokenReadContractDetailAllAllowence
              className="bg-black-900_01 flex flex-row gap-2.5 items-center justify-between sm:px-5 px-8 py-4 rounded-lg w-full"
              allowancetext="Deleted Account"
            />
          </div>
        </div>
        <Footer className="bg-gray-900 flex font-inter gap-8 items-center justify-center mt-[189px] px-20 md:px-5 py-4 w-full" />
      </div>
    </>
  );
};

export default MyaccountcheckpointviewmorePage;
