const express = require("express");
const router = express.Router();
const factAchatCtrl = require("../controllers/factures_achat");
const factureAchatValidator = require("../validators/facture-achat.validator")

router.post("/", factureAchatValidator, factAchatCtrl.createInvoice);
router.get("/:id", factAchatCtrl.getInvoiceById);
//router.put('/:id', factAchatCtrl.updateInvoice);
//router.delete("/:id", factAchatCtrl.deleteInvoice);
router.get("/", factAchatCtrl.getAllInvoices);
module.exports = router;
