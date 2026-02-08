import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppModeProvider from "./hooks/appMode/AppModeProvider";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const queryClient = new QueryClient();
  return (
    <AppModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </QueryClientProvider>
    </AppModeProvider>
  );
}

export default App;
