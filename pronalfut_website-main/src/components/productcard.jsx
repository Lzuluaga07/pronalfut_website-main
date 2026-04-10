import { useState } from 'react';

export default function ProductCard({ producto, imagenOptimizada }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all p-5 flex flex-col h-full">
      {/* Imagen del Producto */}
<div className="relative h-64 w-full overflow-hidden rounded-t-xl mb-4">
  <img
   src={imagenOptimizada || producto.imagen}
    alt={producto.nombre} 
    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
  />
  {/* El ícono queda como un detalle flotante elegante */}
  <div className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow-md text-xl">
    {producto.nombre.includes('Naranja') ? '🍊' : '❄️'}
  </div>
</div>

      <h3 className="text-xl font-bold text-gray-800 mb-1">{producto.nombre}</h3>
      <p className="text-gray-500 text-sm mb-4">Alimentos Pronalfrut</p>
      
      {/* Contenido oculto que se despliega */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="border-t border-orange-100 pt-4 mt-2">
          <p className="text-gray-700 text-sm mb-3">
            <span className="font-bold text-orange-600">Beneficio:</span> {producto.propiedades}
          </p>
          <div className="bg-orange-50 p-3 rounded-lg">
            <p className="text-xs text-orange-800 italic">
              <span className="font-bold">💡 Tip Saludable:</span> {producto.remedio}
            </p>
          </div>
        </div>
      </div>

      {/* Botón Ver Más */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="mt-auto pt-4 text-orange-500 font-bold text-sm flex items-center hover:text-orange-700 transition-colors"
      >
        {isOpen ? 'Ver menos ↑' : 'Ver más ↓'}
      </button>
    </div>
  );
}
