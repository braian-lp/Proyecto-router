import React from 'react';
import {NavLink} from 'react-router-dom'

const MenuPrincipal = () => {
  return (
    <div>
        <nav>
					<ul>
						<li>
							<NavLink to="/contactos">Proyecto CrudApi</NavLink>
						</li>
						<li>
							<NavLink to="/songsearch">Proyectdo Buscador de canciones</NavLink>
						</li>
					</ul>
        </nav>
    </div>
  )
}

export default MenuPrincipal