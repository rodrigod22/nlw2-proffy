import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://img2.gratispng.com/20180514/gre/kisspng-computer-icons-avatar-user-profile-clip-art-5af95fab3b2d13.0220186015262923952424.jpg" alt="foto perfil" />
        <div>
          <strong>Rodrigo Peixoto</strong>
          <span>programação</span>
        </div>
      </header>
      <p>texto descrição</p>
      <footer>
        <p>
          Preço/hora
    <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
    Entrar em contato
  </button>
      </footer>
    </article>
  );
}
export default TeacherItem;