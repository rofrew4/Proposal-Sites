const ROOT_DOMAIN = "chesterbrookai.com";

export function getProposalSlugFromHost(host: string): string | null {
  const hostname = host.split(":")[0].toLowerCase();

  if (hostname.endsWith(`.${ROOT_DOMAIN}`)) {
    const subdomain = hostname.slice(0, -(ROOT_DOMAIN.length + 1));
    if (subdomain && subdomain !== "www") {
      return subdomain;
    }
  }

  return null;
}

export function resolveProposalSlug(host: string | null): string {
  const fromHost = host ? getProposalSlugFromHost(host) : null;
  if (fromHost) return fromHost;

  return process.env.PROPOSAL_SLUG ?? "solup";
}
