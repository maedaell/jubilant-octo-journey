export class ByteConverterService {

  supportedByteConverter = ['byte', 'bit'];

  private convertValue = {
    "byte/bit": 8,
    "bit/byte": 0.125
  };

  getConvertValue(base: string, target: string) {
    if (base === target) {
      return 1;
    }
    return this.convertValue[base +'/'+ target];
  }
}
