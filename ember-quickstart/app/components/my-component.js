import Component from '@glimmer/component';
import Button from 'remoteApp/Button'
// const Button = require('remoteApp/Button');
// import * as ReactModule from 'http://localhost:5001/assets/remoteEntry.js'

export default class MyComponentComponent extends Component {
  constructor() {
    super(...arguments);
    this.count = 0;
  }

  get name() {
    console.log('name', Button);
    return 'John Doe';
  }
}
