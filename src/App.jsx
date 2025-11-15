import React from "react";
import User_Directory from "./pages/User_Directory";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <User_Directory />
    </QueryClientProvider>
  );
};

export default App;
