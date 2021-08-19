
import { useState } from 'react';
import './App.css';


function App() {

  const [nav, setNav] = useState(true);
  const [navSide, setNavSide] = useState(true);
  const [cardUser, setCardUser] = useState(true);
  const [dropDown1, setDropDown1] = useState(true);
  const [dropDown2, setDropDown2] = useState(true);
  const [dropDownResponsive1, setDropDownResponsive1] = useState(true);
  const [dropDownResponsive2, setDropDownResponsive2] = useState(true);

  const handleNavResponsive = () => {
    if (navSide || cardUser) {
      setNavSide(true);
      setCardUser(true);
    }
    setNav(!nav);
  }

  const handleSideBar = () => {
    if (nav || cardUser) {
      setNav(true);
      setCardUser(true);
    }
    setNavSide(!navSide);
  }

  const handleCardUser = () => {
    if (nav || navSide) {
      setNav(true);
      setNavSide(true);
    }
    setCardUser(!cardUser);
  }

  const handleDropDown1 = () => {
    setDropDown1(!dropDown1);
    setDropDownResponsive1(!dropDownResponsive1);
    setDropDownResponsive2(true);
  }

  const handleDropDown2 = () => {
    setDropDown2(!dropDown2);
    setDropDownResponsive2(!dropDownResponsive2);
    setDropDownResponsive1(true);
  }

  const navResponsive = nav ? 'hidden' : 'block';
  const navSideStatus = navSide ? 'hidden' : 'block';
  const cardUserStatus = cardUser ? 'hidden' : 'block';
  const dropDown1Status = dropDown1 ? 'hidden' : 'block';
  const dropDown2Status = dropDown2 ? 'hidden' : 'block';
  const dropDownResponsive1Status = dropDownResponsive1 ? 'hidden' : 'block';
  const dropDownResponsive2Status = dropDownResponsive2 ? 'hidden' : 'block';

  return (
    <div className="App">
      <header>
        <nav className="bg-white shadow ml-20" >
          <div className="container px-6 py-4 mx-auto">
            <div className="relative xl:flex xl:items-center xl:justify-between">
              <div className="flex items-center justify-between">
                <div className="text-xl font-semibold text-gray-700">
                  <img src="https://admin.mercadocasa.pe/assets/media/company-logos/logo-2.png" alt="mercado-casa-logo" class="w-28"></img>
                </div>

                {/* <!-- Mobile menu button --> */}
                <div className="flex xl:hidden">
                  <button onClick={handleNavResponsive} type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                      <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                    </svg>
                  </button>

                  <button class="flex items-center focus:outline-none mx-2 text-gray-700">
                    <span class="w-6 h-6 text-2xl">
                      <ion-icon name="cart"></ion-icon>
                    </span>
                  </button>

                  <button type="button" onClick={handleCardUser} className="flex items-center focus:outline-none mx-2" aria-label="toggle profile dropdown">
                    <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar" />
                    </div>
                  </button>
                </div>
              </div>

              {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}

              <div className={`flex-1 mt-5 xl:flex xl:items-center xl:justify-between ${navResponsive}`}>
                <div className="flex flex-col -mx-4 xl:flex-row xl:items-center xl:mx-8">
                  <a href="/" className="px-2 py-1 mx-2 mt-2 text-sm font-medium transition-colors duration-200 transform rounded-xl xl:mt-0 bg-gray-100" style={{ color: '#42ddf5' }}>Panel de Inicio</a>
                  <div className="relative">
                    <button onClick={handleDropDown1} className="cursor-pointer px-2 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-xl xl:mt-0">MLS <ion-icon name="chevron-down"></ion-icon>
                    </button>
                    <div className={`${dropDown1Status} xl:hidden flex flex-col`}>
                      <a href="/" className="ml-6 px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-xl xl:mt-0">MLS 1
                      </a>
                      <a href="/" className="ml-6 px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-xl xl:mt-0">MLS 2
                      </a>
                    </div>
                    <div className={`hidden xl:${dropDownResponsive1Status} absolute w-20 bg-white top-11 flex flex-col space-y-2 py-2`}>
                      <a href="/" className="px-2 block py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors text-hover duration-200 transform rounded-xl xl:mt-0">MLS 1
                      </a>
                      <a href="/" className="px-2 block py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors text-hover duration-200 transform rounded-xl xl:mt-0">MLS 2
                      </a>
                    </div>
                  </div>

                  <div className="relative">
                    <button onClick={handleDropDown2} className="cursor-pointer px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-xl xl:mt-0">CRM <ion-icon name="chevron-down"></ion-icon>
                    </button>
                    <div className={`${dropDown2Status} xl:hidden flex flex-col`}>
                      <a href="/" className="ml-6 px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-xl xl:mt-0">CRM 1
                      </a>
                      <a href="/" className="ml-6 px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-xl xl:mt-0">CRM 2
                      </a>
                    </div>
                    <div className={`hidden xl:${dropDownResponsive2Status}  absolute w-20 bg-white top-11 flex flex-col space-y-2 py-2`}>
                      <a href="/" className="px-2 block py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors text-hover duration-200 transform rounded-xl xl:mt-0">CRM 1
                      </a>
                      <a href="/" className="px-2 block py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors text-hover duration-200 transform rounded-xl xl:mt-0">CRM 2
                      </a>
                    </div>
                  </div>

                  <a href="/" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-xl xl:mt-0 hover:bg-gray-600 hover:text-white">Tutorial</a>

                  <a href="/" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-xl xl:mt-0 hover:bg-gray-600 hover:text-white">Tutoriales en video</a>

                  <a href="/" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-xl xl:mt-0 hover:bg-gray-600 hover:text-white">Mis Inmuebles</a>
                  <a href="/" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-xl xl:mt-0 hover:bg-gray-600 hover:text-white">Contactos</a>

                  <div className="flex items-center">
                    <a href="/" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-xl xl:mt-0 hover:bg-gray-600 hover:text-white">Oportunidades</a><span className="rounded-full bg-yellow-400 w-6 h-6 flex justify-center items-center mt-2 xl:mt-0">0</span>
                  </div>
                </div>

                <div className="flex items-center mt-4 xl:mt-0">

                  <button class="flex items-center focus:outline-none mx-2 text-gray-700 mx-4 hidden xl:block">
                    <span class="w-6 h-6 text-2xl">
                      <ion-icon name="cart"></ion-icon>
                    </span>
                  </button>

                  <button type="button" onClick={handleCardUser} className="flex items-center focus:outline-none hidden xl:block" aria-label="toggle profile dropdown">
                    <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar" />
                    </div>
                  </button>

                </div>
              </div>
              <div className={`absolute shadow w-48 h-48 bg-white top-12 xl:top-16 right-0 flex flex-col justify-around px-5 -space-y-10 ${cardUserStatus}`}>
                <div>
                  <a href="/" class="flex items-center px-4 py-2 -mx-2 border-b user-options">
                    <span className="mr-2 mt-1"><ion-icon name="bag-handle"></ion-icon></span>Productos
                  </a>
                  <a href="/" class="flex items-center px-4 py-2 -mx-2 border-b user-options">
                    <span className="mr-2 mt-1"><ion-icon name="card"></ion-icon></span>Suscripción
                  </a>
                  <a href="/" class="flex items-center px-4 py-2 -mx-2 border-b user-options">
                    <span className="mr-2 mt-1"><ion-icon name="flower"></ion-icon></span>Configuración
                  </a>
                  <a href="/" class="flex items-center px-4 py-2 -mx-2 border-b user-options">
                    <span className="mr-2 mt-1"><ion-icon name="log-out"></ion-icon></span>Cerrar Sesión
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <aside className="absolute w-20 shadow top-0 bg-white">
        <div className="w-20 flex justify-center" style={{ height: '4.3rem' }}>
          <button onClick={handleSideBar} type="button" className="block xl:hidden text-gray-500 my-5 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
            </svg>
          </button>
        </div>
        <nav id="navside" className={`navbar ${navSideStatus} xl:block`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">
                <span className="text-pink-500 text-xl"><ion-icon name="home"></ion-icon></span>
                <span className="link-text">Inicio</span>
              </a>
            </li>

            <li className="nav-item">
              <a href="/" className="nav-link">
                <span className="text-blue-500 text-xl"><ion-icon name="albums"></ion-icon></span>
                <span className="link-text">Agenda</span>
              </a>
            </li>

            <li className="nav-item">
              <a href="/" className="nav-link">
                <span className="text-yellow-500 text-xl"><ion-icon name="star"></ion-icon></span>
                <span className="link-text">Productos Top</span>
              </a>
            </li>

            <li className="nav-item">
              <a href="/" className="nav-link">
                <span className="text-purple-600 text-xl"><ion-icon name="people"></ion-icon></span>
                <span className="link-text">Team</span>
              </a>
            </li>

            <li className="nav-item">
              <a href="/" className="nav-link">
                <span className="text-green-500 text-xl"><ion-icon name="create"></ion-icon></span>
                <span className="link-text">Reportes</span>
              </a>
            </li>

            <li className="nav-item">
              <a href="/" className="nav-link">
                <span className="text-gray-600 text-xl"><ion-icon name="people"></ion-icon></span>
                <span className="link-text">Team</span>
              </a>
            </li>

            <li className="nav-item">
              <a href="/" className="nav-link">
                <span className="text-red-700"><ion-icon name="calendar"></ion-icon></span>
                <span className="link-text">Eventos</span>
              </a>
            </li>

            <li className="nav-item">
              <a href="/" className="nav-link">
                <span className="text-gray-400"><ion-icon name="lock-closed-outline"></ion-icon></span>
                <span className="link-text">Bloqueados</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="ml-0 xl:ml-20 p-6">
        <h3 className="mb-5 bg-gray-100 p-2 w-full font-semibold">Panel de Inicio</h3>
        <div className="main-grid">
          <div className="col-span-12 md:col-span-6 xl:col-span-4 flex justify-between items-center p-4 md:p-6 lg:p-8 xl:p-10 w-full rounded-lg shadow-md backPath">
            <div className="pr-0 lg:pr-12">
              <h2 className="text-xl lg:text-3xl text-gray-700 mb-4">Inmuebles Activos</h2>
              <p className="text-gray-500 font-light">Listado de mis inmuebles y compartidos con otros agentes.</p>
            </div>
            <div>
              <div className="flex justify-center items-center text-white text-2xl md:text-3xl lg:text-4xl rounded-lg bg-blue-400 w-16 h-16 md:w-24 md:h-24 ">
                0
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 xl:col-span-4 flex justify-between items-center p-4 md:p-6 lg:p-8 xl:p-10 w-full rounded-lg shadow-md backPath">
            <div className="pr-0 lg:pr-12">
              <h2 className="text-xl lg:text-3xl text-gray-700 mb-4">Inmuebles sin imágenes</h2>
              <p className="text-gray-500 font-light">Propiedades creadas sin imágenes con estatus Activo y Pendiente.</p>
            </div>
            <div>
              <div className="flex justify-center items-center text-white text-2xl md:text-3xl lg:text-4xl rounded-lg bg-yellow-500 w-16 h-16 md:w-24 md:h-24 ">
                0
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 xl:col-span-4 flex justify-between items-center p-4 md:p-6 lg:p-8 xl:p-10 w-full rounded-lg shadow-md backPath xl:h-5/6">
            <div className="pr-0 lg:pr-12">
              <h2 className="text-xl lg:text-3xl text-gray-700 mb-4">Inmuebles aún sin Contrato</h2>
              <p className="text-gray-500 font-light">Inmuebles Pendientes de Activar.</p>
            </div>
            <div>
              <div className="flex justify-center items-center text-white text-2xl md:text-3xl lg:text-4xl rounded-lg bg-purple-500 w-16 h-16 md:w-24 md:h-24 ">
                0
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 flex justify-between items-center p-4 md:p-6 lg:p-8 xl:p-10 w-full rounded-lg shadow-md backPath">
            <div className="pr-0 lg:pr-12">
              <h2 className="text-xl lg:text-3xl text-gray-700 mb-4">Inmuebles en espera de Firma de Contrato</h2>
              <p className="text-gray-500 font-light">Solicitudes de Contrato enviadas a propietarios por confirmar.</p>
            </div>
            <div>
              <div className="flex justify-center items-center text-white text-2xl md:text-3xl lg:text-4xl rounded-lg bg-green-500 w-16 h-16 md:w-24 md:h-24 ">
                0
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 flex justify-between items-center p-4 md:p-6 lg:p-8 xl:p-10 w-full rounded-lg shadow-md backPath xl:h-5/6">
            <div className="pr-0 lg:pr-12">
              <h2 className="text-xl lg:text-3xl text-gray-700 mb-4">Oportunidades de Gestión</h2>
              <p className="text-gray-500 font-light">Contactos que tienen inmuebles de interés sin gestionar o sin finalizar.</p>
            </div>
            <div>
              <div className="flex justify-center items-center text-white text-2xl md:text-3xl lg:text-4xl rounded-lg bg-pink-500 w-16 h-16 md:w-24 md:h-24 ">
                0
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 xl:col-span-4 flex justify-between items-center p-4 md:p-6 lg:p-8 xl:p-10 w-full rounded-lg shadow-md backPath">
            <div className="pr-0 lg:pr-12">
              <h2 className="text-xl lg:text-3xl text-gray-700 mb-4">Exclusividad por vencer</h2>
              <p className="text-gray-500 font-light">Contratos de Exclusividad por Vencer.</p>
            </div>
            <div>
              <div className="flex justify-center items-center text-white text-2xl md:text-3xl lg:text-4xl rounded-lg bg-blue-400 w-16 h-16 md:w-24 md:h-24 ">
                0
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 xl:col-span-4 flex justify-between items-center p-4 md:p-6 lg:p-8 xl:p-10 w-full rounded-lg shadow-md backPath">
            <div className="pr-0 lg:pr-12">
              <h2 className="text-xl lg:text-3xl text-gray-700 mb-4">Confirmación de Visita en Espera</h2>
              <p className="text-gray-500 font-light">contactos de Solicitud de Visita esperando confirmación.</p>
            </div>
            <div>
              <div className="flex justify-center items-center text-white text-2xl md:text-3xl lg:text-4xl rounded-lg bg-yellow-500 w-16 h-16 md:w-24 md:h-24 ">
                0
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 xl:col-span-4 flex justify-between items-center p-4 md:p-6 lg:p-8 xl:p-10 w-full rounded-lg shadow-md backPath xl:h-5/6">
            <div className="pr-0 lg:pr-12">
              <h2 className="text-xl lg:text-3xl text-gray-700 mb-4">Derivados al Banco</h2>
              <p className="text-gray-500 font-light">Derivados al Banco.</p>
            </div>
            <div>
              <div className="flex justify-center items-center text-white text-2xl md:text-3xl lg:text-4xl rounded-lg bg-purple-500 w-16 h-16 md:w-24 md:h-24 ">
                0
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 flex justify-between items-center p-4 md:p-6 lg:p-8 xl:p-10 w-full rounded-lg shadow-md backPath">
            <div className="pr-0 lg:pr-12">
              <h2 className="text-xl lg:text-3xl text-gray-700 mb-4">Trámites en Notaria</h2>
              <p className="text-gray-500 font-light">Trámites en Notaria.</p>
            </div>
            <div>
              <div className="flex justify-center items-center text-white text-2xl md:text-3xl lg:text-4xl rounded-lg bg-green-500 w-16 h-16 md:w-24 md:h-24 ">
                0
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 flex justify-between items-center p-4 md:p-6 lg:p-8 xl:p-10 w-full rounded-lg shadow-md backPath xl:h-5/6">
            <div className="pr-0 lg:pr-12">
              <h2 className="text-xl lg:text-3xl text-gray-700 mb-4">Compartir comisión en espera</h2>
              <p className="text-gray-500 font-light">Compartir comisión en espera.</p>
            </div>
            <div>
              <div className="flex justify-center items-center text-white text-2xl md:text-3xl lg:text-4xl rounded-lg bg-pink-500 w-16 h-16 md:w-24 md:h-24 ">
                0
              </div>
            </div>
          </div>

        </div>

        <section className="bg-white text-gray-700 font-semibold mt-5">
          <h2 className="p-5">Aplicaciones</h2>
          <hr className="w-full"></hr>
          <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-2">
              <div className="flex flex-col space-y-2 justify-center items-center border h-36 md:h-44 xl:h-48">
                <span className="text-2xl" style={{ color: '#19b1f8' }}><ion-icon name="home-outline"></ion-icon></span>
                <p className="font-semibold" style={{ color: '#19b1f8' }}>Mis Inmuebles</p>
                <p className="text-gray-400 font-normal text-sm">...</p>
              </div>
              <div className="flex flex-col space-y-2 justify-center items-center border h-36 md:h-44 xl:h-48">
                <span className="text-2xl" style={{ color: '#19b1f8' }}><ion-icon name="person-outline"></ion-icon></span>
                <p className="font-semibold" style={{ color: '#19b1f8' }}>Mis Contactos</p>
                <p className="text-gray-400 font-normal text-sm">contactos</p>
              </div>
              <div className="flex flex-col space-y-2 justify-center items-center border h-36 md:h-44 xl:h-48">
                <span className="text-2xl" style={{ color: '#19b1f8' }}><ion-icon name="albums-outline"></ion-icon></span>
                <p className="font-semibold" style={{ color: '#19b1f8' }}>Mi Agenda</p>
                <p className="text-gray-400 font-normal text-sm">Tareas pendientes</p>
              </div>
              <div className="flex flex-col space-y-2 justify-center items-center border h-36 md:h-44 xl:h-48">
                <span className="text-2xl" style={{ color: '#19b1f8' }}><ion-icon name="search-outline"></ion-icon></span>
                <p className="font-semibold" style={{ color: '#19b1f8' }}>Búsquedas</p>
                <p className="text-gray-400 font-normal text-sm">búsquedas guardadas</p>
              </div>
              <div className="flex flex-col space-y-2 justify-center items-center border h-36 md:h-44 xl:h-48">
                <span className="text-2xl" style={{ color: '#19b1f8' }}><ion-icon name="options-outline"></ion-icon></span>
                <p className="font-semibold" style={{ color: '#19b1f8' }}>Embudo</p>
                <p className="text-gray-400 font-normal text-sm">...</p>
              </div>
              <div className="flex flex-col space-y-2 justify-center items-center border h-36 md:h-44 xl:h-48">
                <span className="text-2xl" style={{ color: '#19b1f8' }}><ion-icon name="newspaper-outline"></ion-icon></span>
                <p className="font-semibold" style={{ color: '#19b1f8' }}>Contratos</p>
                <p className="text-gray-400 font-normal text-sm">...</p>
              </div>
              <div className="flex flex-col space-y-2 justify-center items-center border h-36 md:h-44 xl:h-48">
                <span className="text-2xl" style={{ color: '#19b1f8' }}><ion-icon name="people-outline"></ion-icon></span>
                <p className="font-semibold" style={{ color: '#19b1f8' }}>Círculo de Confianza</p>
                <p className="text-gray-400 font-normal text-sm">...</p>
              </div>
              <div className="flex flex-col space-y-2 justify-center items-center border h-36 md:h-44 xl:h-48">
                <span className="text-2xl" style={{ color: '#19b1f8' }}><ion-icon name="file-tray-full-outline"></ion-icon></span>
                <p className="font-semibold" style={{ color: '#19b1f8' }}>Trámites</p>
                <p className="text-gray-400 font-normal text-sm">...</p>
              </div>
              <div className="flex flex-col space-y-2 justify-center items-center border h-36 md:h-44 xl:h-48">
                <span className="text-2xl" style={{ color: '#19b1f8' }}><ion-icon name="construct-outline"></ion-icon></span>
                <p className="font-semibold" style={{ color: '#19b1f8' }}>Configuración</p>
                <p className="text-gray-400 font-normal text-sm">...</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div >
  );
}

export default App;
