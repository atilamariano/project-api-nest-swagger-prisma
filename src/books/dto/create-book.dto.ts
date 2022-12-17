export class CreateBookDto {
    /** O Id serve como identificação unica do item.
     * example: 215612166548
     */
    id: number;
    /** O title tem a função nomear o item.
     * example: João e o pé de feijão
     */
    title: string;
    /** Usado para descrever um breve resumo do conteúdo do item.
     * example:Conta a história de João, um garoto pobre...
     */
    description: string;
    /** Usado para colocar a URL do link da imagem.
     * example: https://d1csarkz8o_screen.jpg?ts=1636985753.
     */
    imgUrl: string;
    /** Usado para dar um determinado valor ao item.
     * example: R$: 129,00
     */
    value: number;
}
