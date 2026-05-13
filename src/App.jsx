import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { LanguageDirection } from "./components/layout";
import { ModalProvider, ModalRenderer } from "./context";
import { Toaster } from "react-hot-toast";
import AppModeProvider from "./hooks/appMode/AppModeProvider";
import AppRoutes from "./routes/AppRoutes";
import "react-day-picker/style.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <ModalProvider>
        <ModalRenderer />
        <LanguageDirection>
          <AppModeProvider>
            <QueryClientProvider client={queryClient}>
              <ReactQueryDevtools initialIsOpen={false} />
              <AppRoutes />
            </QueryClientProvider>
          </AppModeProvider>
        </LanguageDirection>
      </ModalProvider>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;