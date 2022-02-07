import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TestBed, getTestBed, async } from '@angular/core/testing';
import { of } from 'rxjs';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ServiceService } from './service.service';

describe('ServiceService', () => {
  let service: ServiceService;

  const httpStub = {
    get: (_params: any) =>
      of([
        {
          id: '5525',
          codigo: '250-1',
          nome: '1 DE MAIO',
        },
      ]),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: httpStub,
        },
      ],
    });
    service = TestBed.inject(ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

// it(' Ele deve chamar um get com o endpoint correto', ())

// const mockResponse = {};

// fdescribe('ServiceService', () => {
//   let service: ServiceService;
//   let injector: TestBed;
//   let httpClient: HttpClient;
//   let httpMock: HttpTestingController;

//   const httpStub = {
//     get: (_params: any) =>
//       of([{ id: '5525', codigo: '250-1', nome: '1 DE MAIO' }]),
//   };

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       declarations: [],
//       providers: [
//         {
//           provide: HttpClient,
//           useValue: httpStub,
//         },
//       ],
//     })
//       .compileComponents()
//       .then(() => {
//         injector = getTestBed();
//         httpClient = injector.get(HttpClient);
//         httpMock = injector.get(HttpTestingController);
//         service = injector.get(ServiceService);
//       });
//     // service = TestBed.inject(ServiceService);
//   }));

//   it('should be created', () => {
//     service = new ServiceService(httpClient);
//     expect(service).toBeTruthy();
//   });
// });

// //Primeiro Modo de fazer

// it(`Dado o ServiceService
//    Quando o método getApiBus retornar com sucesso
//    Então deve retornar as paradas`, () => {
//   let getApiBusResponse;
//   const getApiBus =
//     'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=o';
//   spyOn(httpClient, 'get').and.returnValue(of(mockResponse));

//   const params = { q: getApiBus, type: 'track' };
//   const headers = new HttpHeaders().set('');
// });
