import { useState } from 'react';
import traducciones from '../data/idiomas.json';

export default function ProductCard({ producto }) {
    const esIngles = typeof window !== 'undefined' && window.location.pathname.startsWith('/en');
    const idioma = esIngles ? 'en' : 'es';
    const t = traducciones[idioma].productos;
    
    const [isOpen, setIsOpen] = useState(false);

    // Normalizamos el nombre para buscarlo siempre en minúsculas
    const claveNombre = producto.nombre.toLowerCase();

    return (
        <div className="bg-orange-50 border border-orange-100 rounded-2xl shadow-sm hover:shadow-md transition-all p-5 flex flex-col h-full">
            {/* Imagen del Producto */}
            <div className="relative h-64 w-full overflow-hidden rounded-t-xl mb-4">
                <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow-md text-xl">
                   {claveNombre === 'naranja' ? '🍊' : '❄️'}
                </div>
            </div>
   <h3 className="text-xl font-bold text-gray-800 mb-1">
  {t.nombres && t.nombres[producto.nombre.toLowerCase()] 
    ? t.nombres[producto.nombre.toLowerCase()] 
    : producto.nombre}
</h3>

            
            
            <p className="text-gray-500 text-sm mb-4">Alimentos Pronalfrut</p>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="border-t border-orange-100 pt-4 mt-2">
                    <p className="text-gray-700 text-sm mb-3">
                        <span className="font-bold text-orange-600">{t.beneficio}</span> {producto.beneficio}
                    </p>
                    <div className="bg-orange-50 p-3 rounded-lg">
                        <p className="text-xs text-orange-800 italic">
                            <span className="font-bold">{t.tip_saludable}</span> {producto.tip_saludable}
                        </p>
                    </div>
                </div>
            </div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="mt-auto pt-4 text-orange-500 font-bold text-sm flex items-center hover:text-orange-700 transition-colors"
            >
                {isOpen ? t.ver_menos : t.ver_mas}
            </button>
        </div>
    );
}
