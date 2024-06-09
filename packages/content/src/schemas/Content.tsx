import React from "react";

export class Content<T> {
  protected data?: T = undefined;
  protected className = "";

  constructor(initial?: T) {
    this.data = initial;
  }

  public Build(): React.ReactNode {
    throw "Not implemented";
  }
}

export type TextContentInput = string | (string | Content<any>)[];
export class TextContent extends Content<TextContentInput> {
  constructor(data: TextContentInput) {
    super(data);
    this.className = "flex flex-row gap-2";
  }

  public override Build(): React.ReactNode {
    if (!this.data) {
      return <div className={this.className}></div>;
    }

    if (typeof this.data == "string") {
      return <div className={this.className}>{this.data}</div>;
    }

    return (
      <div className={this.className}>
        {this.data.map((d) => (d instanceof Content ? d.Build() : <p>{d}</p>))}
      </div>
    );
  }
}

export class TitleContent extends TextContent {
  constructor(data: TextContentInput) {
    super(data);
    this.className = this.className + " text-xl font-semibold";
  }
}
