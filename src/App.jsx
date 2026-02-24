import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppModeProvider from "./hooks/appMode/AppModeProvider";
import { LanguageDirection } from "./components/layout";
import AppRoutes from "./routes/AppRoutes";
import "react-day-picker/style.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <LanguageDirection >
      <AppModeProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </QueryClientProvider>
      </AppModeProvider>
    </LanguageDirection>
  );
}

export default App;
