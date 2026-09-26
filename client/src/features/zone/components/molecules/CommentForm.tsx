"use client";

import { PaperPlaneTiltIcon } from "@phosphor-icons/react/ssr";
import { useCallback, useId, useState, type FormEvent } from "react";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import type { ZoneComment } from "../../types";

const GUEST_NAME = "Misafir";

export function CommentForm({ onSubmit }: { onSubmit: (comment: ZoneComment) => void }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const id = useId();
  const cantSend = !text.trim();

  const submit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (cantSend) return;
      onSubmit({ name: name.trim() || GUEST_NAME, when: "şimdi", text: text.trim() });
      setText("");
    },
    [cantSend, name, text, onSubmit],
  );

  return (
    <form onSubmit={submit} className="flex flex-col gap-2">
      <label htmlFor={`${id}-name`} className="sr-only">
        Adın (isteğe bağlı)
      </label>
      <Input
        id={`${id}-name`}
        placeholder="Adın (isteğe bağlı)"
        autoComplete="given-name"
        maxLength={40}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="flex gap-2">
        <label htmlFor={`${id}-text`} className="sr-only">
          Yorum
        </label>
        <Input
          id={`${id}-text`}
          placeholder="Yorum yaz…"
          required
          maxLength={280}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-w-0 flex-1"
        />
        <Button type="submit" disabled={cantSend}>
          <PaperPlaneTiltIcon size={16} aria-hidden />
          Gönder
        </Button>
      </div>
    </form>
  );
}
