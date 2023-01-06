const selectiontables = require("./selectiontables");
const datasets = require("./datasets");
const contact = require("./contact");
const clean = require("./clean");
const refresh = require("./refresh");
const files = require("./files");
const datasetparameters = require("./datasetparameters");
const externaldata = require("./externaldata");
const gitclone = require("./gitclone");
const renku = require("./renku");
const convert = require("./convert");
const gitwebhook = require("./gitwebhook");
const download = require("./download");
const pipeline = require("./pipeline");
const datalakesmodel = require("./datalakesmodel");
const netcdf = require("./netcdf");
const monitor = require("./monitor");
const status = require("./status");
const repositories = require("./repositories");
const maintenance = require("./maintenance")
const issues = require("./issues")
const update = require("./update")

module.exports = (app) => {
  app.use("/selectiontables", selectiontables);
  app.use("/datasets", datasets);
  app.use("/repositories", repositories);
  app.use("/datasetparameters", datasetparameters);
  app.use("/files", files);
  app.use("/contact", contact);
  app.use("/datalakesmodel", datalakesmodel);
  app.use("/clean", clean);
  app.use("/pipeline", pipeline);
  app.use("/externaldata", externaldata);
  app.use("/gitclone", gitclone);
  app.use("/renku", renku);
  app.use("/convert", convert);
  app.use("/refresh", refresh);
  app.use("/gitwebhook", gitwebhook);
  app.use("/download", download);
  app.use("/netcdf", netcdf);
  app.use("/monitor", monitor);
  app.use("/status", status);
  app.use("/maintenance", maintenance);
  app.use("/issues", issues)
  app.use("/update", update)
};
