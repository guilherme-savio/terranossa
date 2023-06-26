import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export function Login({ handleLogin }) {
  const [user, setUser] = useState("")
  const [psswd, setPsswd] = useState("")

  function onHandleLogin() {
    let [newUser, newPsswd] = [user, psswd]

    handleLogin(newUser, newPsswd)
  }

  function handleSetUser(event) {
    event.target.setCustomValidity('');
    setUser(event.target.value)
  }

  function handleSetPsswd(event) {
    event.target.setCustomValidity('');
    setPsswd(event.target.value)
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen top-0 left-0 bg-zinc-950 fixed z-10 bg-opacity-50">
      <div className="bg-green- flex flex-col gap-2 text-zinc-950">
        <label htmlFor="user">Usuário:</label>
        <input className="input input-bordered w-full max-w-xs" type="text" name="user" id="user" value={user} onChange={handleSetUser} />
        <label htmlFor="user">Senha:</label>
        <input className="input input-bordered w-full max-w-xs" type="text" name="password" id="password" value={psswd} onChange={handleSetPsswd} />
        <button type="submit" onClick={onHandleLogin}>Entrar</button>
      </div>
    </div>
  )
}