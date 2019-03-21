import Big from 'big.js';
import { accounting } from 'accounting';

export const formatMoney = money =>
  accounting.formatMoney(Big(money).toString(), 'R$', 2, '.', ',');
