export function ChatMessage({ role, content }) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={
          isUser
            ? "max-w-[75%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground shadow-sm"
            : "max-w-[75%] rounded-2xl rounded-bl-sm border border-border bg-card px-4 py-2.5 text-sm text-foreground shadow-sm"
        }
      >
        {content}
      </div>
    </div>
  );
}
