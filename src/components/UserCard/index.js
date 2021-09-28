import { useDispatch, useSelector } from "react-redux";
import { ChangeName } from "../../store/modules/user/actions"
import { useState } from "react"
import { Container } from "./style"
const UserCard = () => {
    const [newName, setNewName] = useState("");
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)
    const handleClick = () => {
        dispatch(ChangeName(newName));
    }

    console.log(newName)
    return (
        <Container>
            <p>Olá, {user.name}</p>
            <input placeholder = "Digite um nome"type = "text" onChange = {(e) => setNewName(e.target.value)}/>
            <button onClick = {handleClick}>Change</button>
        </Container>
    )
}
export default UserCard