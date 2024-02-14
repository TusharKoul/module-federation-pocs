import Component from '@glimmer/component';
import Button from 'remoteApp/Button'

export default class MyComponentComponent extends Component {
  constructor() {
    super(...arguments);
    this.count = 0;
  }

  get name() {
    // console.log('name', Button);
    return 'John Doe';
  }
}
