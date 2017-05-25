export class ByteConverterService {

  supportedByteConverter = ['byte', 'bit'];

  private exchangeRates = {
    "byte/bit": 0.8007,
    "bit/byte": 1.1397
  };

  // getExchangeRate(baseCurrency: string, targetCurrency: string) {
  //   if (baseCurrency === targetCurrency) {
  //     return 1;
  //   }
  //   return this.exchangeRates[baseCurrency +'/'+ targetCurrency];
  // }
}
