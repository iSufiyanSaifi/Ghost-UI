import React from "react";
import { Avatar } from "../display/Avatar.jsx";
import { Icon } from "../display/Icon.jsx";
import { SearchBar } from "../forms/SearchBar.jsx";

/** Social post: 28px-radius image, byline + hashtag, caption, then reactions and a comment field. */
export function PostCard({ image, authorName, authorAvatar, hashtag, caption, liked = false, onLike, onComment, style, ...rest }) {
  return (
    <div {...rest} style={{
      display: "flex", flexDirection: "column", gap: 8, width: 396, padding: "8px 12px",
      background: "var(--color-bg-surface)", ...style,
    }}>
      <div style={{
        height: 372, borderRadius: 28, background: "var(--color-bg-default)",
        backgroundImage: image ? `url(${image})` : undefined, backgroundSize: "cover", backgroundPosition: "center",
      }} />
      <div style={{ display: "flex", alignItems: "center", gap: 8, height: 32 }}>
        <Avatar src={authorAvatar} name={authorName} size={32} ring={false} />
        <span style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)", color: "var(--gh-black)" }}>{authorName}</span>
        {hashtag && <span style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-md-size)", color: "#007AFF" }}>{hashtag}</span>}
      </div>
      <span style={{
        fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)", lineHeight: 1.25,
        color: "var(--color-text-primary)", display: "-webkit-box", WebkitBoxOrient: "vertical",
        WebkitLineClamp: 2, overflow: "hidden",
      }}>{caption}</span>
      <div style={{ display: "flex", alignItems: "center", gap: 20, height: 48 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <button type="button" aria-label="Like" aria-pressed={liked} onClick={onLike}
            style={{ border: "none", background: "none", padding: 0, cursor: "pointer", display: "flex" }}>
            <Icon name="heart" size={24} color={liked ? "var(--color-action-primary)" : "var(--gh-grey-280)"} strokeWidth={liked ? 2 : 1.5} />
          </button>
          <button type="button" aria-label="Comment" onClick={onComment}
            style={{ border: "none", background: "none", padding: 0, cursor: "pointer", display: "flex" }}>
            <Icon name="message-circle" size={24} color="var(--gh-grey-280)" />
          </button>
        </div>
        <SearchBar placeholder="Comment here..." style={{ flex: 1, background: "var(--gh-grey-40)" }} />
      </div>
    </div>
  );
}
