import { Quotes } from './quotes';

describe('Quotes', () => {
  it('should create an instance', () => {
    expect(new Quotes(0,"","",new Date(),0,0)).toBeTruthy();
  });
});
