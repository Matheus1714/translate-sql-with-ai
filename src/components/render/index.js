import React from "react";
import { Highlight, themes } from "prism-react-renderer";

export const renderer = (value) => {
    return (
      <Highlight theme={themes.dracula} code={value} language="sql">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </div>
        )}
      </Highlight>
    );
  };