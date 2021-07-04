import React, { useState } from 'react';
import { FiHome, FiSearch } from 'react-icons/fi';
import { IoMdAdd } from 'react-icons/io'
import { useHistory } from "react-router-dom";
import Modal from 'react-modal';

import Logo from '../Logo';

import { 
  Container, 
  IconArea, 
  TabButton, 
  HeaderButton, 
  UserArea, 
  ModalContent, 
  CloseButton, 
  ModalTitle, 
  ModalTextArea 
} from './styles';
import { addMatch } from '../../services/game';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    height: '600px',
    backgroundColor: '#141414',
    border: 'none',

  },

  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  }
};


function Header({window}) {
  const history = useHistory();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pgnString, setPgnString] = useState("");

  const clickAdd = async () => {
    await addMatch(pgnString);

    setIsModalOpen(false);
  }

  return (
    <>
        <Container>
            <Logo />
            <IconArea>
                <TabButton selected={window === 'Home'} onClick={() => history.push("/")}>
                    <FiHome color={"#F1E8DC"} size={24} />
                </TabButton>
                {localStorage.getItem("token") !== null && 
                  <TabButton onClick={() => setIsModalOpen(true)}>
                      <IoMdAdd color={"#F1E8DC"} size={24} />
                  </TabButton>
                }
                <TabButton selected={window === 'Search'} onClick={() => history.push("/")}>
                    <FiSearch color={"#F1E8DC"} size={24} />
                </TabButton>
            </IconArea>
            {localStorage.getItem("token") !== null
            ? <UserArea>
                <p>{localStorage.getItem("email")}</p>
                <p>{localStorage.getItem("nome")}</p>
                <button onClick={() => {
                    localStorage.clear();
                    history.push("/");
                }}>Sair</button>
            </UserArea> 
            : <HeaderButton onClick={() => history.push('/login')}>
                Login
            </HeaderButton> }
        </Container>
  
        <Modal isOpen={isModalOpen} style={customStyles}>
            <CloseButton onClick={() => {
                setPgnString("");
                setIsModalOpen(false)
              }}>
              X
            </CloseButton>
            <ModalContent>
              <ModalTitle>
                Adicionar Partida
              </ModalTitle>
              <ModalTextArea placeholder="Cole seu pgn aqui" onChange={e => setPgnString(e.target.value)}/>
              <HeaderButton onClick={() => clickAdd()}>
                Adicionar
              </HeaderButton>
            </ModalContent>
        </Modal>
    </>
  );
}

export default Header;