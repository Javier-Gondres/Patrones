export class DatabaseConnection {
  static #instance;
  static #allowConstruction = false;

  constructor() {
    if (!DatabaseConnection.#allowConstruction) {
      throw new Error(
        'DatabaseConnection es Singleton: use DatabaseConnection.getInstance()'
      );
    }
    this._connected = false;
  }

  static getInstance() {
    if (!DatabaseConnection.#instance) {
      console.log(
        '[DB] No hay instancia. Creando conexión única y guardando referencia estática...'
      );
      DatabaseConnection.#allowConstruction = true;
      DatabaseConnection.#instance = new DatabaseConnection();
      DatabaseConnection.#allowConstruction = false;
      DatabaseConnection.#instance.connect();
    } else {
      console.log(
        '[DB] Instancia ya existe. Reutilizando la misma conexión (no se crea otra).'
      );
    }
    return DatabaseConnection.#instance;
  }

  connect() {
    if (this._connected) return;
    this._connected = true;
    console.log('[DB] Conexión establecida con la base de datos.');
  }

  query(sql) {
    if (!this._connected) {
      throw new Error('La conexión no está activa. Llame a connect() antes.');
    }
    console.log(`[DB] Ejecutando query: ${sql}`);
  }
}
