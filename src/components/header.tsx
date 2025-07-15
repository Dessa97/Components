import'./header.css';

/*declarando o tipo da propriedade*/
interface HeaderProps{
    title: string;
}

/* ({title="Curso React"} define um valor default, caso nenhum seja passado */
export function Header({title="Curso React"}: HeaderProps){
    return(
        <header className ="header">
            <h1 className="title"> {title}</h1>
        </header>
    )
}