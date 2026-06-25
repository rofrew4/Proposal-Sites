export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="eyebrow mb-2">404</p>
        <h1 className="text-[22px] font-semibold text-foreground">
          Proposal not found
        </h1>
        <p className="mt-2 text-[14px] text-secondary">
          This subdomain does not match a registered proposal.
        </p>
      </div>
    </main>
  );
}
