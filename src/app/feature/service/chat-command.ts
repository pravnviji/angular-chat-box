export enum ChatCommandTypes {
  Date = 'date',
  Map = 'map',
  Rate = 'rate',
  Complete = 'complete',
  Message = 'message',
}

export interface IChatCommand {
  type:
    | ChatCommandTypes.Date
    | ChatCommandTypes.Map
    | ChatCommandTypes.Rate
    | ChatCommandTypes.Complete;
}

export interface IMessageCommand {
  type: ChatCommandTypes.Message;
  author: string | undefined;
  message?: string;
}

export interface IChatCommandResponse {
  command: IMapResponse | IDateResponse | IRateResponse | ICompleteResponse;
}

export interface IMapResponse {
  type: ChatCommandTypes.Message;
  data: {
    lat: number | undefined;
    lng: number | undefined;
  };
}

export interface IDateResponse {
  type: ChatCommandTypes.Date;
  data: string | undefined;
}

export interface IRateResponse {
  type: ChatCommandTypes.Rate;
  data: Array<number> | undefined;
}

export interface ICompleteResponse {
  type: ChatCommandTypes.Rate;
  data: Array<number> | undefined;
}
