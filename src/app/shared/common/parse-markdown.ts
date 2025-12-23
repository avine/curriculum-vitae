import { marked } from 'marked';

export interface ParsedMarkdown<Metadata extends object> {
  metadata: Metadata;
  content: string;
}

export const parseMarkdown = <Metadata extends object>(
  markdown: string,
): ParsedMarkdown<Metadata> => {
  const [, rawMetadata, rawContent] = markdown.split('---');

  const metadata = rawMetadata
    .split('\n')
    .filter((row) => row.trim())
    .map((row) => row.split(': '))
    .reduce(
      (object, [key, value]) => {
        object[key] = value.trim();
        return object;
      },
      {} as Record<string, string>,
    ) as Metadata;

  const content = marked.parse(rawContent, { async: false });

  return {
    metadata,
    content,
  };
};
