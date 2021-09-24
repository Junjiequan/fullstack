import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router";
import Home from "./pages/Home";
import FeedbackDetail from "./pages/FeedbackDetail";
import FeedbackNew from "./pages/FeedbackNew";
import FeedbackEdit from "./pages/FeedbackEdit";
import Roadmap from "./pages/Roadmap";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utilities/theme";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./pages/NotFound";

const App = () => {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <ToastContainer />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/feedback-detail/:id"
              component={FeedbackDetail}
            />
            <Route exact path="/feedback-new" component={FeedbackNew} />
            <Route
              exact
              path="/feedback-detail/:id/edit"
              component={FeedbackEdit}
            />
            <Route exact path="/roadmap" component={Roadmap}></Route>
            <Route exact path="/signup" component={SignupPage}></Route>
            <Route exact path="/login" component={LoginPage}></Route>
            <Route component={NotFound} />
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
};

export default App;
