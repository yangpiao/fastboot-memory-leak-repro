import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BarComponent extends Component {
  @tracked counter = 0;

  @action
  increment() {
    this.counter++;
  }
}
