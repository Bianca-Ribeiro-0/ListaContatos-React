import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../store'
import ContatoClass from '../models/contato'

import Contato from '../components/index'
import { BotaoAdc, Form, Lista } from './styles'
import { FormEvent, useState } from 'react'
import { cadastrar } from '../store/reducers/contatos'
import React from 'react'

const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const adicionarContato = (e: FormEvent) => {
    e.preventDefault()
    const contatoParaAdicionar = new ContatoClass(5, nome, email, telefone)
    dispatch(cadastrar(contatoParaAdicionar))
  }

  return (
    <>
      <Lista>
        <Form>
          {' '}
          <form onSubmit={adicionarContato}>
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              type="text"
              placeholder="Nome"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
            <input
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              type="tel"
              placeholder="Telefone"
            />
            <BotaoAdc type="submit">Adicionar</BotaoAdc>
          </form>
        </Form>

        <ul>
          {itens.map((contato) => (
            <li key={contato.telefone}>
              <Contato
                id={contato.id}
                nome={contato.nome}
                email={contato.email}
                telefone={contato.telefone}
              />
            </li>
          ))}
        </ul>
      </Lista>
    </>
  )
}

export default ListaContatos
