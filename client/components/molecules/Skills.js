"use client";

import {Form} from "lucide-react"

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-10 text-center">
        <h2 className="text-xl dark:text-gray-300 md:text-2xl text-gray-700 mb-2 text-center">
          Tech Stack
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-2 leading-relaxed">
          Günlük geliştirme süreçlerimde kullandığım teknolojiler.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-5">
        <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-700">
            <Form color="gray"/>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Frontend
            </p>

            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              React, Next.js, TypeScript, JavaScript, Tailwind CSS, Redux,
              Zustand, Context API
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-700">
            <Form color="gray"/>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Architecture & Patterns
            </p>

            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Protected Routes, Role-Based Access Control (RBAC), Scalable
              Folder Structure, API Layer / Service Layer Separation,
              Component-Driven Architecture, Repository Pattern, Composition
              Pattern, Custom Hook Pattern, Adapter Pattern, Observer Pattern
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-700">
            <Form color="gray"/>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Tools
            </p>

            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Git, GitHub, JIRA, Docker, Postman, Claude
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-700">
            <Form color="gray"/>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Diğer
            </p>

            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Responsive Design, SSR, CSR, Git Workflow,
            Açık Kaynak Katkı
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-700">
            <Form color="gray"/>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              API & Veri
            </p>

            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            RESTAPI,Axios, Postman, TanStack Query (React Query),
            LazyLoading
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}
