import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
// se utiliza el modulo o clase css creada por nosotros
import styles from '@/app/ui/home.module.css';
// se importa el modulo o clase css creada por nosotros el lusitana
import { lusitana } from '@/app/ui/fonts';
// se importa Image para trabajar con imagenes en Next, esto hace
// que las imagenes se gestionen automaticamente sin tener que hacerlo 
// manualmente (lazy, resize etc)
import Image from 'next/image';


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className= {styles.shape}/> {/* se utiliza el modulo o clase css creada por nosotros*/}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
         <AcmeLogo />
        <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        {/* se usa la font lusitana creada en fonts*/}
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here 
           asi se utilizan las imagenes en next*/}
          <Image 
          src="/hero-desktop.png" 
          width={1000}
          height={760}
          className="hidden md:block"
          alt="muestra la imagen en la version desktop y la esconde si es muy pequeña con hidden md:block"
          />
          <Image 
          src="/hero-mobile.png" 
          width={560}
          height={620}
          className="block md:hidden"
          alt="muestra la imagen en la version mobile y la esconde si es muy grande con block md:hidden lo hace y se escribe al revez"
          />
        </div>
      </div>
    </main>
  );
}
