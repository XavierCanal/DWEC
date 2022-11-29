export default class Factura {
    constructor(codi) {
      this._codi = codi;
      this._articles = [];
    }

    static _codi;
    static _articles;

    static get articles() {
        return this._articles;
    }
    static set articles(value) {
      this._articles.push(value);
    }
    
    static get codi() {
        return Factura._codi;
    }
    static set codi(value) {
        Factura._codi = value;
    }

  }