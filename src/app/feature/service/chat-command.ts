export enum ChatCommandTypes {
    Date = 'date',
    Map = 'map',
    Rate = 'rate',
    Complete = 'complete',
    Message = 'message'
}

export interface ChatCommand{
    type : ChatCommandTypes.Date | ChatCommandTypes.Map | ChatCommandTypes.Rate | ChatCommandTypes.Complete;
}

export interface MessageCommand{
    type : ChatCommandTypes.Message;
    author : string | undefined;
}
