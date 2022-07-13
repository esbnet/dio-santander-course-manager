import { Pipe } from '@angular/core';

@Pipe({ name: 'replace' })
export class ReplacePipe {
  transform(value: string, char: string, valueToReplace: string): string {
    return value.replace(char, valueToReplace);
  }
}
