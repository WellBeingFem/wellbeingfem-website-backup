/**
 * WellBeingFem restoration reminder: route only the established recovery pages
 * and do not add content beyond their approved placeholder structures.
 */
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import GuidedMeditations from "./pages/GuidedMeditations";
import Healy from "./pages/Healy";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Ondamed from "./pages/Ondamed";
import Research from "./pages/Research";

function RouteAlias({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/ondamed" component={Ondamed} />
      <Route path="/healy" component={Healy} />
      <Route path="/healy/what-is-healy">{() => <RouteAlias to="/healy" />}</Route>
      <Route path="/healy/wellbeing">{() => <RouteAlias to="/healy#healy-wellbeing" />}</Route>
      <Route path="/healy/aura-analysis">{() => <RouteAlias to="/healy#healy-aura-analysis" />}</Route>
      <Route path="/healy/i-ching">{() => <RouteAlias to="/healy#healy-i-ching" />}</Route>
      <Route path="/healy/reiki">{() => <RouteAlias to="/healy#healy-reiki" />}</Route>
      <Route path="/guided-meditations" component={GuidedMeditations} />
      <Route path="/guided-meditations/womens-wisdom">
        {() => <RouteAlias to="/#womens-wisdom" />}
      </Route>
      <Route path="/guided-meditations/members-library">
        {() => <RouteAlias to="/#members-library" />}
      </Route>
      <Route path="/research" component={Research} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
