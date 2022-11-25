import { HeaderCabeca } from './Style';
import { Link } from 'react-router-dom';

function List() {
  return (
    <HeaderCabeca>
        <ul className='ListCabeça'>
            <li className='menus'><Link to='/Clientes'>Clientes</Link></li>
            <li className='menus'><Link to='/Destinos'>Destinos</Link></li>
            <li className='menus'><Link to='/Hospedagens'>Hospedagens</Link></li>
        </ul>
    </HeaderCabeca>
  )
}

export default List