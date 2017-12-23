import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    });
  });

  it('should be created', inject([CalculatorService], (service: CalculatorService) => {
    expect(service).toBeTruthy();
  }));

   it('should be 1 + 4 = 5',
    inject([CalculatorService], (service: CalculatorService) => {
      let soma = service.calculate(1, 4, CalculatorService.ADDICTION);
      expect(soma).toEqual(5);
    })
  );

  it('should be 1 - 4 = -3',
    inject([CalculatorService], (service: CalculatorService) => {
      let subtracao = service.calculate(1, 4, CalculatorService.SUBTRACTION);
      expect(subtracao).toEqual(-3);
    })
  );

  it('should be 1 / 4 = 0.25',
    inject([CalculatorService], (service: CalculatorService) => {
      let divisao = service.calculate(1, 4, CalculatorService.DIVISION);
      expect(divisao).toEqual(0.25);
    })
  );

  it('should be 1 * 4 = 4',
    inject([CalculatorService], (service: CalculatorService) => {
      let multiplicacao = service.calculate(1, 4, CalculatorService.MULTIPLICATION);
      expect(multiplicacao).toEqual(4);
    })
  );

  it('should return 0 for invalid operation',
    inject([CalculatorService], (service: CalculatorService) => {
      let operacaoInvalida = service.calculate(1, 4, '%');
      expect(operacaoInvalida).toEqual(0);
    })
  );
});
