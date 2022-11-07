export default class Factura {
    constructor(codi,nom,quantitat,preu,total,article) {
      this._codi = codi;
      this._nom = nom;
      this._quantitat = quantitat;
      this._preu = preu;
      this._total = total;
      this._articles = this._articles.push(article);
    }

    static _nom;
    static _codi;
    static _quantitat;
    static _preu;
    static _total;
    static _articles;

    static get nom() {
        return Factura._nom;
    }
    static set nom(value) {
        Factura._nom = value;
    }

    
    static get codi() {
        return Factura._codi;
    }
    static set codi(value) {
        Factura._codi = value;
    }
    
    static get quantitat() {
        return Factura._quantitat;
    }
    static set quantitat(value) {
        Factura._quantitat = value;
    }
    
    static get preu() {
        return Factura._preu;
    }
    static set preu(value) {
        Factura._preu = value;
    }
    
    static get total() {
        return Factura._total;
    }
    static set total(value) {
        Factura._total = value;
    }

  }