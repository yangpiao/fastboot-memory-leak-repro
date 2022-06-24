import Component from '@glimmer/component';

export default class FooComponent extends Component {
  constructor() {
    super(...arguments);
    throw new Error('foo bar baz');
  }
}
