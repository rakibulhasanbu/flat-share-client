import React from "react";
import { Empty } from "antd";
import AppErrorComponent from "./AppErrorComponent";
import AppLoading from "./AppLoading";

type Props = {
  queryData: any;
  showData: (data: any) => React.ReactNode;
  renderErrorComponent?: (error: any) => React.ReactNode;
  loadingComponent?: React.ReactNode;
  notAllowIsFetching?: boolean;
  isEmptyComponentHave?: boolean;
  dataCount?: number;
};

const AppRenderReduxData = ({
  queryData,
  showData,
  renderErrorComponent,
  loadingComponent,
  notAllowIsFetching,
  isEmptyComponentHave,
  dataCount
}: Props) => {
  const { data, isFetching, isLoading, isError, error } = queryData;

  // let getData = data?.data
  // if (dataCount === 3) {
  //   return getData = data?.data?.data;
  // }
  // console.log(getData, dataCount);
  let content;

  const shouldFetch = notAllowIsFetching === true ? false : isFetching;

  if (shouldFetch || isLoading) {
    content = loadingComponent || <AppLoading />;
  } else if (isError) {
    content = renderErrorComponent ? (
      renderErrorComponent(error)
    ) : (
      <AppErrorComponent />
    );

  } else if ((dataCount === 3 ? data?.data?.data : data?.data) && isEmptyComponentHave) {
    content = showData((dataCount === 3 ? data?.data?.data : data?.data));
  } else if ((dataCount === 3 ? data?.data?.data : data?.data)?.length > 0) {
    content = showData((dataCount === 3 ? data?.data : data));
  } else {
    content = (
      <Empty description="No Data Found" className="min-h-[70dvh] flex flex-col text-xl font-medium gap-4 items-center justify-center" />
    );
  }
  return <>{content}</>;
};

export default AppRenderReduxData;
