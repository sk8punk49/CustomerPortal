import FuseUtils from "@fuse/utils";
import _ from "@lodash";
import jwt from "jsonwebtoken";
import mock from "../mock";
/* eslint-disable camelcase */

// const jwtConfig = {
//   secret: "some-secret-code-goes-here",
//   expiresIn: "1 days", // A numeric value is interpreted as a seconds count. If you use a string be sure you provide the time units (days, hours, etc)
// };
const jwtConfig = {
  secret: "some-secret-code-goes-here",
  expiresIn: "1 minute", // A numeric value is interpreted as a seconds count. If you use a string be sure you provide the time units (days, hours, etc)
};

const authDB = {
  users: [
    {
      uuid: "69XgbuVEXBU5gtSKdbQRP1Zbbby1i1",
      from: "custom-db",
      password: "demo",
      role: ["user"], // admin, user or [] guest
      redirectUrl: "/home",
      data: {
        displayName: "Adam Sinkie",
        companyName: "Budget Brake and Muffler",
        accountNumber: "988",
        address1: "	1st Professional Auto Lt",
        address2: "	2561 Barnet Hwy",
        city: "Coquitlam",
        province: "BC",
        postalCode: "V3H1W4",
        phoneNumber: "(604) 464-2331",
        primaryBranch: "#6 - Coquitlam",
        salesPerson: "Darcy Harvey",
        photoURL: "assets/images/avatars/Velazquez.jpg",
        companyLogoURL: "assets/images/customerLogos/budgetBrake.png",
        email: "johndoe@budget.com",
        shortcuts: ["home"],
        settings: {
          layout: {
            style: "layout2",
            config: {
              scroll: "content",
              navbar: {
                display: true,
                folded: true,
                position: "left",
              },
              toolbar: {
                display: true,
                style: "fixed",
                position: "below",
              },
              footer: {
                display: true,
                style: "fixed",
                position: "below",
              },
              mode: "container",
            },
          },
          customScrollbars: true,
          theme: {
            main: "lordcoDefault",
            navbar: "lordcoDefault",
            toolbar: "lordcoDefault",
            footer: "lordcoDefault",
          },
        },
      },
    },
    {
      uuid: "2XgbuVEXBU5gtSKdbQRP1Zbbby1i1",
      from: "custom-db",
      password: "demo",
      role: ["user"], // admin, user or [] guest
      redirectUrl: "/home",
      data: {
        displayName: "Ian Macintosh",
        companyName: "Kirmac Newton",
        accountNumber: "4812",
        address1: "13535 - 72nd  Avenue",
        address2: "",
        city: "Surrey",
        province: "BC",
        postalCode: "V3W2N9",
        phoneNumber: "(604) 464-2331",
        primaryBranch: "#27 - Surrey",
        salesPerson: "Kirmac",
        photoURL: "assets/images/avatars/Velazquez.jpg",
        companyLogoURL: "assets/images/customerLogos/budgetBrake.png",
        email: "johndoe@budget.com",
        shortcuts: ["calendar", "mail", "contacts", "todo"],
      },
    },
    {
      uuid: "XgbuVEXBU5gtSKdbQRP1Zbbby1i1",
      from: "custom-db",
      password: "demo",
      role: "admin",
      data: {
        accountNumber: "1020",
        displayName: "Budget Brake and Muffler",
        photoURL: "assets/images/avatars/Abbott.jpg",
        email: "admin@fusetheme.com",
        settings: {
          layout: {
            style: "layout2",
            config: {
              scroll: "content",
              navbar: {
                display: true,
                folded: true,
                position: "left",
              },
              toolbar: {
                display: true,
                style: "fixed",
                position: "below",
              },
              footer: {
                display: true,
                style: "fixed",
                position: "below",
              },
              mode: "fullwidth",
            },
          },
          customScrollbars: true,
          theme: {
            main: "lordcoDefault",
            navbar: "lordcoDefault",
            toolbar: "lordcoDefault",
            footer: "lordcoDefault",
          },
        },
        shortcuts: ["calendar", "mail", "contacts"],
      },
    },
    {
      uuid: "XgbuVEXBU6gtSKdbTYR1Zbbby1i3",
      from: "custom-db",
      password: "staff",
      role: "staff",
      data: {
        accountNumber: "1020",
        displayName: "Arnold Matlock",
        photoURL: "assets/images/avatars/Arnold.jpg",
        email: "staff@fusetheme.com",
        settings: {
          layout: {
            style: "layout2",
            config: {
              mode: "boxed",
              scroll: "content",
              navbar: {
                display: true,
              },
              toolbar: {
                display: true,
                position: "below",
              },
              footer: {
                display: true,
                style: "fixed",
              },
            },
          },
          customScrollbars: true,
          theme: {
            main: "greeny",
            navbar: "mainThemeDark",
            toolbar: "mainThemeDark",
            footer: "mainThemeDark",
          },
        },
        shortcuts: ["calendar", "mail", "contacts", "todo"],
      },
    },
  ],
};

