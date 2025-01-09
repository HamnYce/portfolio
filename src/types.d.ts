export interface Root {
  name: string;
  links: Links;
  location: string;
  profile: Profile;
  sections: Section[];
}

export interface Links {
  github: string;
  linkedin: string;
}

export interface Profile {
  description: string;
}

export interface Section {
  name: string;
  subsections: Subsection[];
}

export interface Subsection {
  name: string;
  date?: string;
  information?: string[];
  "@"?: string;
  link?: string;
}
