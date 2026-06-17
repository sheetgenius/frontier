import type { APIRoute } from "astro";
import { healthResponse } from "../lib/health";

export const GET: APIRoute = () => healthResponse();
