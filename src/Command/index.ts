interface Command {
  execute(): void;

  undo(): void;
}

class TV {
  public on(): void {
    console.log('TV turned on');
  }

  public off(): void {
    console.log('TV turned off');
  }
}

class TVOnCommand implements Command {
  tv: TV;

  constructor(tvSet: TV) {
    this.tv = tvSet;
  }

  public execute(): void {
    this.tv.on();
  }

  public undo(): void {
    this.tv.off();
  }
}

class Pult {
  _command: Command;

  public set command(com: Command) {
    this._command = com;
  }

  public pressButton(): void {
    this._command.execute();
  }

  public pressUndo(): void {
    this._command.undo();
  }

}
