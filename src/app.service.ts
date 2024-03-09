import { Injectable } from '@nestjs/common';
export interface iWomen {
  name: string;
  lastName: string;
  nationality: string;
  bio: string;
}
const women: iWomen[] = [
  {
    name: 'Cleopatra',
    lastName: 'VII',
    nationality: 'Egyptian',
    bio: 'Cleopatra VII Philopator was the last active ruler of the Ptolemaic Kingdom of Egypt. She was a powerful and influential queen known for her intelligence, political prowess, and romantic liaisons with Julius Caesar and Mark Antony.',
  },
  {
    name: 'Joan',
    lastName: 'of Arc',
    nationality: 'French',
    bio: "Joan of Arc, also known as the Maid of Orléans, was a French heroine and military leader who played a crucial role during the Lancastrian phase of the Hundred Years' War. She claimed divine guidance and led the French army to several important victories.",
  },
  {
    name: 'Marie',
    lastName: 'Curie',
    nationality: 'Polish',
    bio: 'Marie Curie was a physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize, and the only person to win Nobel Prizes in two different scientific fields.',
  },
  {
    name: 'Rosa',
    lastName: 'Parks',
    nationality: 'American',
    bio: 'Rosa Parks was a civil rights activist known for her pivotal role in the Montgomery bus boycott. Her refusal to give up her seat to a white man sparked a wave of protests and became a symbol of the civil rights movement.',
  },
  {
    name: 'Amelia',
    lastName: 'Earhart',
    nationality: 'American',
    bio: 'Amelia Earhart was an aviation pioneer and the first female aviator to fly solo across the Atlantic Ocean. She set many other records and helped to promote the advancement of women in aviation.',
  },
  {
    name: 'Malala',
    lastName: 'Yousafzai',
    nationality: 'Pakistani',
    bio: 'Malala Yousafzai is a Pakistani education activist who became the youngest-ever Nobel Prize laureate. She advocates for the rights of girls to receive an education and has become a global symbol of peaceful protest.',
  },
  {
    name: 'Jane',
    lastName: 'Goodall',
    nationality: 'British',
    bio: 'Jane Goodall is a British primatologist and anthropologist known for her groundbreaking research on chimpanzees in Tanzania. Her work has transformed our understanding of animal behavior and conservation.',
  },
  {
    name: 'Indira',
    lastName: 'Gandhi',
    nationality: 'Indian',
    bio: "Indira Gandhi was the first and, to date, the only female Prime Minister of India. She played a significant role in shaping the country's political landscape during her tenure, implementing major policies and reforms.",
  },
  {
    name: 'Elizabeth',
    lastName: 'I',
    nationality: 'English',
    bio: 'Queen Elizabeth I was one of the most iconic monarchs in English history. Her reign, known as the Elizabethan Era, saw significant cultural, economic, and military growth, and she is often remembered for her strong leadership.',
  },
  {
    name: 'Helen',
    lastName: 'Keller',
    nationality: 'American',
    bio: 'Helen Keller was a deaf-blind author, activist, and lecturer who overcame immense challenges to become a leading advocate for people with disabilities. She was the first deaf-blind person to earn a Bachelor of Arts degree.',
  },
  {
    name: 'Mother',
    lastName: 'Teresa',
    nationality: 'Albanian',
    bio: 'Mother Teresa, known as Saint Teresa of Calcutta, was a Catholic nun and missionary who dedicated her life to serving the poor and sick in India. She founded the Missionaries of Charity, which operates hospices and homes for people with HIV/AIDS, leprosy, and tuberculosis.',
  },
  {
    name: 'Eleanor',
    lastName: 'Roosevelt',
    nationality: 'American',
    bio: "Eleanor Roosevelt was a prominent American politician, diplomat, and activist. She served as the First Lady of the United States from 1933 to 1945 and was a vocal advocate for civil rights, women's rights, and human rights.",
  },
  {
    name: 'Ada',
    lastName: 'Lovelace',
    nationality: 'British',
    bio: "Ada Lovelace was a mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She is considered the world's first computer programmer.",
  },
  {
    name: 'Sojourner',
    lastName: 'Truth',
    nationality: 'American',
    bio: "Sojourner Truth was an African-American abolitionist and women's rights activist. She escaped from slavery and became a powerful speaker, advocating for the abolition of slavery and for women's rights.",
  },
  {
    name: 'Margaret',
    lastName: 'Thatcher',
    nationality: 'British',
    bio: 'Margaret Thatcher was a British stateswoman who served as Prime Minister of the United Kingdom from 1979 to 1990, making her the longest-serving British prime minister of the 20th century. She was known for her conservative policies and leadership style.',
  },
  {
    name: 'Florence',
    lastName: 'Nightingale',
    nationality: 'British',
    bio: "Florence Nightingale was a trailblazing figure in nursing who greatly affected 19th- and 20th-century policies around proper medical care. She became known as 'The Lady with the Lamp' during the Crimean War, where she tended to wounded soldiers.",
  },
  {
    name: 'Marie',
    lastName: 'Antoinette',
    nationality: 'Austrian',
    bio: 'Marie Antoinette was the last queen of France before the French Revolution. She became infamous for her extravagant lifestyle and was accused of being disconnected from the struggles of the French people, leading to her eventual execution.',
  },
  {
    name: 'Queen',
    lastName: 'Victoria',
    nationality: 'British',
    bio: 'Queen Victoria was the queen of the United Kingdom of Great Britain and Ireland from 1837 to 1901. She presided over a period of significant cultural, economic, and technological change, and her reign was marked by the expansion of the British Empire.',
  },
  {
    name: 'Sacagawea',
    lastName: '',
    nationality: 'Shoshone',
    bio: 'Sacagawea was a Lemhi Shoshone woman who played a crucial role as an interpreter and guide for the Lewis and Clark Expedition. She traveled thousands of miles with the expedition and helped facilitate diplomatic relations with Native American tribes.',
  },
  {
    name: 'Anne',
    lastName: 'Frank',
    nationality: 'German',
    bio: 'Anne Frank was a Jewish diarist and Holocaust victim who gained posthumous fame for her diary, which documents her experiences hiding during the German occupation of the Netherlands in World War II. Her diary has been translated into numerous languages and remains a powerful testament to the human spirit.',
  },
  {
    name: 'Queen',
    lastName: 'Elizabeth II',
    nationality: 'British',
    bio: 'Queen Elizabeth II is the longest-reigning current monarch and the longest-serving current head of state. She has been queen of the United Kingdom and other Commonwealth realms since 1952, overseeing a period of significant social and cultural change.',
  },
];

@Injectable()
export class AppService {
  getWomen(): iWomen[] {
    return women;
  }
  pepoteSaysHello(): string {
    return 'Hola soy Pepote';
  }
}
