import { InMemoryBackendConfig, InMemoryDbService } from 'angular-in-memory-web-api';

import { IPost } from './ipost';

export class PostData implements InMemoryDbService, InMemoryBackendConfig {
  createDb() {
    const posts: IPost[] = [
      {
        id: 1,
        productName: 'Product 1',
        productCode: '0011'
      },
      {
        id: 2,
        productName: 'Product 2',
        productCode: '0023'
      },
      {
        id: 5,
        productName: 'Product 5',
        productCode: '0048'
      },
      {
        id: 8,
        productName: 'Product 8',
        productCode: '0022'
      },
      {
        id: 10,
        productName: 'Product 10',
        productCode: '0042'
      }
    ];
    return { posts };
  }
}
