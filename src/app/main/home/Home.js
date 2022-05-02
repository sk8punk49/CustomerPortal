import HomeContent from "./HomeContent";
import FusePageSimple from "@fuse/core/FusePageSimple";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  layoutRoot: {},
});

function SimpleFullWidthSample() {
  const classes = useStyles();

  return (
    <FusePageSimple
      classes={{
        root: classes.layoutRoot,
      }}
      header={
        <div className="p-24">
          <h4>Home</h4>
        </div>
      }
      content={
        <div className="p-24">
          <HomeContent />
        </div>
      }
    />
  );
}

export default SimpleFullWidthSample;
