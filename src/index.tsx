import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BudgetContextProvider } from "./context/BudgetContext/BudgetContext";
import { CurrencyContextProvider } from "./context/CurrencyContext/CurrencyContext";
import { ExpencesContextProvider } from "./context/ExpencesContext/ExpencesContext";
import { GlobalStyles } from "./ui/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
		<ExpencesContextProvider>
    <CurrencyContextProvider>
      <BudgetContextProvider>
        <App />
      </BudgetContextProvider>
    </CurrencyContextProvider>
		</ExpencesContextProvider>
  </React.StrictMode>
);
