import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';

@Injectable()
export class AppService {

  prefixTable(pattern) {

    const table = [0]; // PI[1] = 0

    let pIndex = 0; // => k, pattern index
    let sIndex = 1; // q

    // for ciklust nem használunk, mert JS-ben furán tud működni, while-ra irtam át.

    while (sIndex < pattern.length) {
      /* hossz[szó] -> sIndex: q, 2. indexnél kezdünk, az JS-ben az 1-es index. */
      if (pattern[pIndex] === pattern[sIndex]) {
        /*S[k + 1] = S[q]*/
        table[sIndex] = pIndex + 1;
        sIndex += 1;
        pIndex += 1;
      } else if (pIndex === 0) {
        /*π[q] := k*/
        table[sIndex] = 0;
        sIndex += 1;
      } else {
        /*S[k + 1] != S[q]*/
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
    let patternPosition = 0; // q

    const patternTable = this.prefixTable(pattern);

    while (textPosition < text.length) {
      if (text[textPosition] === pattern[patternPosition]) { /*S[q + 1] = A[i]*/
        if (patternPosition === pattern.length - 1) { /*q = m*/
          return {
            message: 'Pattern match successfull',
            position: (textPosition - pattern.length) + 1,
          };
        }
        patternPosition += 1;
        textPosition += 1;
      } else if (patternPosition > 0) { /*q := π[q]*/
        patternPosition = patternTable[patternPosition - 1];
      } else { /*léptetjük a 'for' ciklusunkat*/
        patternPosition = 0;
        textPosition += 1;
      }
    }

    throw new NotFoundException('Match not found');
  }


  getKmp(text: string, pattern: string) {

    /*
    * MINTA bemenet:
    *
    * http://localhost:3000/?text=aaabbaa&pattern=aabc -> nem illeszkedi
    * http://localhost:3000/?text=aaabbaa&pattern=aab -> illeszkedik
    * http://localhost:3000/?text=aaabbaa&pattern= -> hiba, pattern üres
    *
    * */

    Logger.log(text, 'INPUT TEXT');
    Logger.log(pattern, 'SEARCH PATTERN');

    return this.kmpMatch(text, pattern);
  }


}
