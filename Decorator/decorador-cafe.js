import { Cafe } from './cafe.js';

export class DecoradorCafe extends Cafe {
  constructor(cafe) {
    super();
    this.cafe = cafe;
  }

  getCosto() {
    return this.cafe.getCosto();
  }

  getDescripcion() {
    return this.cafe.getDescripcion();
  }
}

export class Leche extends DecoradorCafe {
  getCosto() {
    return super.getCosto() + 0.5;
  }

  getDescripcion() {
    return `${super.getDescripcion()}, leche`;
  }
}

export class Azucar extends DecoradorCafe {
  getCosto() {
    return super.getCosto() + 0.2;
  }

  getDescripcion() {
    return `${super.getDescripcion()}, azúcar`;
  }
}

export class Chocolate extends DecoradorCafe {
  getCosto() {
    return super.getCosto() + 0.7;
  }

  getDescripcion() {
    return `${super.getDescripcion()}, chocolate`;
  }
}
