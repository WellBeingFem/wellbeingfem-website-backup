/**
 * WellBeingFem restoration reminder: route only the established recovery pages
 * and do not add content beyond their approved placeholder structures.
 */
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Ondamed from "./pages/Ondamed";
import Research from "./pages/Research";
import Resources from "./pages/Resources";

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
      <Route path="/healy">{() => <RouteAlias to="/research#healy" />}</Route>
      <Route path="/healy/what-is-healy">{() => <RouteAlias to="/research#healy" />}</Route>
      <Route path="/healy/wellbeing">{() => <RouteAlias to="/research#healy" />}</Route>
      <Route path="/healy/aura-analysis">{() => <RouteAlias to="/research#healy" />}</Route>
      <Route path="/healy/i-ching">{() => <RouteAlias to="/research#healy" />}</Route>
      <Route path="/healy/reiki">{() => <RouteAlias to="/research#healy" />}</Route>
      <Route path="/guided-meditations">
        {() => <RouteAlias to="/research#guided-meditations" />}
      </Route>
      <Route path="/guided-meditations/womens-wisdom">
        {() => <RouteAlias to="/#womens-wisdom" />}
      </Route>
      <Route path="/guided-meditations/members-library">
        {() => <RouteAlias to="/#members-library" />}
      </Route>
      <Route path="/resources" component={Resources} />
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
