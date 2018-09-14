export class Incident {
  id: string;
  title: string;
  reportTime: Date;
  level: number;
  description: string;

  // transfer from/to JSON object, see http://choly.ca/post/typescript-json/
  //
  // fromJSON is used to convert an serialized version
  // of the User to an instance of the class
  static fromJSON(json: IncidentJSON | string): Incident {
    if (typeof json === 'string') {
      // if it's a string, parse it first
      return JSON.parse(json, Incident.reviver);
    } else {
      // create an instance of the User class
      const incident = Object.create(Incident.prototype);
      // copy all the fields from the json object
      return Object.assign(incident, json, {
        // convert fields that need converting
        reportTime: new Date(json.reportTime)
      });
    }
  }

  // reviver can be passed as the second parameter to JSON.parse
  // to automatically call User.fromJSON on the resulting value.
  static reviver(key: string, value: any): any {
    return key === '' ? Incident.fromJSON(value) : value;
  }

  // toJSON is automatically used by JSON.stringify
  toJSON(): IncidentJSON {
    // copy all fields from `this` to an empty object and return in
    return Object.assign({}, this, {
      // convert fields that need converting
      reportTime: this.reportTime.toString()
    });
  }
}

export interface IncidentJSON {
  id: string;
  title: string;
  reportTime: string;
  level: number;
  description: string;
}
