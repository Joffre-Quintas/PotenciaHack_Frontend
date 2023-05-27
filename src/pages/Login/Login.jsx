import Button from "../../components/Button/Button";

export default function Login() {

    function handleSubmit(e) {
        e.preventDefault()
        console.log('test')
    }

    return(
        <div className="container">
            <form>
                <h1>Login</h1>
                <div>
                    <label htmlFor="user">Usuário</label>
                    <input type="text" name="user"/>
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password"/>
                </div>
                <div>
                    <Button title="Entrar" onClick={(e) => handleSubmit(e)}></Button>
                </div>
            </form>
        </div>
    )
}