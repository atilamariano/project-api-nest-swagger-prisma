export class CreateUserDto {
  /** o id vai servir para fazer uma identificação unica de cada usuário.
   * example 1231564654
   */
  id: number;
  /**
   * O nome será utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir
   * informações da pessoa conectada.
   * @example Paulo Salvatore
   */
  username: string;
  /**
   * É possível conectar com redes sociais sem uma senha, mas para login usando o e-mail diretamente
   * é necessário informar uma senha.
   * @example 123@abc
   */
  password: string;
}
