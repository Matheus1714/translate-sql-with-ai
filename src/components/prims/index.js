import React, { useState } from "react";
import { RichTextarea } from "rich-textarea";
import { renderer } from "../render";

const Prism = () => {
    const [text, setText] = useState(
          `
          CREATE TABLE IF NOT EXISTS "chats" (
            "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
            "title" text,
            "atlas_user_id" uuid NOT NULL,
            "created_at" timestamp DEFAULT now()
          );
          `)
    return (
      <RichTextarea
        onChange={(e) => setText(e.target.value)}
        value={text}
        autoHeight
      >
        {renderer}
      </RichTextarea>
    );
  }

export default Prism