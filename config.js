// config.js - Datos editables para la plantilla landing-page
// === === === === === === === === === === === === === === === === === === === ===
// CAMBIAR SOLAMENTE LOS VALORES DE ABAJO para un nuevo cliente.
// No tocar el código de arriba salvo que sepa lo que hace.
// === === === === === === === === === === === === === === === === === === === ===

/**
 * Datos del negocio - Todos los textos y Contacto
 */
export const config = {
  negocio: {
    nombre: "Reparación de calzado Benito",
    telefono: "+34 641 78 87 22",
    whatsapp: "641788722",
    email: "[FALTA]",
    direccion: "Autonomía Kalea, 9, 48012 Bilbao (Errekalde)",
    codigoPostal: "[FALTA]",
    ciudad: "[FALTA]",
    pais: "[FALTA]"
  },

  /**
   * Colores - Usa CSS variables :root en style.css
   * Si quieres un color totalmente distinto, edita style.css directamente
   */
  colores: {
    primary: "#5A3A22",        /* color principal - enlaces, headers */
    primaryLight: "#dbeafe",   /* fondo cards, sections claros */
    accent: "#C8892B",         /* botón WhatsApp */
    bg: "#F6F0E6",             /* fondo general de body */
    text: "#1e293b",           /* texto principal */
    success: "#10b981",
    danger: "#ef4444"
  },

  /**
   * Servicios - Mostrados en grid 3 columnas responsive
   * Quitar/copiar según el negocio
   */
  servicios: [
    "cambio de suelas y tacones",
    "[FALTA]",
    "arreglo de sandalias y botas de trekking",
    "[FALTA]",
    "costuras en otros objetos",
    "[FALTA]"
  ],

  /**
   * Opiniones - Tarjetas con cita al margen
   * Mínimo 1, máximo 5 recomendado
   */
  opiniones: [
    "[FALTA]",
    "[FALTA]",
    "[FALTA]"
  ],

  /**
   * Horario de atención
   * Los textos se injectan en el DOM al cargar la página
   */
  horario: {
    lunes: "9:00 a 13:30 y de 16:30 a 19:30",
    martes: "9:00 a 13:30 y de 16:30 a 19:30",
    miercoles: "9:00 a 13:30 y de 16:30 a 19:30",
    jueves: "9:00 a 13:30 y de 16:30 a 19:30",
    viernes: "Cerrado",
    sabado: "Cerrado",
    domingo: "Cerrado"
  },

  /**
   * Mapa - URL del iframe de Google Maps
   * Generarla desde: https://www.google.com/maps/preview
   * Buscar el negocio -> Compartir -> Incrustar mapa
   */
  mapa: {
    url: "[EJEMPLO] https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3967.065233514944!2d-3.685663824854855!3d40.41669627933408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1672517230000!5m2!1ses!2smx"
  },

  /**
   * Formulario de contacto
   */
  formulario: {
    titulo: "[FALTA]",
    nombre: "[FALTA]",
    email: "[FALTA]",
    mensaje: "[FALTA]",
    boton: "[FALTA]"
  },

  /**
   * Pie de página
   */
  pie: {
    anio: new Date().getFullYear(),
    texto: "[FALTA]",
    politicaPrivacidad: "[FALTA]",
    avisoLegal: "[FALTA]"
  },
};

/**
 * Función auxiliar para obtener un color
 * @param {string} key - clave en colores.ej. "primary"
 * @returns {string} valor hexadecimal
 */
export function getColor(key) {
  return config.colores[key] || config.colores.primary;
}