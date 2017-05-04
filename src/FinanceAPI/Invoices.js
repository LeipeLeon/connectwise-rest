/**
 * Created by kgrube on 1/22/2016.
 */

/**
 * @private
 */
var inherits = require('util').inherits,
  ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {object} Invoice
 * @property {CompanyHref} company
 * id(Integer)
 * invoiceNumber(String(15))
 * * type(Enum)
 * status(BillingStatusReference)
 * * company(CompanyReference)
 * billToCompany(CompanyReference)
 * shipToCompany(CompanyReference)
 * applyToType(Enum)
 * applyToId(Integer)
 * attention(String(60))
 * billingSite(SiteReference)
 * shippingSite(SiteReference)
 * billingTerms(BillingTermsReference)
 * reference(String(50))
 * customerPO(String(50))
 * templateSetupId(Integer)
 * emailTemplateId(Integer)
 * addToBatchEmailList(Boolean)
 * date(String)
 * restrictDownpaymentFlag(Boolean)
 * locationId(Integer)
 * departmentId(Integer)
 * territoryId(Integer)
 * topComment(String)
 * bottomComment(String)
 * taxableFlag(Boolean)
 * taxCode(TaxCodeReference)
 * internalNotes(String)
 * downpaymentPreviouslyTaxedFlag(Boolean)
 * serviceTotal(Number)
 * dueDate (String)
 * expenseTotal (Number)
 * productTotal (Number)
 * previousProgressApplied (Number)
 * serviceAdjustmentAmount (Number)
 * agreementAmount (Number)
 * downpaymentApplied (Number)
 * subtotal (Number)
 * total (Number)
 * remainingDownpayment (Number)
 * salesTax (Number)
 * adjustmentReason (String)
 * adjustedBy (String)
 * payments (Number)
 * credits (Number)
 * balance (Number)
 * specialInvoiceFlag (Boolean)
 * @property {object} _info
 * @property {string} _info.lastUpdated
 * @property {string} _info.updatedBy
 */



/**
 *
 * @param {CWOptions} options
 * @inherits {ConnectWise}
 * @constructor
 */
function Invoices(options) {
  ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}
inherits(Invoices, ConnectWise);

/**
 * @param {Params} params
 * @returns {Promise<Invoice[]>}
 */
Invoices.prototype.getInvoices = function (params) {
  return this.api('/finance/invoices', 'GET', params);
};
/**
 *
 * @param {Invoice} invoice
 * @returns {Promise<Invoice>}
 */
Invoices.prototype.createInvoice = function (invoice) {
  return this.api('/finance/invoices', 'POST', invoice);
};

/**
 * @param {ParamsConditions} params
 * @returns {Promise<Count>}
 */
Invoices.prototype.getInvoicesCount = function (params) {
  return this.api('/finance/invoices/count', 'GET', params);
};

/**
 * @param {string|number} id numeric ID of invoice, not the invoice ID in ConnectWise.
 * @returns {Promise<Invoice>}
 */
Invoices.prototype.getInvoiceById = function (id) {
  return this.api('/finance/invoices/' + id, 'GET');
};

/**
 * @param {string|number} id
 * @param {Invoice} invoice
 * @returns {Promise<Invoice>}
 */
Invoices.prototype.replaceInvoice = function (id, invoice) {
  return this.api('/finance/invoices/' + id, 'PUT', invoice);
};

/**
 * @param {string|number} id
 * @returns {Promise<DeleteResponse>}
 */
Invoices.prototype.deleteInvoiceById = function (id) {
  return this.api('/finance/invoices/' + id, 'DELETE');
};

/**
 * @param {string|number} id
 * @param {Operations} ops
 * @returns {Promise<Invoice>}
 */
Invoices.prototype.updateInvoice = function (id, ops) {
  return this.api('/finance/invoices/' + id, 'PATCH', ops);
};

/**
 * @param {string|number} id numeric ID of invoice, not the invoice ID in ConnectWise.
 * @returns {Promise<String>} path
 */
Invoices.prototype.getInvoicePdfById = function (id) {
  return this.api('/finance/invoices/' + id + '/pdf', 'GET');
};


/**
 *
 * @type {Invoices}
 */
module.exports = Invoices;
