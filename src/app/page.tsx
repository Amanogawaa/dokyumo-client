<<<<<<< Updated upstream
import Image from "next/image";
=======
import {
  FileText,
  Clock,
  Home,
  CheckCircle2,
  ArrowRight,
  Shield,
  Smartphone,
  Bell,
} from "lucide-react";
>>>>>>> Stashed changes

export default function Home() {
  return (
<<<<<<< Updated upstream
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
=======
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Bell className="h-4 w-4" />
              <span>Digital Barangay Document Request System</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Request Barangay Documents{" "}
              <span className="text-primary">From Home</span>
            </h1>
            <p className="mb-10 text-lg text-muted-foreground sm:text-xl lg:text-2xl">
              No more long queues. No more waiting under the sun. Request your
              barangay documents digitally and pick them up when ready.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg">
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-background px-8 text-base font-semibold text-foreground transition-all hover:bg-accent">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="border-y border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-foreground">
              We Understand Your Challenges
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-lg bg-background p-6 shadow-sm">
                <Clock className="mx-auto mb-4 h-10 w-10 text-destructive" />
                <h3 className="mb-2 font-semibold text-foreground">
                  Long Wait Times
                </h3>
                <p className="text-sm text-muted-foreground">
                  Hours spent in queues for simple document requests
                </p>
              </div>
              <div className="rounded-lg bg-background p-6 shadow-sm">
                <svg
                  className="mx-auto mb-4 h-10 w-10 text-destructive"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
                <h3 className="mb-2 font-semibold text-foreground">
                  Weather Issues
                </h3>
                <p className="text-sm text-muted-foreground">
                  Exposed to harsh weather while waiting outdoors
                </p>
              </div>
              <div className="rounded-lg bg-background p-6 shadow-sm">
                <svg
                  className="mx-auto mb-4 h-10 w-10 text-destructive"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="mb-2 font-semibold text-foreground">
                  Time Wasted
                </h3>
                <p className="text-sm text-muted-foreground">
                  Valuable time lost that could be spent elsewhere
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Simple Process, Easy Results
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Get your barangay documents in three simple steps
            </p>
          </div>
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="relative">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  Submit Request Online
                </h3>
                <p className="text-muted-foreground">
                  Choose the document you need and fill out the form from the
                  comfort of your home. No need to visit the barangay hall.
                </p>
                <Smartphone className="mt-4 h-12 w-12 text-primary/20" />
              </div>
              <div className="relative">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  Track Your Request
                </h3>
                <p className="text-muted-foreground">
                  Receive real-time updates on your document processing status.
                  Get notified when it&apos;s ready for pickup.
                </p>
                <Bell className="mt-4 h-12 w-12 text-primary/20" />
              </div>
              <div className="relative">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  Pick Up Document
                </h3>
                <p className="text-muted-foreground">
                  Visit the barangay hall only when your document is ready. No
                  waiting, no queues—just quick pickup.
                </p>
                <CheckCircle2 className="mt-4 h-12 w-12 text-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Why Choose Homestay?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Modern solutions for traditional processes
            </p>
          </div>
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  Request from Home
                </h3>
                <p className="text-muted-foreground">
                  Submit document requests anytime, anywhere without leaving
                  your house.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  Save Time
                </h3>
                <p className="text-muted-foreground">
                  No more wasting hours in long queues. Visit only when your
                  document is ready.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  Real-time Updates
                </h3>
                <p className="text-muted-foreground">
                  Get instant notifications about your document processing
                  status.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  Secure & Private
                </h3>
                <p className="text-muted-foreground">
                  Your personal information is protected with advanced security
                  measures.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  Multiple Documents
                </h3>
                <p className="text-muted-foreground">
                  Request various barangay documents including clearances,
                  certificates, and permits.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  Mobile Friendly
                </h3>
                <p className="text-muted-foreground">
                  Access Homestay from any device—desktop, tablet, or
                  smartphone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Documents */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Available Documents
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Request these barangay documents online
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Barangay Clearance",
                "Certificate of Residency",
                "Certificate of Indigency",
                "Business Permit",
                "Community Tax Certificate",
                "Barangay ID",
              ].map((doc) => (
                <div
                  key={doc}
                  className="flex items-center gap-3 rounded-lg border border-border bg-background p-4 transition-all hover:border-primary hover:shadow-sm"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="font-medium text-foreground">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-y border-border bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              Ready to Skip the Queue?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Join hundreds of residents who have already switched to digital
              document requests. Experience the convenience today.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-background px-8 text-base font-semibold text-foreground transition-all hover:shadow-lg">
                Create Account
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border-2 border-primary-foreground/20 bg-transparent px-8 text-base font-semibold text-primary-foreground transition-all hover:border-primary-foreground/40 hover:bg-primary-foreground/10">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-foreground">Homestay</h3>
              <p className="text-sm text-muted-foreground">
                Digital Barangay Document Request System
              </p>
            </div>
            <div className="text-center text-sm text-muted-foreground sm:text-right">
              <p>&copy; 2025 Homestay. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
>>>>>>> Stashed changes
    </div>
  );
}
