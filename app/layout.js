import './globals.css';

export const metadata = {
  title: 'Servicios Eléctricos | Soluciones Profesionales',
  description: 'Servicios eléctricos profesionales',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
