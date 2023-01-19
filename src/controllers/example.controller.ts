import {get} from '@loopback/rest'
const { Connection, Statement, } = require('./datasources/Idb-pconnector/idb-pconnector.js');


export class ExampleController {
  constructor() {}

  @get('/example')
  
  example(): string {
    return this.execExample().toString();
  }

  async execExample() {
    const connection = new Connection({ url: '*LOCAL' });
    const statement = new Statement(connection);
  
    const results = await statement.exec('SELECT * FROM QIWS.QCUSTCDT');
    console.log(`results:\n ${JSON.stringify(results)}`);
    return JSON.stringify(results);
  }
}
