export class Cafe {
  getCosto() {
    throw new Error('Cafe es el contrato común; use una implementación concreta.');
  }

  getDescripcion() {
    throw new Error('Cafe es el contrato común; use una implementación concreta.');
  }
}

export class CafeSimple extends Cafe {
  getCosto() {
    return 2.0;
  }

  getDescripcion() {
    return 'Café simple';
  }
}
