'use client'
import Inputs from "@/components/Inputs"
import addData from "../../../../lib/utilities"

export default function Register() {
    return (
        <main className="w-full h-screen flex justify-center items-center bg-[#00324D] lg:bg-white" >
            <section className="md:w-2/4 w-full flex flex-col items-center gap-2 mx-auto justify-center p-10 text-center">
                <h3 className="text-3xl font-bold text-[#00324D]">¿Ya tienes una cuenta?</h3>
                <span className="text-[#00324D]">Inicia sesión para hacer los cursos</span>
                <a href="./login" id="desktop-register-btn" className="bg-[#00324D] text-white py-2 px-3 rounded-xl text-xl font-semibold mx-3 hover:scale-110 transition-all duration-200 hover:shadow-lg">Iniciar sesión</a>
            </section>
            <section className="bg-[#00324D] w-3/4 hidden flex-col items-center justify-center gap-2 border-l-[16px] border-[#39A900] lg:flex h-full">
                <h2 className="text-3xl sm:text-5xl font-bold text-white">Registro</h2>
                <form className="flex flex-col w-full lg:w-2/4">
                    <Inputs placeholder="Nombre" type="text" id="register_user_name"/>
                    <Inputs placeholder="Apellido" type="text" id="register_user_lastname"/>
                    <Inputs placeholder="N° de identificación o Email" type="email" id="register_user_email"/>
                    <Inputs placeholder="Contraseña" type="password" id="register_user_password"/>
                    <Inputs placeholder="Repite la contraseña" type="password" id="register_user_confirm_password"/>
                </form>
                <div className="flex flex-col sm:flew-row my-3">
                    <button className="lg:text-[#00324D] lg:bg-white text-[#00324D] bg-white py-2 px-3 rounded-xl text-base sm:text-xl font-semibold hover:scale-110 transition-all duration-200 hover:shadow-lg" type="submit" onClick={addData}>Registrarse</button>
                    <span className="mx-4 inline-block lg:hidden lg:text-[#00324D] text-white">O</span>
                    <button className="inline-block lg:hidden bg-[#39A900] lg:bg-white text-[#00324D]  py-2 px-3 rounded-xl text-base sm:text-xl font-semibold hover:scale-110 transition-all duration-200 border-2 border-[#00324D]">Registrarse</button>
                </div>
                <div className="flex gap-3">
                    <svg className="bg-[#00324D] p-1 rounded-full hover:scale-125 transition-all duration-200 cursor-pointer bi bi-google" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 16 16">
                        <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                    </svg>
                    <svg className="bg-[#00324D] p-1 rounded-full hover:scale-125 transition-all duration-200 cursor-pointer bi bi-facebook" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white"viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                </div>
            </section>
        </main>
    )
}