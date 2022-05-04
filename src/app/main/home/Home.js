import FusePageSimple from '@fuse/core/FusePageSimple';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import withReducer from 'app/store/withReducer';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import _ from '@lodash';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProjectDashboardAppHeader from './ProjectDashboardAppHeader';

import reducer from './store';



const useStyles = makeStyles((theme) => ({
  content: {
    '& canvas': {
      maxHeight: '100%',
    },
  },
}));

function Home() {
  const classes = useStyles();
  const pageLayout = useRef(null);
  return (
    <FusePageSimple
      classes={{
        header:
          'min-h-160 h-160 lg:ltr:rounded-br-20 lg:rtl:rounded-bl-20 lg:ltr:mr-12 lg:rtl:ml-12',
        toolbar: 'min-h-56 h-56 items-end',
        rightSidebar: 'w-288 border-0 py-12',
        content: classes.content,
      }}
      header={
        <div className="flex flex-col justify-between flex-1 min-w-0 px-24 pt-24">
          <div className="flex justify-between items-center">
            <div className="flex items-center min-w-0">

            <Avatar
              className="w-52 h-52 sm:w-64 sm:h-64"
              alt="user photo"
              src=""
            />
<div className="mx-12 min-w-0">
            <Typography className="text-18 sm:text-24 md:text-32 font-bold leading-none mb-8 tracking-tight">
              Welcome back, John Doe!
            </Typography>

            <div className="flex items-center opacity-60 truncate">
              <Icon className="text-14 sm:text-24">notifications</Icon>
              <Typography className="text-12 sm:text-14 font-medium mx-4 truncate">
                You have 2 new messages and 15 new tasks
              </Typography>
            </div>
          </div>
          </div>
        </div>
      
      </div>
      }
      content={
        <div>
          <h1>Home Works</h1>
        </div>
      }

      ref={pageLayout}
    />
  );
}

export default withReducer('Home', reducer)(Home);