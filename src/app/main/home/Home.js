import FusePageCarded from "@fuse/core/FusePageCarded";
import Divider from "@material-ui/core/Divider";
import withReducer from "app/store/withReducer";
import _ from "@lodash";
import HomeHeader from "./HomeHeader";
import reducer from "./store";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeDashboardTab from "./tabs/HomeDashboardTab";
import DiscountTab from "./tabs/DiscountTab";
import { getWidgets, selectWidgets } from "./store/widgetsSlice";
import AccountInformationTab from "./tabs/AccountInformationTab";

function Home(props) {
  const dispatch = useDispatch();

  const widgets = useSelector(selectWidgets);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    dispatch(getWidgets());
  }, [dispatch]);

  function handleChangeTab(event, value) {
    setTabValue(value);
  }

  if (_.isEmpty(widgets)) {
    return null;
  }

  return (
    <FusePageCarded
      classes={{
        content: "flex",
        contentCard: "overflow-hidden",
        header: "min-h-72 h-72 sm:h-136 sm:min-h-136",
      }}
      header={<HomeHeader />}
      contentToolbar={
        <Tabs
          value={tabValue}
          onChange={handleChangeTab}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons="off"
          className="w-full px-24 -mx-4 min-h-40"
          classes={{
            indicator: "flex justify-center bg-transparent w-full h-full",
          }}
          TabIndicatorProps={{
            children: (
              <Divider className="w-full h-full rounded-full opacity-50" />
            ),
          }}
        >
          <Tab
            className="text-14 font-semibold min-h-40 min-w-64 mx-4"
            disableRipple
            label="Summary"
          />
          <Tab
            className="text-14 font-semibold min-h-40 min-w-64 mx-4"
            disableRipple
            label="Account"
          />
          <Tab
            className="text-14 font-semibold min-h-40 min-w-64 mx-4"
            disableRipple
            label="Discounts"
          />
        </Tabs>
      }
      content={
        <div className="w-full">
          {tabValue === 0 && <HomeDashboardTab />}
          {tabValue === 1 && <AccountInformationTab />}
          {tabValue === 2 && <DiscountTab />}
        </div>
      }
      innerScroll
    />
  );
}

export default withReducer("Home", reducer)(Home);
