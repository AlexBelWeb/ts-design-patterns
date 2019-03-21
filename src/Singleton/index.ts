class OS {
  private static _instance: OS;

  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(name: string) {
    this._name = name;
  }

  protected constructor(name: string) {
    this.name = name;
  }

  public static getInstance(name: string): OS {
    if (this._instance === undefined) {
      this._instance = new OS(name);
    }
    return this._instance;
  }
}

class Computer {
  private _os: OS;
  public get os(): OS {
    return this._os;
  }
  public set os(os: OS) {
    this._os = os;
  }

  public launch(osName: string): void {
    this.os = OS.getInstance(osName);
  }
}
