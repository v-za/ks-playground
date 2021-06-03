"use strict";
exports.__esModule = true;
var React = require("react");
var core_1 = require("@material-ui/core");
var react_scroll_1 = require("react-scroll");
var NavBar_1 = require("./components/NavBar");
var FeaturesContainer_1 = require("./containers/FeaturesContainer");
var DataDisplay_1 = require("./DataDisplay");
var GettingStarted_1 = require("./components/GettingStarted");
var TeamContainer_1 = require("./containers/TeamContainer");
var Footer_1 = require("./components/Footer");
var useStyles = core_1.makeStyles(function (theme) { return core_1.createStyles({
    container: {
        display: 'inline-block',
        alignItems: 'center',
        // justifyContent: 'flex-end',
        flexDirection: 'column',
        overflow: 'hidden',
        minWidth: '100vw',
        maxWidth: '100vw'
    },
    topContainer: {
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'flex-end',
        flexDirection: 'column',
        minWidth: '100vw',
        maxWidth: '100vw',
        paddingLeft: '0',
        paddingRight: '0',
        paddingTop: '0',
        overflow: 'hidden'
    },
    titleBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '5vh',
        paddingBottom: '5vh',
        minWidth: '100vw',
        maxWidth: '100vw',
        overflow: 'hidden',
        background: theme.palette.primary.main
    },
    demoContainer: {
        minWidth: '70vw',
        maxWidth: '70vw'
    },
    segment: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '5vh',
        paddingBottom: '5vh'
    },
    bold: {
        fontWeight: 900
    }
}); });
var logo = require('./assets/logo.svg')["default"];
// playground\client\assets\ks-logo-full.svg
var App = function () {
    var classes = useStyles();
    return (<core_1.Container className={classes.topContainer} maxWidth='lg'>
      <NavBar_1["default"] />
      <core_1.Container className={classes.titleBox} component={react_scroll_1.Element} name='top'>
        <img alt="mainLogo" style={{ height: '45vh', paddingBottom: '5vh' }} src={logo}/>
        <core_1.Typography className={classes.bold} variant="h3" align="center" color="textSecondary" gutterBottom>
          Kafka Socks
          </core_1.Typography>
        <core_1.Typography variant="h6" align="center" color="textSecondary" gutterBottom>
          Making connecting WebSockets with Kafka as easy as npm install kafka-socks
        </core_1.Typography>
      </core_1.Container>

         <core_1.Container className={classes.segment} component={react_scroll_1.Element} name="features">
        <FeaturesContainer_1["default"] />
        </core_1.Container>

          <core_1.Container className={classes.demoContainer} component={react_scroll_1.Element} name="demo" maxWidth='lg'>
            <DataDisplay_1["default"] />
            {/* <BarDisplay /> */}
          </core_1.Container>
        <core_1.Container className={classes.segment} component={react_scroll_1.Element} name="getting started">
          <GettingStarted_1["default"] />
        </core_1.Container>
        <core_1.Container className={classes.segment} component={react_scroll_1.Element} name="team">
          <TeamContainer_1["default"] />
      </core_1.Container>
      <core_1.Container className={classes.segment} component={react_scroll_1.Element} name="footer">
          <Footer_1["default"] />
        </core_1.Container>
      </core_1.Container>);
};
exports["default"] = App;
