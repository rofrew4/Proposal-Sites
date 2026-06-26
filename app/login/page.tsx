import { Suspense } from "react";
import { DevProposalBanner } from "@/app/components/DevProposalBanner";
import { getProposal } from "@/lib/proposal";
import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  const proposal = getProposal();

  return (
    <>
      <DevProposalBanner />
      <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center">
          <p className="eyebrow">Loading…</p>
        </main>
      }
    >
      <LoginForm
        title={proposal.hero.title}
        clientName={proposal.hero.clientName}
      />
    </Suspense>
    </>
  );
}
