import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function AccountInformationTab() {
  const user = useSelector(({ auth }) => auth.user);

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <div className="m-8">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={8}>
          <BasicAccountInformation />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ProgramInformation />
        </Grid>
      </Grid>
    </div>


  );
}

export default AccountInformationTab;
