import { observable } from 'mobx';

class Todo {
  id = Math.random();
  @observable title = '';
  @observable finished = false;

  constructor(props) {
    this.title = props.title;
    this.finished = !!props.finished;
  }


}

export default Todo;
