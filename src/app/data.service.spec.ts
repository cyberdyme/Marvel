import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('DataServiceService', () => {
  let service: DataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('should get CharacterModel', () => {

    service.getJSON().subscribe(x => {
      expect(x.code).toBe(200);
      expect(x.status).toBe('Ok');
      expect(x.copyright).toContain('MARVEL');

      expect(x.Characters[0].Comics[0].name).toBe('Avengers: The Initiative (2007) #14');
      expect(x.Characters[0].Series[0].name).toBe('Avengers: The Initiative (2007 - 2010)');
      expect(x.Characters[0].Stories[0].name).toBe('Cover #19947');
      expect(x.Characters[0].Events[0].name).toBe('Secret Invasion');
    });

    const req = httpTestingController.expectOne('assets/character.json');
    expect(req.request.method).toEqual('GET');

    const mockData = {
      'code': 200,
      'status': 'Ok',
      'copyright': '© 2019 MARVEL',
      'attributionText': 'Data provided by Marvel. © 2019 MARVEL',
      'attributionHTML': '<a href="http://marvel.com">Data provided by Marvel. © 2019 MARVEL</a>',
      'etag': '9af006e385beeb01f65066525cd0450cb8ce02c2',
      'data': {
        'offset': 0,
        'limit': 20,
        'total': 1491,
        'count': 20,
        'results': [
          {
            'id': 1011334,
            'name': '3-D Man',
            'description': '',
            'modified': '2014-04-29T14:18:17-0400',
            'thumbnail': {
              'path': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
              'extension': 'jpg'
            },
            'resourceURI': 'http://gateway.marvel.com/v1/public/characters/1011334',
            'comics': {
              'available': 12,
              'collectionURI': 'http://gateway.marvel.com/v1/public/characters/1011334/comics',
              'items': [
                {
                  'resourceURI': 'http://gateway.marvel.com/v1/public/comics/21366',
                  'name': 'Avengers: The Initiative (2007) #14'
                },
              ],
              'returned': 12
            },
            'series': {
              'available': 3,
              'collectionURI': 'http://gateway.marvel.com/v1/public/characters/1011334/series',
              'items': [
                {
                  'resourceURI': 'http://gateway.marvel.com/v1/public/series/1945',
                  'name': 'Avengers: The Initiative (2007 - 2010)'
                }
              ],
              'returned': 3
            },
            'stories': {
              'available': 21,
              'collectionURI': 'http://gateway.marvel.com/v1/public/characters/1011334/stories',
              'items': [
                {
                  'resourceURI': 'http://gateway.marvel.com/v1/public/stories/19947',
                  'name': 'Cover #19947',
                  'type': 'cover'
                }
              ],
              'returned': 20
            },
            'events': {
              'available': 1,
              'collectionURI': 'http://gateway.marvel.com/v1/public/characters/1011334/events',
              'items': [
                {
                  'resourceURI': 'http://gateway.marvel.com/v1/public/events/269',
                  'name': 'Secret Invasion'
                }
              ],
              'returned': 1
            },
            'urls': [
              {
                'type': 'detail',
                'url': 'http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=cab7bf9824b729c6d118dca91bea143c'
              }
            ]
          }
        ]
      }
    };
    req.flush(mockData);

    httpTestingController.verify();
  });

});
