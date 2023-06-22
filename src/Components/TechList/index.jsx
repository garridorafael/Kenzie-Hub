

export function TechList({ tech, onClick }) {



    return(
            <li onClick={onClick}>
                <h3>{tech.title}</h3>
                <span>{tech.status}</span>
            </li>
    )
}