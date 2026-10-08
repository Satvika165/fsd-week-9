export interface TopicOverview {
  id: string;
  icon: string;
  title: string;
  description: string;
  tag: string;
}

export interface AcidProperty {
  letter: string;
  name: string;
  tagline: string;
  definition: string;
  textbookQuote: string;
  example: string;
  iconName: string;
}

export interface SecurityStep {
  step: number;
  title: string;
  desc: string;
  actor: string;
}

export interface JunitAnnotation {
  annotation: string;
  meaning: string;
  lifecycleStage: string;
  exampleSnippet: string;
}

export interface AssertMethod {
  method: string;
  parameters: string;
  description: string;
  example: string;
}

export interface NoSqlType {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  storageMechanism: string;
  keyCharacteristics: string[];
  examples: string[];
  useCases: string[];
}

export interface CapPillar {
  key: 'C' | 'A' | 'P';
  title: string;
  meaning: string;
  inCapContext: string;
  realWorldExample: string;
}

export interface BasePillar {
  letter: string;
  name: string;
  description: string;
  textbookMeaning: string;
}

export interface MongoFeature {
  title: string;
  description: string;
  icon: string;
  notesDetail: string;
}

export interface MongoArchitectureComponent {
  name: string;
  rdbmsEquivalent: string;
  description: string;
  details: string;
}

export interface MongoDataType {
  name: string;
  codeSnippet: string;
  description: string;
  sampleValue: string;
}

export interface MongoOperator {
  operator: string;
  category: 'comparison' | 'logical' | 'array';
  meaning: string;
  syntax: string;
  exampleQuery: string;
  description: string;
}

export interface ComparisonRow {
  attribute: string;
  mysql: string;
  mongodb: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topicTag: string;
}

export interface ImportantQuestion {
  id: string;
  type: 'exam' | 'assignment' | 'short' | 'long' | 'practical';
  title: string;
  marks?: number;
  examAppearance?: string;
  question: string;
  solutionSummary: string;
  detailedAnswer: string;
}

export interface RevisionCard {
  id: string;
  category: string;
  title: string;
  keyPoints: string[];
  quickSummary: string;
}
