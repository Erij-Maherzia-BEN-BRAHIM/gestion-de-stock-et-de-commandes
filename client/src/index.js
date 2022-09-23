import { StyledEngineProvider } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import "./index.css";
//import 'font-awesome/css/font-awesome.min.css';
//import "bootstrap-icons/font/bootstrap-icons.css";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AchatAvoirContextProvider from "./store/achatAVOIRContext";
import AddNewAchatFactContextProvider from "./store/achatFactContext";
import AddNewAppelOffreContextProvider from "./store/appelOffreContext";
import AddNewCategorieContextProvider from "./store/categoryContext";
import AddNewClientContextProvider from "./store/clientContext";
import AddNewDemandeContextProvider from "./store/demandeContext";
import AddNewDirectionContextProvider from "./store/directionContext";
import AddNewEmployeeContextProvider from "./store/employeeContext";
import AddNewFournisseurContextProvider from "./store/fournisseurContext";
import AddNewLigneAchatContextProvider from "./store/ligneAchatContext";
import LigneAvoirSurAchatContextProvider from "./store/ligneAvoirAchatContext";
import LigneAvoirSurVenteContextProvider from "./store/ligneAvoirVenteContext";
import LigneVenteContextProvider from "./store/ligneVenteContext";
import LoginContextProvider from "./store/LoginContext";
import AddNewProduitContextProvider from "./store/produitContext";
import UserContextProvider from "./store/userContext";
import VenteAvoirContextProvider from "./store/venteAvoirContext";
import AddNewVenteFactContextProvider from "./store/venteFactContext";
import { store } from "./store_Redux/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <LigneAvoirSurVenteContextProvider>
      <VenteAvoirContextProvider>
        <LigneVenteContextProvider>
          <LigneAvoirSurAchatContextProvider>
            <AchatAvoirContextProvider>
              <AddNewDemandeContextProvider>
                <AddNewVenteFactContextProvider>
                  <AddNewAppelOffreContextProvider>
                    <AddNewLigneAchatContextProvider>
                      <AddNewAchatFactContextProvider>
                        <AddNewDirectionContextProvider>
                          <AddNewProduitContextProvider>
                            <AddNewClientContextProvider>
                              <AddNewFournisseurContextProvider>
                                <AddNewEmployeeContextProvider>
                                  <AddNewCategorieContextProvider>
                                    <UserContextProvider>
                                      <LoginContextProvider>
                                          <Suspense fallback="loading">
                                        <Provider store={store}>
                                            <StyledEngineProvider injectFirst>
                                              <App />
                                            </StyledEngineProvider>
                                        </Provider>
                                          </Suspense>
                                      </LoginContextProvider>
                                    </UserContextProvider>
                                  </AddNewCategorieContextProvider>
                                </AddNewEmployeeContextProvider>
                              </AddNewFournisseurContextProvider>
                            </AddNewClientContextProvider>
                          </AddNewProduitContextProvider>
                        </AddNewDirectionContextProvider>
                      </AddNewAchatFactContextProvider>
                    </AddNewLigneAchatContextProvider>
                  </AddNewAppelOffreContextProvider>
                </AddNewVenteFactContextProvider>
              </AddNewDemandeContextProvider>
            </AchatAvoirContextProvider>
          </LigneAvoirSurAchatContextProvider>
        </LigneVenteContextProvider>
      </VenteAvoirContextProvider>
    </LigneAvoirSurVenteContextProvider>
  </BrowserRouter>
);
