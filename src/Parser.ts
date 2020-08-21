import { getConfiguration } from "./Configuration";

export class Parser {
  public static parse(uri: string, text: string): Document {
    const { REF, SPACE, TAG } = getConfiguration();

    const tagPattern = new RegExp(`${TAG}((\\w|${SPACE})+)`, "g");
    const refPattern = new RegExp(`${REF}((\\w|${SPACE})+)`, "g");

    const tags: Tag[] = [];
    const refs: Ref[] = [];
    let match: RegExpExecArray | null;
    while ((match = tagPattern.exec(text))) {
      const start = match.index;
      const end = match.index + match[0].length;
      const name = match[1];
      tags.push({ start, end, name });
    }
    while ((match = refPattern.exec(text))) {
      const start = match.index;
      const end = match.index + match[0].length;
      const name = match[1];
      refs.push({ start, end, name });
    }
    return { uri, tags, refs };
  }
}

export interface Document {
  uri: string;
  tags: Tag[];
  refs: Ref[];
}

export interface Tag extends Entry {
  description?: string;
}

export interface Ref extends Entry {
  role?: string;
}

interface Entry {
  start: number;
  end: number;
  name: string;
  category?: string;
}
