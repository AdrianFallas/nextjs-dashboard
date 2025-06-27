//para importar y exportar fuentes de texto de google u optimas para google
import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';
export const inter = Inter({ subsets: ['latin'] });
// se importa la fuente Lusitana de google
// se le asigna el peso 400 y 700, y el subset latin
export const lusitana = Lusitana({
    weight:['400','700'],subsets: ['latin'] });