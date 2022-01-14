import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emojiEntry) {
  return (
    <Entry
      Key={emojiEntry.id}
      icon={emojiEntry.emoji}
      name={emojiEntry.name}
      meaning={emojiEntry.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
