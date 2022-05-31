import { yupResolver } from "@hookform/resolvers/yup";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { darken } from "@material-ui/core/styles/colorManipulator";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch } from "react-redux";

import { submitLogin } from "app/auth/store/loginSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(to right, ${
      theme.palette.primary.dark
    } 0%, ${darken(theme.palette.primary.dark, 0.5)} 100%)`,
    color: theme.palette.primary.contrastText,
  },
  leftSection: {},
  rightSection: {
    background: `linear-gradient(to right, ${
      theme.palette.primary.dark
    } 0%, ${darken(theme.palette.primary.dark, 0.5)} 100%)`,
    color: theme.palette.primary.contrastText,
  },
}));

const defaultValues = {
  accountNumber: "988",
  password: "demo",
};

const schema = yup.object().shape({
  accountNumber: yup
    .string()
    .min(3, "Account is too short - should be at least 3 digits minimum.")
    .required("You must enter an account number"),
  password: yup
    .string()
    .required("Please enter your password.")
    .min(4, "Password is too short - should be 4 chars minimum."),
});

function Login() {
  const dispatch = useDispatch();
  const classes = useStyles();

  function onSubmit(model) {
    dispatch(submitLogin(model));
  }
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    setValue,
    formState,
    handleSubmit,
    reset,
    trigger,
    setError,
  } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  return (
    <div
      className={clsx(
        classes.root,
        "flex flex-col flex-auto items-center justify-center flex-shrink-0 p-16 md:p-24"
      )}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex w-full max-w-400 md:max-w-3xl rounded-20 shadow-2xl overflow-hidden"
      >
        <Card
          className={clsx(
            classes.leftSection,
            "flex flex-col w-full max-w-sm items-center justify-center shadow-0"
          )}
          square
        >
          <CardContent className="flex flex-col items-center justify-center w-full py-96 max-w-320">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
            >
              <div className="flex items-center mb-48">
                <img
                  className="logo-icon"
                  src="assets/images/logos/CustomerPortal.png"
                  alt="logo"
                />
              </div>
            </motion.div>
            <div className="w-full">
              <form
                className="flex flex-col justify-center w-full"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Controller
                  name="accountNumber"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mb-16"
                      type="number"
                      error={!!errors.accountNumber}
                      helperText={errors?.accountNumber?.message}
                      label="Account#"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className="text-20" color="action">
                              user
                            </Icon>
                          </InputAdornment>
                        ),
                      }}
                      variant="outlined"
                    />
                  )}
                />

                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mb-16"
                      label="Password"
                      type="password"
                      error={!!errors.password}
                      helperText={errors?.password?.message}
                      variant="outlined"
                      InputProps={{
                        className: "pr-2",
                        type: showPassword ? "text" : "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              <Icon className="text-20" color="action">
                                {showPassword ? "visibility" : "visibility_off"}
                              </Icon>
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      required
                    />
                  )}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="w-full mx-auto mt-16"
                  aria-label="LOG IN"
                  disabled={!isValid}
                  value="legacy"
                >
                  <Typography style={{ color: "white" }}>Login</Typography>
                </Button>
              </form>
            </div>
          </CardContent>

          <div className="flex flex-col items-center justify-center pb-32">
            <div>
              <span className="font-normal mr-8">Don't have an account?</span>
              <Link className="font-normal" to="/register">
                Register
              </Link>
            </div>
            <Link className="font-normal mt-8" to="/home">
              Back to Dashboard
            </Link>
          </div>
        </Card>

        <div
          className={clsx(
            classes.rightSection,
            "hidden md:flex flex-1 items-center justify-center p-64"
          )}
        >
          <div className="max-w-320">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            >
              <Typography
                variant="h3"
                color="inherit"
                className="font-semibold leading-tight"
              >
                Welcome <br />
                to the Lordco
                <br /> Customer Portal!
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
            >
              <Typography variant="subtitle1" color="inherit" className="mt-32">
                Delivering a better customer experience!
              </Typography>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
