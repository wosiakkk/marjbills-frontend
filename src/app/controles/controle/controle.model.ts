import { Usuario } from './usuario.model';
import { Mes } from '../../controle-anual/mes.model'

export class Controle {
    public id: string;
    public ano: string;
    public descricao: string;
    public usuario: Usuario;
    public meses?: Mes[];

    constructor(){
        this.id=""
    }
}