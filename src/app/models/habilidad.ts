import { CategoriaHabilidad } from './categoriaHabilidad';

export interface Habilidad {
  habilidad_id: number;
  descripcion: string;
  horasEstipuladas: string;
  categoriaHabilidad: CategoriaHabilidad;
}