import React, { Suspense } from 'react';
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { GlobalLayout } from "@/components/layout/GlobalLayout";
import NotFound from "@/pages/not-found";

// Lazy load pages
const Home = React.lazy(() => import('@/pages/home'));

// Recently Diagnosed
const RecentlyDiagnosed = React.lazy(() => import('@/pages/recently-diagnosed/index'));
const WhatIsPH = React.lazy(() => import('@/pages/recently-diagnosed/what-is-ph'));
const DiagnosticJourney = React.lazy(() => import('@/pages/recently-diagnosed/diagnostic-journey'));
const QuestionsForDoctor = React.lazy(() => import('@/pages/recently-diagnosed/questions-for-doctor'));

// Treatments
const TreatmentsHub = React.lazy(() => import('@/pages/treatments/index'));
const TreatmentsExplained = React.lazy(() => import('@/pages/treatments/explained'));
const TestResults = React.lazy(() => import('@/pages/treatments/test-results'));

// Living Well
const LivingWellHub = React.lazy(() => import('@/pages/living-well/index'));
const DietNutrition = React.lazy(() => import('@/pages/living-well/diet-nutrition'));
const ExerciseActivity = React.lazy(() => import('@/pages/living-well/exercise'));
const TravelOxygen = React.lazy(() => import('@/pages/living-well/travel-oxygen'));
const MentalWellbeing = React.lazy(() => import('@/pages/living-well/mental-wellbeing'));
const FinancialSupport = React.lazy(() => import('@/pages/living-well/financial-support'));

// Community
const CommunityVoices = React.lazy(() => import('@/pages/community-voices'));

// Caring for Someone
const CaringForSomeoneHub = React.lazy(() => import('@/pages/caring-for-someone/index'));
const CarersRole = React.lazy(() => import('@/pages/caring-for-someone/carers-role'));
const CarerWellbeing = React.lazy(() => import('@/pages/caring-for-someone/carer-wellbeing'));
const CarerSupport = React.lazy(() => import('@/pages/caring-for-someone/carer-support'));

// Resource Library
const ResourceLibrary = React.lazy(() => import('@/pages/resource-library'));

// Directory & About
const FindSpecialist = React.lazy(() => import('@/pages/find-specialist'));
const AboutHub = React.lazy(() => import('@/pages/about/index'));
const Partnership = React.lazy(() => import('@/pages/about/partnership'));
const AdvisoryPanel = React.lazy(() => import('@/pages/about/advisory-panel'));
const ForProfessionals = React.lazy(() => import('@/pages/for-healthcare-professionals'));
const GovernanceChecklist = React.lazy(() => import('@/pages/governance-checklist'));

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      
      <Route path="/recently-diagnosed" component={RecentlyDiagnosed} />
      <Route path="/recently-diagnosed/what-is-ph" component={WhatIsPH} />
      <Route path="/recently-diagnosed/diagnostic-journey" component={DiagnosticJourney} />
      <Route path="/recently-diagnosed/questions-for-doctor" component={QuestionsForDoctor} />

      <Route path="/treatments" component={TreatmentsHub} />
      <Route path="/treatments/explained" component={TreatmentsExplained} />
      <Route path="/treatments/test-results" component={TestResults} />

      <Route path="/living-well" component={LivingWellHub} />
      <Route path="/living-well/diet-nutrition" component={DietNutrition} />
      <Route path="/living-well/exercise" component={ExerciseActivity} />
      <Route path="/living-well/travel-oxygen" component={TravelOxygen} />
      <Route path="/living-well/mental-wellbeing" component={MentalWellbeing} />
      <Route path="/living-well/financial-support" component={FinancialSupport} />

      <Route path="/community-voices" component={CommunityVoices} />

      <Route path="/caring-for-someone" component={CaringForSomeoneHub} />
      <Route path="/caring-for-someone/carers-role" component={CarersRole} />
      <Route path="/caring-for-someone/carer-wellbeing" component={CarerWellbeing} />
      <Route path="/caring-for-someone/carer-support" component={CarerSupport} />

      <Route path="/resource-library" component={ResourceLibrary} />

      <Route path="/find-specialist" component={FindSpecialist} />
      
      <Route path="/about" component={AboutHub} />
      <Route path="/about/partnership" component={Partnership} />
      <Route path="/about/advisory-panel" component={AdvisoryPanel} />

      <Route path="/for-healthcare-professionals" component={ForProfessionals} />
      <Route path="/governance-checklist" component={GovernanceChecklist} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <GlobalLayout>
            <Router />
          </GlobalLayout>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
