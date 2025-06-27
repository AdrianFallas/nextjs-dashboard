// se importa otro componente en este caso el sidenav
//Cualquier componente que importe a este archivo será parte del diseño.
import SideNav from '@/app/ui/dashboard/sidenav';
 //El componente <Layout /> recibe una propiedad secundaria. Esta propiedad secundaria 
 // puede ser una página u otro diseño. En su caso, las páginas dentro de /dashboard se anidarán automáticamente dentro de un <Layout />, como se muestra a continuación:


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}