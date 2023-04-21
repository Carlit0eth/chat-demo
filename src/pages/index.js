import { Chat } from "@orbisclub/components";
import "@orbisclub/components/dist/index.modern.css";

export default function Home() {
  return (
    <main style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <div style={{ minHeight: "35h", minWidth: "35vw" }}>
        <Chat
          theme="kjzl6cwe1jw145n5cpe8nwl5eenlbt0llrghe5gluxrzjhun8wy2cjxpxbnpy3a"
          context="kjzl6cwe1jw14610omoip980iy3lprrwptwmtc6d245q3vdq3d0v2v93k0cqqlf"
        />
      </div>
    </main>
  );
}