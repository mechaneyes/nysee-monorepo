import mechanicalReproductionData from '../constants/reproduction.json';

interface Chapter {
  number: number;
  title: string;
  chapter_text: string;
  chapter_text_pruned: string;
}

interface MechanicalReproduction {
  title: string;
  author: string;
  year: number;
  url: string;
  chapter: Chapter;
}

interface Data {
  mechanical_reproduction: MechanicalReproduction;
}

const data: Data = mechanicalReproductionData as Data;

export const getChapterTextPruned = (): string => {
  return data.mechanical_reproduction.chapter.chapter_text_pruned;
};