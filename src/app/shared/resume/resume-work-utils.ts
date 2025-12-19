import { marked } from 'marked';
import { ResumeWork } from './resume-work-types';

type MetadataKey = Exclude<keyof ResumeWork, 'content'>;

const isMetadataKey = (key: string): key is MetadataKey => {
  const allowedKeys: MetadataKey[] = ['position', 'company', 'startDate', 'endDate'];
  return (allowedKeys as unknown[]).includes(key);
};

export const markdownToResumeWork = (markdown: string): ResumeWork => {
  const [, metadata, content] = markdown.split('---');

  const workMetadata = metadata
    .split('\n')
    .filter((row) => row.trim())
    .map((row) => row.split(': '))
    .reduce(
      (_work, [key, value]) => {
        if (isMetadataKey(key)) {
          _work[key] = value.trim();
        }
        return _work;
      },
      {} as Omit<ResumeWork, 'content'>,
    );

  const workContent = marked.parse(content, { async: false });

  return { ...workMetadata, content: workContent };
};
