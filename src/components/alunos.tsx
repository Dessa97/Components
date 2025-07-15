interface AlunoProps{
    nome: String;
    idade?: number;
    /* "?" significa que a propriedade é opcional*/
  }
  
  export function Aluno({nome, idade}: AlunoProps){
    return(
      <div>
        <h1>Aluno: {nome}</h1>
        <h3>Idade:{idade}</h3>
      </div>
    )
  }