export class FileColono {
  private _folderName: string;
  private _fitxersColono: File[] = [];


  constructor() {
    this._folderName = this.generateUniqueString();
  }

  private generateUniqueString() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }


  get fitxersColono(): File[] {
    return this._fitxersColono;
  }

  set fitxersColono(value: File[]) {
    this._fitxersColono = value;
  }


  get folderName(): string {
    return this._folderName;
  }
}
