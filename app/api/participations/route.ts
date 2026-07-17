import { getDb } from "../../../db";
import { participations } from "../../../db/schema";

const allowedRoles = new Set(["personero", "voluntariado", "digital", "tecnico"]);

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function routeError(error: unknown) {
  const message = error instanceof Error ? error.message : "Error inesperado";
  if (message.includes("no such table") || message.includes("participations")) {
    return "El registro aún no está habilitado en esta versión. Intenta nuevamente cuando el sitio sea publicado.";
  }
  return "No pudimos guardar tu registro. Intenta nuevamente en unos minutos.";
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Record<string, unknown>;
    if (clean(payload.website, 200)) {
      return Response.json({ message: "Registro recibido." }, { status: 201 });
    }

    const fullName = clean(payload.fullName, 100);
    const phone = clean(payload.phone, 20).replace(/[^0-9+()\-\s]/g, "");
    const sector = clean(payload.sector, 100);
    const role = clean(payload.role, 30);
    const availability = clean(payload.availability, 280);
    const consent = payload.consent === true;

    if (fullName.length < 4 || phone.replace(/\D/g, "").length < 7 || !sector || !allowedRoles.has(role) || !consent) {
      return Response.json(
        { error: "Revisa tu nombre, celular, sector, tipo de participación y autorización." },
        { status: 400 }
      );
    }

    const db = getDb();
    await db.insert(participations).values({
      fullName,
      phone,
      sector,
      role,
      availability,
      consent,
    });

    return Response.json(
      { message: "Registro recibido. El equipo se pondrá en contacto contigo." },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ error: routeError(error) }, { status: 500 });
  }
}

