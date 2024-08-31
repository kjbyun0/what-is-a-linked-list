class LinkedList {
  constructor(node=null) {
    this.head = node;
  }

  // iterate() {
  //   let curNode = this.head;
  //   while (curNode) {
  //     console.log(`=> '${curNode.value}'`);
  //     curNode = curNode.next;
  //   }
  //   console.log(`=> Node with value '${this.head.value}'`);
  // }

  iterate(cb) {
    let curNode = this.head;
    let count = 0;
    while (curNode) {
      const bStop = cb(curNode, count);
      if (bStop === true) {
        return curNode;
      }
      curNode = curNode.next;
      count++;
    }
    return this.head;
  }

  // print each node's value on its own line
  // use your iterate method to be DRY! Don't get caught in the code rain, brrr.
  print() {
    this.iterate((node) => console.log(`${node.value}`));
  }

  // find the node with the target value and return it
  // if not found return null, use your iterate method to be DRY!
  find(target) {
    let resNode = null;

    this.iterate((node) => {
      if (node.value === target) {
        resNode = node;
        return true;
      }
    });

    return resNode;
  }

  // add the node to the start of the list, no nodes should be removed
  addFirst(node) {
    node.next = this.head;
    this.head = node;
  }

  // add node to end of list, no nodes should be removed
  // you may wish to use the iterate method
  addLast(node) {
    let lastNode = null;
    node.next = null;

    if (!this.head) {
      this.head = node;
      return;
    }

    this.iterate((curNode) => {
      if (curNode.next === null) {
        lastNode = curNode;
        return true;
      }
    });

    lastNode.next = node;
  }

  // remove the first Node in the list and update head
  // and return the removed node
  removeFirst() {
    const oldHead = this.head;

    if (this.head)
      this.head = this.head.next;
    return oldHead;
  }

  // remove the tail node, iterate may be helpful
  // return the node you just removed
  removeLast() {
    let lastNode = null; 

    if (this.head === null || this.head.next === null) {
      lastNode = this.head;
      this.head = null;
      return lastNode;
    } 

    this.iterate((node) => {
      if (node.next.next === null) {
        lastNode = node.next;
        node.next = null;
        return true;
      }
    });
    return lastNode;
  }

  // replace the node at the given index with the given node
  replace(idx, node) {
    if (idx === 0 && this.head) {
      node.next = this.head.next;
      this.head = node;
      return node;
    }

    let resNode = null;
    this.iterate((curNode, count) => {
      // if (curNode === null) {
      //   if (count === idx) {
      //     node.next = null;
      //     this.head = node;
      //     resNode = node;
      //   } else {
      //     resNode = null;
      //   }
      //   return true;
      // }
      if (count === idx - 1 && curNode.next) {
        node.next = curNode.next.next;
        curNode.next = node;
        resNode = node;
        return true;
      }
    });

    return resNode;
  }

  // insert the node at the given index
  // no existing nodes should be removed or replaced
  insert(idx, node) {
    if (idx === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }

    this.iterate((curNode, count) => {
      if (count === idx - 1) {
        node.next = curNode.next;
        curNode.next = node;
        return true;
      }
    });
  }

  // remove the node at the given index, and return it
  remove(idx) {
    let removedNode = null;

    if (idx === 0 && this.head) {
      removedNode = this.head;
      this.head = this.head.next;
      return removedNode;
    }

    this.iterate((node, count) => {
      if (count === idx - 1) {
        removedNode = node.next;
        node.next = node.next.next;
        return true;
      }
    });

    return removedNode;
  }

  clear() {
    this.head = null;
  }
}

class Node {
  constructor(value=null, next=null) {
    this.value = value;
    this.next = next;
  }
}

if (require.main === module) {
  // add your own tests in here
  // let node = new Node('Hamtaro');
  // let linkedList = new LinkedList(node);

  // linkedList.head.next = new Node('Walter White');

  // console.log("Head: ", linkedList.head);
  // console.log("Next: ", linkedList.head.next);

  // node = new Node;
  // console.log("Null Node: ", node);

  // linkedList = new LinkedList();
  // console.log("Null Linked List: ", linkedList);

  ///////////////////////////////////////////////////////////////

  // let head = new Node('hi again', new Node('but why'));
  // let list = new LinkedList(head);
  // list.print();
  // console.log("find 'but why': ", list.find('but why'));
  // console.log("find 'why not': ", list.find('why not'));

  // list.addFirst(new Node('first node'));
  // list.print();

  // list.addLast(new Node("last node"));
  // list.print();

  // console.log("Remove First Node: ", list.removeFirst());
  // list.print()

  ////////////////////////////////////////////////////////////////

  // const list = new LinkedList();
  // list.print();
  // console.log("Remove Last: ", list.removeLast());

  // console.log("");
  // list.addFirst(new Node("first"));
  // list.print();
  // console.log("Remove Last: ", list.removeLast());

  // console.log("");
  // list.addFirst(new Node('first'));
  // list.addLast(new Node('last'));
  // list.print();
  // console.log("Remove Last: ", list.removeLast());

  // console.log("");
  // list.addFirst(new Node('first'));
  // list.addLast(new Node('second'));
  // list.addLast(new Node('last'));
  // list.print();
  // console.log("Remove Last: ", list.removeLast());

  ////////////////////////////////////////////////////////////////

  // const list = new LinkedList();
  // console.log("1: ", list.replace(0, new Node("replaced node")));
  // list.print();

  // console.log("");
  // list.addFirst(new Node("first"));
  // list.print();
  // console.log("2: ", list.replace(1, new Node("replaced node")));
  // list.print();
  // console.log("3: ", list.replace(0, new Node("replaced node")));
  // list.print();
  // list.removeFirst();

  // console.log("");
  // list.addFirst(new Node('first'));
  // list.addLast(new Node('last'));
  // list.print();
  // console.log("4:", list.replace(2, new Node("replaced node")));
  // list.print();
  // console.log("5:", list.replace(1, new Node("replaced node")));
  // list.print();
  // console.log("6:", list.replace(0, new Node("newly replaced node")));
  // list.print();

  ////////////////////////////////////////////////////////////////

  // const list = new LinkedList();
  // list.print();

  // console.log('');
  // list.insert(1, new Node('-1'));
  // list.insert(0, new Node('one'));
  // list.print();

  // console.log('');
  // list.insert(1, new Node('two'));
  // list.print();

  // console.log('');
  // list.insert(0, new Node('before one'));
  // list.print();

  // console.log('');
  // list.insert(1, new Node('right before one'));
  // list.print();

  // console.log('');
  // list.insert(4, new Node('three'));
  // list.print();

  // console.log('');
  // list.remove(0);
  // list.print();

  // console.log('');
  // list.remove(3);
  // list.print();

  // console.log('');
  // list.remove(1);
  // list.print();

  ////////////////////////////////////////////////////////////////

  const nodeFour = new Node("four");
  const nodeThree = new Node("three", nodeFour);
  const nodeTwo = new Node("two", nodeThree);
  const nodeOne = new Node("one", nodeTwo);
  let linkedList = new LinkedList(nodeOne);

  const values = [];
  linkedList.iterate((node) => values.push(node));
  linkedList.print();
  console.log("values", values);

}

module.exports = {
  Node, LinkedList
};
