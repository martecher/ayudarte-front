import { Usuario } from './usuario';
import { Habilidad } from './habilidad';

export interface ActividadesRealizadas {
  id: number;
  observacion: string;
  horasReales: string;
  valoracion: string;
  usuario_solicita: Usuario;
  usuario_realiza: Usuario;
  habilidad: Habilidad;
  puntuacionSolicita: string;
  finalizada: string;
}