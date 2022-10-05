const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

//sequelize
const sequelize = require("./config/config");
const { Sequelize } = require("sequelize");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

//cookies
const sess = {
  secret: "Super secret secret",
  cookie: { maxAge: 30000, httpOnly: true, secure: false, sameSaite: "strict" },
  resave: false,
  saveUninitiated: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

//added session though i don't think we have downloaded it yet
app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controllers/"));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});
