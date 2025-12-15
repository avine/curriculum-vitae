import { marked } from 'marked';
import { ExperienceData } from './experience-types';

export const parseExperience = (input: string): ExperienceData => {
  const [, metadata, content] = input.split('---');

  const output = metadata
    .trim()
    .split('\n')
    .map((row) => row.split(': '))
    .reduce(
      (object, [key, value]) => {
        object[key] = value.trim();
        return object;
      },
      {} as Record<string, string>,
    );

  //const titleMatch = content.trim().match(/^## ([^\n]+)/);
  //output['title'] = titleMatch?.[1] ?? '';
  //output['content'] = marked.parse(content.replace(titleMatch?.[0] ?? '', ''), { async: false });

  output['content'] = marked.parse(content, { async: false });

  return output as unknown as ExperienceData;
};
