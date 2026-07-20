import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dra. Letícia Sampaio | Cardiologista',
  description: 'Dra. Letícia Sampaio, cardiologista CRM 73994 em Montes Claros/MG. Atendimento cardiológico humanizado, prevenção e cuidado cardiovascular.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
