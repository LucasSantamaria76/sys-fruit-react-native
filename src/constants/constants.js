export const initialState = {
  sales: [],
  extractions: [],
  cashWithdrawals: [],
  cashChange: 0,
  cashAvailable: 0,
};

export const keys = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '🗑️', '0', '⌫'];
export const typeOfSales = { MP: 'Mercado Pago', CDNI: 'Cuenta DNI', CARD: 'Tarjeta', CASH: 'Efectivo' };

export const KeysExtractions = [
  { id: 1, name: 'Leña y Carbón' },
  { id: 2, name: 'Bolsas de papa' },
  { id: 3, name: 'Huevos' },
  { id: 4, name: 'Verduras' },
  { id: 5, name: 'Bolsitas' },
  { id: 6, name: 'Condimentos' },
  { id: 7, name: 'Empleados' },
  { id: 8, name: 'Varios' },
];

export const KeysAdmin = [
  { id: 1, name: 'Usuarios', nameStack: 'users' },
  { id: 2, name: 'Resumen del día', nameStack: 'summary' },
  { id: 3, name: 'Retiro de efectivo', nameStack: 'cashWithdrawals' },
  { id: 4, name: 'Cambiar fecha', nameStack: 'changeDate' },
  { id: 5, name: 'Resumen mensual', nameStack: 'monthlySummaryStack' },
];
