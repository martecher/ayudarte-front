import { Usuario } from './usuario';
import { ActividadesRealizadas } from './actividadesRealizadas';



export interface Mensajes {
  id: number;
  texto: string;
  leido: number;
  usuario_envia: Usuario;
  usuario_recibe: Usuario;
  orden: number;
  tarea: ActividadesRealizadas;
}

