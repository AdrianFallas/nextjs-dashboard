// asi se hace en cliente
'use client'

// el nombre de esta clse se puede llamar como uno quiera 
// lo que importa esque aqui se guardan las direcciones de las paginas

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
// importar Link para navegar entre paginas de next
import Link from 'next/link';
// importar usePathname para indicar al usuario en qué página se encuentra.
//  Para ello, necesita obtener la ruta actual del usuario a partir de la URL.
// ya que este es un patron en la interfaz de usuario.
// entonces usePathname() convierte a nav-links.tsx en un componente cliente.
//  para hace eso se debe agregar al inicio del archivo 'use client' vease arriba
import { usePathname } from 'next/navigation';

//usamos clsx para ver cuando el link esta activo, entonces aqui lo importamos
//ya esta libreria se habia importado antes en los css
import clsx from 'clsx';

const links = [
  { name: 'Home',
    href: '/dashboard',
    icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', 
    href: '/dashboard/customers',
    icon: UserGroupIcon },
];

export default function NavLinks() {
  // aqui se agrega el usePathname
  const pathname= usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          // aqui se usa link para navegar entre paginas
          // esto ayuda a que no se refresque todo solo lo nuevo
          // osea solo los componentes diferentes, los otros como navbar, footer y header que se comparten no se recargan 
          // o al menos no se recarga toda la pagina
          // lo que mejora la navegavilidad 
          <Link
            key={link.name}
            href={link.href}

            // aqui se usa clsx, mostrando con resaltado la pagina donde estamos navegando
          className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
