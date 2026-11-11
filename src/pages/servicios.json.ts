// Catálogo en JSON para el asistente (/api/recomendar). Se genera al publicar.
import { catalogo } from '../data/servicios';

export function GET() {
  const servicios = catalogo.flatMap((g) =>
    g.items.map((s) => ({ n: s.n, t: s.t, grupo: g.t, d: s.d, para: s.para, out: s.out, href: s.href ?? `/servicios#s${s.n}` })),
  );
  return new Response(JSON.stringify({ servicios }), { headers: { 'content-type': 'application/json; charset=utf-8' } });
}
