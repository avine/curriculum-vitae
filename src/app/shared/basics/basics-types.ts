export interface ResumeBasics {
  firstName: string;
  lastName: string;
  label: string[];
  photo: {
    url: string;
    width: number;
    height: number;
  };
  summary: string[];
}
