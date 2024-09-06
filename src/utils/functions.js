const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  
  export function formatDate(fechaStr) {
    const fecha = new Date(fechaStr);
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();
  
    return `${mes} ${dia} ${año}`;
  }
  