mock.onGet("/api/auth").reply((config) => {
  const data = JSON.parse(config.data);
  const { accountNumber, password } = data;
  const user = _.cloneDeep(
    authDB.users.find((_user) => _user.data.accountNumber === accountNumber)
  );

  const error = [];

  if (!user) {
    error.push({
      type: "accountNumber",
      message: "Check your account number",
    });
  }

  if (user && user.password !== password) {
    error.push({
      type: "password",
      message: "Check your password",
    });
  }

  if (error.length === 0) {
    delete user.password;

    const access_token = jwt.sign({ id: user.uuid }, jwtConfig.secret, {
      expiresIn: jwtConfig.expiresIn,
    });

    const response = {
      user,
      access_token,
    };

    return [200, response];
  }

  return [200, { error }];
});

mock.onGet("/api/auth/access-token").reply((config) => {
  const data = JSON.parse(config.data);
  const { access_token } = data;

  try {
    const { id } = jwt.verify(access_token, jwtConfig.secret);

    const user = _.cloneDeep(authDB.users.find((_user) => _user.uuid === id));
    delete user.password;

    const updatedAccessToken = jwt.sign({ id: user.uuid }, jwtConfig.secret, {
      expiresIn: jwtConfig.expiresIn,
    });

    const response = {
      user,
      access_token: updatedAccessToken,
    };

    return [200, response];
  } catch (e) {
    const error = "Invalid access token detected";
    return [401, { error }];
  }
});

mock.onPost("/api/auth/register").reply((request) => {
  const data = JSON.parse(request.data);
  const { accountNumber, password, email } = data;
  const isEmailExists = authDB.users.find(
    (_user) => _user.data.email === email
  );
  const error = [];

  if (isEmailExists) {
    error.push({
      type: "email",
      message: "The email address is already in use",
    });
  }

  if (error.length === 0) {
    const newUser = {
      uuid: FuseUtils.generateGUID(),
      from: "custom-db",
      password,
      role: ["user"],
      redirectUrl: "/home",
      data: {
        displayName: "Test Register",
        companyName: "Test Company",
        accountNumber,
        address1: "123 Fake St",
        address2: "",
        city: "Springfield",
        province: "BC",
        postalCode: "V2V6M9",
        phoneNumber: "(604) 464-2331",
        primaryBranch: "#6 - Coquitlam",
        salesPerson: "Darcy Harvey",
        photoURL: "assets/images/avatars/Abbott.jpg",
        email,
        settings: [],
        shortcuts: [],
      },
    };

    authDB.users = [...authDB.users, newUser];

    const user = _.cloneDeep(newUser);
    delete user.password;

    const access_token = jwt.sign({ id: user.uuid }, jwtConfig.secret, {
      expiresIn: jwtConfig.expiresIn,
    });

    const response = {
      user,
      access_token,
    };

    return [200, response];
  }
  return [200, { error }];
});

mock.onPost("/api/auth/user/update").reply((config) => {
  const data = JSON.parse(config.data);
  const { user } = data;

  authDB.users = authDB.users.map((_user) => {
    if (user.uuid === user.id) {
      return _.merge(_user, user);
    }
    return _user;
  });

  return [200, user];
});
