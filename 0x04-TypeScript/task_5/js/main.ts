export interface MajorCredits {
  credits: number & { __brand: 'MajorCredits.credits' };
}

export interface MinorCredits {
  credits: number & { __brand: 'MinorCredits.credits' };
}

export function sumMajorCredits(course1: MajorCredits, course2: MajorCredits): MajorCredits {
  return { credits: course1.credits + course2.credits } as MajorCredits;
}

export function sumMinorCredits(course1: MinorCredits, course2: MinorCredits): MinorCredits {
  return { credits: course1.credits + course2.credits } as MinorCredits;
}
