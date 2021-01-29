import { Usuario } from './usuario';
import { Habilidad } from './habilidad';

export interface ActividadesRealizadas {
  id: number;
  descripcion: string;
  horasReales: string;
  valoracion: string;
  usuarioSolicita: Usuario;
  usuarioRealiza: Usuario;
  habilidad: Habilidad;
  puntuacionSolicita: string;
  finalizada: string;
}