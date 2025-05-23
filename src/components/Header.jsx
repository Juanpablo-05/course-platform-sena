import React from 'react'
import DarkButtons from './DarkButtons'
import MensajeHeader from './MensajeHeader'

function Header() {
    return (
        <>
        <MensajeHeader/>
            <header className='mb-2 p-3'>
                <nav className='p-4 max-w-[90%] mx-auto'>
                    <ul className='flex justify-between items-center'>
                        <a hreft="#">
                            <img src="/logo-senalearn.jpg" className='w-28 m-3' />
                        </a>

                        <div className='flex gap-10 items-center'>
                            <a href="/auth/principal" className="hover:scale-[1.15] hover:text-[#00324D] transition-all duration-200">Inicio</a>
                            <a href="/auth/categorias" className="hover:scale-[1.15] hover:text-[#00324D] transition-all duration-200">Cursos</a>
                            <a href="/auth/perfiles" className="hover:scale-[1.15] hover:text-[#00324D] transition-all duration-200">Mis cursos</a>
                        </div>

                        <div>
                            <DarkButtons href="#" des="iniciar sesíon" />
                            <DarkButtons href="#" des="Registrarse" />
                        </div>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header