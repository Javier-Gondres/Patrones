export class Expression {
  interpret() {
    throw new Error('interpret() debe implementarse');
  }
}

export class NumberExpr extends Expression {
  constructor(value) {
    super();
    this.value = value;
  }

  interpret() {
    return this.value;
  }
}

export class AddExpr extends Expression {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }

  interpret() {
    return this.left.interpret() + this.right.interpret();
  }
}

export class SubtractExpr extends Expression {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }

  interpret() {
    return this.left.interpret() - this.right.interpret();
  }
}
