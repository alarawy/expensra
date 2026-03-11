import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppModeProvider from "./hooks/appMode/AppModeProvider";
import { LanguageDirection } from "./components/layout";
import AppRoutes from "./routes/AppRoutes";
import "react-day-picker/style.css";
import { ModalProvider, ModalRenderer } from "./context";

function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter> {/* BrowserRouter أعلى كل حاجة */}
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
    </BrowserRouter>
  );
}

export default App;