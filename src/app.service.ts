import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';

@Injectable()
export class AppService {

  patternTable(pattern) {
    const table = [0];
    let pIndex = 0;
    let sIndex = 1;

    while (sIndex < pattern.length) {
      if (pattern[pIndex] === pattern[sIndex]) {
        table[sIndex] = pIndex + 1;
        sIndex += 1;
        pIndex += 1;
      } else if (pIndex === 0) {
        table[sIndex] = 0;
        sIndex += 1;
      } else {
        pIndex = table[pIndex - 1];
      }
    }

    return table;
  }

  kmpMatch(text, pattern) {
    if (pattern.length === 0) {
      throw new BadRequestException('Pattern cannot be null, or empty.');
    }

    let textPosition = 0;
    let patternPosition = 0;

    const patternTable = this.patternTable(pattern);

    while (textPosition < text.length) {
      if (text[textPosition] === pattern[patternPosition]) {
        if (patternPosition === pattern.length - 1) {
          return {
            message: 'Pattern match successfull',
            position: (textPosition - pattern.length) + 1,
          };
        }
        patternPosition += 1;
        textPosition += 1;
      } else if (patternPosition > 0) {
        patternPosition = patternTable[patternPosition - 1];
      } else {
        patternPosition = 0;
        textPosition += 1;
      }
    }

    throw new NotFoundException('Match not found');
  }


  getKmp(text: string, pattern: string) {

    Logger.log(text, 'INPUT TEXT');
    Logger.log(pattern, 'SEARCH PATTERN');

    return this.kmpMatch(text, pattern);
  }


}
