import { chessBoard } from './src/task1.js';
import { trigonSquaer, trigonArr } from './src/task3.js';
import { checkEnvelop, envelop1, envelop2, envelop3 } from './src/task2.js';
import { checkPalindrom } from './src/task4.js';
import { countTicket, context} from './src/task5.js';
import { getNumbersFibonacci, contextFib, contextFibO, contextFibB } from './src/task7.js';
import { rowNumber } from './src/task6.js';

chessBoard(5, 5, '#');
trigonSquaer(trigonArr);
checkEnvelop(envelop1, envelop2);
checkPalindrom(12345);
countTicket(context);
getNumbersFibonacci(contextFib);
rowNumber(5,25);