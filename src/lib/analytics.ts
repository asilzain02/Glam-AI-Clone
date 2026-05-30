export function capture(event: string, properties: Record<string, unknown> = {}) {
  console.log(`[posthog:event] ${event}`, properties);
}
