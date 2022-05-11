import Icon from "@material-ui/core/Icon";

import { makeStyles } from "@material-ui/core/styles";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import Typography from "@material-ui/core/Typography";

import { useSelector } from "react-redux";
import _ from "@lodash";

const useStyles = makeStyles((theme) => ({
  selectedProject: {
    background: lighten(theme.palette.primary.dark, 0.1),
    color: theme.palette.primary.contrastText,
    borderRadius: "16px 0 0 0",
  },
  projectMenuButton: {
    background: lighten(theme.palette.primary.dark, 0.1),
    color: theme.palette.primary.contrastText,
    borderRadius: "0 16px 0 0",
    marginLeft: 1,
  },
}));

function HomeHeader() {
  const user = useSelector(({ auth }) => auth.user);

  return (
    <div className="flex flex-col justify-between flex-1 min-w-0 px-24 pt-24">
      <div className="flex justify-between items-center">
        <div className="flex items-center min-w-0">
          <div className="mx-12 min-w-0">
            <Typography className="text-18 sm:text-24 md:text-32 font-bold leading-none mb-8 tracking-tight">
              {user.data.companyName}
            </Typography>

            <div className="flex items-center opacity-60 truncate">
              <Icon className="text-14 sm:text-24">account_circle</Icon>
              <Typography className="text-12 sm:text-14 font-medium mx-4 truncate">
                Account #{user.data.accountNumber}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
