const port = 4000
const serverurl = 'http://localhost:' + port
export const requests = {
    userAPI: serverurl +'/api/auth',
    staffAPI: serverurl+ '/api/staff',
    demandesAPI: serverurl+ '/api/demandes',
    directionsAPI: serverurl+ '/api/directions',
    categoriesAPI: serverurl+ '/api/categories',
    produitsAPI: serverurl+ '/api/produits',
    fournisseursAPI: serverurl+ '/api/fournisseurs',
    clientsAPI: serverurl+ '/api/clients',
    facturesAchatAPI: serverurl+ '/api/factures/achat',
    ligneAchatOrdinaireAPI: serverurl+ '/api/achat/addToInvoice',
    facturesVenteAPI: serverurl+ '/api/factures/vente',
    ligneVenteOrdinaireAPI: serverurl+ '/api/vente/addToInvoice',
    appelDoffresfAPI: serverurl+ '/api/appelDoffres',
    avoirsAchatAPI: serverurl+ '/api/avoirs/achat',
    ligneAchatAvoirsAPI: serverurl+ '/api/avoirSurachat/addToInvoice',
    avoirsVenteAPI: serverurl+ '/api/avoirs/vente',
    ligneVentesAvoirsAPI: serverurl+ '/api/avoirSurvente/addToInvoice',
}